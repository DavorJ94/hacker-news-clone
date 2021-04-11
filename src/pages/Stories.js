import React, { useState, useEffect } from "react";
import Story from "../Components/Story";
import "../styles/stories.css";
import { BASE_URL } from "../utils/baseUrl";
import activeTab from "../utils/activeTabFunction";
import checkIfFavorited from "../utils/checkIfFavorited";

export default function Stories({ path }) {
  let [stories, setStories] = useState([]);
  useEffect(() => {
    (async function getStories() {
      try {
        const request = await fetch(`${BASE_URL}${path}`);
        const response = await request.json();
        setStories(() => [...response]);
      } catch {
        console.error("Something went wrong while fetching data.");
      }
    })();
    activeTab(path);
  }, [path]);

  return (
    <>
      <table className="stories-container">
        <tbody>
          {stories.length ? (
            stories.map((item, index) => (
              <Story
                key={item.id}
                story={item}
                order={index + 1}
                isFavorited={checkIfFavorited(item)}
              />
            ))
          ) : (
            <tr>
              <td style={{ fontStyle: "italic" }}>
                There are no stories at the moment.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

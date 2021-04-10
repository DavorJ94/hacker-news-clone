import React, { useState, useEffect } from "react";
import Story from "../Components/Story";
import "../styles/stories.css";
import { BASE_URL } from "../utils/baseUrl";

export default function Stories({ path }) {
  let [stories, setStories] = useState([]);
  useEffect(() => {
    (async function getStories() {
      const request = await fetch(`${BASE_URL}${path}`);
      const response = await request.json();
      setStories(() => [...response]);
    })();
  }, [path]);

  return (
    <>
      <table className="stories-container">
        <tbody>
          {stories.map((item, index) => (
            <Story key={index} story={item} order={index} />
          ))}
        </tbody>
      </table>
    </>
  );
}

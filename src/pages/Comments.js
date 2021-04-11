import React, { useState, useEffect } from "react";
import Comment from "../Components/Comment";
import { BASE_URL } from "../utils/baseUrl";
import Story from "../Components/Story";
import checkIfFavorited from "../utils/checkIfFavorited";

export default function Comments() {
  const [commentsObj, setCommentsObj] = useState([]);
  const [storyData, setStoryData] = useState("");
  const itemId = window.location.href.split("=")[1];
  useEffect(() => {
    (async function getComments() {
      try {
        const idOfItem = window.location.href.split("=")[1];
        const request = await fetch(`${BASE_URL}/item/${idOfItem}`);
        const response = await request.json();
        setCommentsObj(() => response.comments);
        setStoryData(() => response);
      } catch {
        console.error("Something went wrong while fetching the data.");
      }
    })();
  }, []);

  function getComments(item) {
    const hasInnerComments = item.comments.length > 0;
    return hasInnerComments ? (
      [
        <Comment comment={item} key={item.id} />,
        item.comments.map((innerItem) => getComments(innerItem)),
      ]
    ) : (
      <Comment comment={item} key={item.id} />
    );
  }

  return (
    <>
      <table
        style={{ borderBottom: "1px solid #828282", paddingBottom: "10px" }}
        className="stories-container"
      >
        <tbody>
          <Story
            story={storyData}
            order={false}
            isFavorited={checkIfFavorited({
              id: itemId,
            })}
          />
        </tbody>
      </table>

      <table className="stories-container" style={{ paddingTop: "20px" }}>
        <tbody>
          {commentsObj.length ? (
            commentsObj.map((comment) => {
              return getComments(comment);
            })
          ) : (
            <tr>
              <td style={{ fontStyle: "italic" }}>
                There are no comments at the moment.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

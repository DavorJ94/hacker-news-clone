import React, { useState, useEffect } from "react";
import Comment from "../Components/Comment";
import { BASE_URL } from "../utils/baseUrl";
import Story from "../Components/Story";
export default function Comments() {
  const [commentsObj, setCommentsObj] = useState([]);
  const [storyData, setStoryData] = useState("");
  useEffect(() => {
    (async function getComments() {
      const idOfItem = window.location.href.split("=")[1];
      const request = await fetch(`${BASE_URL}/item/${idOfItem}`);
      const response = await request.json();
      setCommentsObj(() => response.comments);
      setStoryData(() => response);
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
          <Story story={storyData} order={false} />
        </tbody>
      </table>

      <table className="stories-container" style={{ paddingTop: "20px" }}>
        <tbody>
          {commentsObj.map((comment) => {
            return getComments(comment);
          })}
          {/* <Comment /> */}
        </tbody>
      </table>
    </>
  );
}

import React, { useState } from "react";
import "../styles/story.css";

export default function Story({
  story,
  order,
  isFavorited,
  updateRenderFavorite,
}) {
  const {
    id,
    title,
    points,
    time_ago,
    url,
    domain,
    user,
    type,
    comments_count,
  } = story;

  const [isFavoritedCurrent, setIsFavoritedCurrent] = useState(isFavorited);

  const handleFavoriteStories = () => {
    if (isFavoritedCurrent) {
      localStorage.removeItem(id);
      setIsFavoritedCurrent((prevState) => !prevState);
      updateRenderFavorite && updateRenderFavorite();
    } else {
      localStorage.setItem(id, JSON.stringify(story));
      setIsFavoritedCurrent((prevState) => !prevState);
      updateRenderFavorite && updateRenderFavorite();
    }
  };

  return (
    <>
      <tr className="athing" id={id}>
        <td className="title">
          {order ? <span className="rank">{order}.</span> : null}
        </td>
        <td className="votelinks">
          <center>
            <a id={`up_${id}`} href="/#">
              <div className="votearrow" title="upvote"></div>
            </a>
          </center>
        </td>
        <td className="title">
          <a href={url} className="storylink" rel="nofollow">
            {title}
          </a>{" "}
          {type !== "ask" && (
            <span className="sitebit comhead">
              (
              <a href="/#">
                <span className="sitestr">{domain}</span>
              </a>
              )
            </span>
          )}
        </td>
      </tr>
      <tr>
        <td colSpan="2"></td>
        <td className="subtext">
          <span className="score" id={`score_${id}`}>
            {points} points
          </span>{" "}
          by{" "}
          <a href={`/#`} className="hnuser">
            {user}
          </a>
          <span className="age">
            {" "}
            <a href="/#">{time_ago}</a>
          </span>{" "}
          <span id={`unv_${id}`}></span> | <a href="/#">hide</a> |{" "}
          <span className="hnpast">past</span> |{" "}
          <a href={`item?id=${id}`}>{comments_count}&nbsp;comments</a> |{" "}
          <span className="add-favorite" onClick={handleFavoriteStories}>
            {isFavoritedCurrent ? <span>♥</span> : <span>♡</span>}
            {isFavoritedCurrent ? " remove favorite" : " add favorite"}
          </span>
        </td>
      </tr>
    </>
  );
}

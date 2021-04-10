import "../styles/story.css";

export default function Story({ story, order }) {
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
  return (
    <>
      <tr className="athing" id={id}>
        <td className="title">
          {order ? <span className="rank">{order + 1}.</span> : null}
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
          <a
            href="https://hn.algolia.com/?query=Changing%20the%20efficiency%20of%20knowledge%20operations%20will%20change%20the%20shape%20of%20society&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0"
            className="hnpast"
          >
            past
          </a>{" "}
          | <a href={`item?id=${id}`}>{comments_count}&nbsp;comments</a>{" "}
        </td>
      </tr>
    </>
  );
}

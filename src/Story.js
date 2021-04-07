import "./styles/story.css";

export default function Story() {
  return (
    <>
      <tr className="athing" id="26730364">
        <td className="title">
          <span className="rank">1.</span>
        </td>
        <td className="votelinks">
          <center>
            <a
              id="up_26730364"
              href="vote?id=26730364&amp;how=up&amp;goto=newest"
            >
              <div className="votearrow" title="upvote"></div>
            </a>
          </center>
        </td>
        <td className="title">
          <a
            href="https://aviv.medium.com/when-we-change-the-efficiency-of-knowledge-operations-we-change-the-shape-of-society-d48ca870ff5b"
            className="storylink"
            rel="nofollow"
          >
            Changing the efficiency of knowledge operations will change the
            shape of society
          </a>
          <span className="sitebit comhead">
            (
            <a href="from?site=aviv.medium.com">
              <span className="sitestr">aviv.medium.com</span>
            </a>
            )
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan="2"></td>
        <td className="subtext">
          <span className="score" id="score_26730364">
            1 point
          </span>{" "}
          by{" "}
          <a href="user?id=exolymph" className="hnuser">
            exolymph
          </a>
          <span className="age">
            {" "}
            <a href="item?id=26730364">4 minutes ago</a>
          </span>{" "}
          <span id="unv_26730364"></span> |{" "}
          <a href="hide?id=26730364&amp;goto=newest">hide</a> |{" "}
          <a
            href="https://hn.algolia.com/?query=Changing%20the%20efficiency%20of%20knowledge%20operations%20will%20change%20the%20shape%20of%20society&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0"
            className="hnpast"
          >
            past
          </a>{" "}
          | <a href="item?id=26730364">1&nbsp;comment</a>{" "}
        </td>
      </tr>
    </>
  );
}

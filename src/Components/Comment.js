import React from "react";
import "../styles/comment.css";

export default function Comment({ comment }) {
  const { user, time_ago, content, level } = comment;
  return (
    <>
      <tr className="athing comtr" id="26760895">
        <td className="td-comment">
          <table className="table-comment">
            <tbody className="tbody-comment">
              <tr>
                <td className="ind" style={{ width: `${level * 40}px` }}></td>
                <td className="votelinks-comment">
                  <center>
                    <a id="up_26760895" href="/#">
                      <div className="votearrow-comment" title="upvote"></div>
                    </a>
                  </center>
                </td>
                <td className="default">
                  <div className="comment-user-row">
                    <span className="comhead-comment">
                      <a href="user?id=_Microft" className="hnuser">
                        {user}{" "}
                      </a>
                      <span className="age">
                        <span>{time_ago}</span>
                      </span>{" "}
                      <span id="unv_26760895"></span>
                      <span className="par"></span>
                      <span className="togg">[–]</span>
                      <span className="storyon"></span>
                    </span>
                  </div>
                  <br />
                  <div className="comment">
                    <span
                      className="commtext"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                    <div className="reply">
                      <p>
                        <font size="1">
                          <u>reply</u>
                        </font>
                      </p>
                    </div>{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

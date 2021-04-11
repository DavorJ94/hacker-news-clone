import React from "react";
import "../styles/comment.css";

export default function Comment({ comment }) {
  const { user, time_ago, content, level, id } = comment;
  return (
    <>
      <tr className="athing-comment comtr" id={id}>
        <td className="td-comment">
          <table className="table-comment">
            <tbody className="tbody-comment">
              <tr>
                <td className="ind" style={{ minWidth: `${level * 3}vw` }}></td>
                <td className="votelinks-comment">
                  <center>
                    <span id={`up_${id}`}>
                      <div className="votearrow-comment" title="upvote"></div>
                    </span>
                  </center>
                </td>
                <td className="default">
                  <div className="comment-user-row">
                    <span className="comhead-comment">
                      <span className="hnuser">{user} </span>
                      <span className="age">
                        <span>{time_ago}</span>
                      </span>{" "}
                      <span id={`unv_${id}`}></span>
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
                        <font>
                          <u>reply</u>
                        </font>
                      </p>
                    </div>
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

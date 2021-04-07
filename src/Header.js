import React from "react";
import logoImg from "./images/y18.gif";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
        <table className="header-table">
          <tbody>
            <tr className="header-row">
              <td className="imgContainer">
                <Link to="/" className="header-link">
                  <img src={logoImg} alt="logo" className="imgLogo" />
                </Link>
              </td>
              <td className="linksContainer">
                <span className="pagetop">
                  <Link to="news" className="hnname header-link">
                    Hacker News
                  </Link>
                  <Link to="/news" href="#" className="header-link">
                    top
                  </Link>{" "}
                  |
                  <Link to="/newest" className="header-link">
                    new
                  </Link>{" "}
                  |
                  <Link to="/ask" className="header-link">
                    ask
                  </Link>{" "}
                  |
                  <Link to="/show" className="header-link">
                    show
                  </Link>{" "}
                  |
                  <Link to="/favorites" className="header-link">
                    favorites
                  </Link>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

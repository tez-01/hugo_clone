import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle(window.scrollY > 200);
  });
  return (
    <>
      <header className="header section">
        <div className="container flex1">
          <ul className="logo">
            <li>
              {" "}
              <Link to="/">HUGO</Link>{" "}
            </li>
          </ul>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                {" "}
                <Link to="news">News</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="docs">Docs</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="">Theme</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="">Showcase</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="">Community</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="">Github</Link>{" "}
              </li>
              <div className="icon">
                <TwitterIcon className="TwitterIcon " />
                <GitHubIcon className="GitIcon icons" />
              </div>
            </ul>
          </div>
          <div
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

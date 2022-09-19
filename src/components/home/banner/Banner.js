import React from "react";
import "./banner.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container box">
          <div className="content-box">
            <img src="images/hugo.png" alt="" />
            <div className="search-bx">
              <SearchOutlinedIcon className="Search-ico" />
              <input type="text" placeholder="Search the Docs" />
            </div>
            <div className="inner-box">
              <h2>The world's fastest framework for building websites</h2>
              <p>
                Hugo is one of the most popular open-source static site
                generators. With its amazing speed and fleaxibility, Hugo makes
                building websites fun again.
              </p>
              <button type="button">Quick Start</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

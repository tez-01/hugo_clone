import React from "react";
import "./installation.css";

const Installation = () => {
  const tag = "www.hugo.io";
  return (
    <section className="installation">
      <div className="container grid Flex">
        <div className="install-content">
          <h1>Install in seconds, build in milliseconds.</h1>
          <h2>Hugo works on macOS, Windows, Linux, FreeBSD, and others.</h2>
          <h3>Host on any server or your favorite CDN.</h3>
        </div>
        <div className="install-img">
          <img className="bev-img" src="./images/beaver_img.png" alt="img" />
          <h5>macOS</h5>

          <div className="box-i">
            <p>$ brew install hugo</p>
          </div>
          <h5>Windows</h5>

          <div className="box-i">
            <p>$ choco install hugo -confirm</p>
          </div>
          <h5>Linux</h5>

          <div className="box-i">
            <p>$ snap install hugo</p>
          </div>
          <a href={tag}>See the Getting Started Guide for other methods.</a>
        </div>
      </div>
    </section>
  );
};

export default Installation;
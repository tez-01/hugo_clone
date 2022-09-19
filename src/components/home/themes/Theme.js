import React from "react";
import "./theme.css";

const Theme = () => {
  let url = "gohugo.io";
  return (
    <section className="theme">
      <div className="container grid">
        <div className="img-box">
          <img src="./images/port_img1.jpg" alt="img" />
        </div>
        <div className="text-box">
          <h1>300+ Themes</h1>
          <h4>
            Hugo provides a robust theming system that is easy to implement but
            capable of producing even the most complicated websites.
          </h4>
          <a href={url}> Checkout the Hugo themes.</a>
        </div>
      </div>
    </section>
  );
};

export default Theme;

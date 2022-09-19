import React from "react";
import "./capable.css";

const Capable = () => {
  let url = "gohugo.io";
  return (
    <section className="capable">
      <div className="container grid">
        <div className="text-box">
          <h1>Capable Templating</h1>
          <h4>
            Hugo's Go-based templating provides just the right amount of logic
            to build anything from the simple to complex.
          </h4>
          <a href={url}> Get Started.</a>
        </div>
        <div className="img-box">
          <img src="./images/capable_img1.jpg" alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Capable;

import React from "react";
import TestiData from "./TestiData";
import "./testimonial.css";

const Testimonial = () => {
  let hugo = "www.google.com";
  return (
    <section className="testimonial">
      <h1 className="t-head">See what others are saying about Hugo…</h1>
      <div className="container grid">
        {TestiData.map((value, index) => {
          return (
            <div className="test-box">
              <p>
                {value.con}{" "}
                <span>
                  {" "}
                  <a href={hugo}>{value.sub1}</a>
                </span>{" "}
                {value.to}{" "}
                <span>
                  {" "}
                  <a href={hugo}> {value.sub} </a>{" "}
                </span>{" "}
                {value.con2} <span> {value.sub2} </span>{" "}
              </p>
              <h5>{value.head}</h5>
              <h6>{value.dt}</h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;

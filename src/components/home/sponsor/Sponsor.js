import React from "react";
import "./sponsor.css";

const Sponsor = () => {
  const data = [
    {
      img: "./images/linode.png",
    },
    {
      img: "./images/esolia.png",
    },
    {
      img: "./images/cola.png",
    },
  ];
  return (
    <section className="sponsor">
      <div className="container box1 grid">
        <div className="text">
          <h1>Hugo Sponsors</h1>
        </div>
        {data.map((value) => {
          return (
            <div className="subBox">
              <div className="subBox1">
                <img src={value.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsor;

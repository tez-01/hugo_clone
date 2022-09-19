import React from "react";
import "./benefits.css";
import BenefitsData from "../benefits/BenefitsData";

const Benefits = () => {
  return (
    <section className="Benefits">
      <div className="container grid">
        {BenefitsData.map((value) => {
          return (
            <div className="mapData">
              <div className="imgee">
                <img src={value.imge} alt="icon" />
              </div>
              <div className="mapText">
                <h1>{value.boldHead}</h1>
                <h4>{value.heading}</h4>
                <p>{value.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;

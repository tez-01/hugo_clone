import React from "react";
import "./showcase.css";
import ShowcaseIM from "../showcase/ShowcaseIM";
import Button from "@mui/material/Button";

const Showcase = () => {
  return (
    <section className="showcase">
      <h1 className="main-head">Showcase </h1>
      <div className="container sideMargin">
        <div className="posters">
          {ShowcaseIM.map((value) => {
            return (
              <div className="inner-poster">
                <img className="inner-img" src={value.imge} alt="" />
                <h3 className="inner-text">{value.desc} </h3>
              </div>
            );
          })}
        </div>
        <Button className="showcase-btn" variant="contained" color="success">
          Success
        </Button>
      </div>
    </section>
  );
};

export default Showcase;

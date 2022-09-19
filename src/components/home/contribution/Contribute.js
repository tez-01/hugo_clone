import React from "react";
import "./contribution.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contribute = () => {
  return (
    <section className="contribution">
      <div className="git-icon">
        <GitHubIcon style={{ fontSize: "4rem" }} />
      </div>
      <div className="container grid">
        <div className="container-box">
          <h1>We welcome all contributions</h1>
          <p>
            Fork the repo and work on an issue
            <img src="./images/hyperlink.png" alt="" />
          </p>
          <p>
            Design a theme
            <img src="./images/hyperlink.png" alt="" />
          </p>
        </div>

        <div className="container-boxCenter">
          <p>Hugo is open-source and completely free.</p>
          <p>Our hundreds of contributors make Hugo great.</p>
        </div>

        <div className="container-box">
          <h1>More ways to contribute</h1>
          <p>
            Help improve the docs
            <img src="./images/hyperlink.png" alt="" />
          </p>
          <p>
            Help others in the forums
            <img src="./images/hyperlink.png" alt="" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contribute;

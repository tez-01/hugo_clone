import React from "react";

import "./footer.css";

const Footer = () => {
  let footerFile = "";
  let footerHelp = "";
  let footerCode = "";
  return (
    <>
      <footer>
        <div className="container footer">
          <div className="footer-text">
            <h2>
              By the <span>Hugo Authors</span>
            </h2>
            <img
              src="./images/hugo.png"
              alt=""
              style={{ width: "20%", margin: "1rem" }}
            />
            <div className="sub-div">
              <a href={footerFile}>File an Issue</a>
              <a href={footerHelp}>Get Help</a>
              <a href={footerCode}>Discuss Source Code</a>
            </div>
            <div className="sub-div">
              <a href={footerFile}>@GoHugoIO</a>
              <a href={footerHelp}>@spf13</a>
              <a href={footerCode}>@bepsays</a>
            </div>
            <div className="img-bx">
              <img src="images/footer_infinity.jpg" alt="img" />
            </div>
          </div>
          
        </div>
      </footer>
      <section className="legal">
      <img
            src="images/beaver_img2.png"
            className="bev-2"
            alt="img"
            style={{ width: "130px" }}
          />
        <p>The Hugo logos are copyright © Steve Francia 2013-2022.</p>
        <p>The Hugo Gopher is based on an original work by Renée French.</p>
        
      </section>
    </>
  );
};

export default Footer;
import React from "react";
import "./release.css";

const Release = () => {
  const data = [
    {
      heading: "December 23, 2021",
      desc: "Hugo 0.91.2 is the last release before Christmas!",
    },
    {
      heading: "December 17, 2021",
      desc: "Hugo Release Notes now gets released on GitHub Only",
    },
    {
      heading: "November 17, 2021",
      desc: "This version fixes one bug introduced in 0.89.0.",
    },
    {
      heading: "November 15, 2021",
      desc: "This version fixes a couple of bugs introduced in 0.89.0.",
    },
  ];
  return (
    <section className="release">
      <div className="container grid">
        {data.map((value) => {
          return (
            <>
              <div className="release-bx">
                <div className="release-box">
                  <h1>{value.heading}</h1>
                  <p>{value.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Release;

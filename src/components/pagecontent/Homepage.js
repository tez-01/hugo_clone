import React from "react";
import Banner from "../home/banner/Banner";
import Benefits from "../home/benefits/Benefits";
import Capable from "../home/capable/Capable";
import Contribute from "../home/contribution/Contribute";
import Installation from "../home/installation/Installation";
import Release from "../home/release/Release";
import Showcase from "../home/showcase/Showcase";
import Sponsor from "../home/sponsor/Sponsor";
import Testimonial from "../home/testimonial/Testimonial";
import Theme from "../home/themes/Theme";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Release />
      <Benefits />
      <Sponsor />
      <Theme />
      <Capable />
      <Showcase />
      <Installation />
      <Testimonial />
      <Contribute />
    </>
  );
};

export default HomePage;

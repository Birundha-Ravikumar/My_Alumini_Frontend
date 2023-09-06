import React from "react";
import FunfactCount from "../Home/FunfactCount";
import Banner from "../banner/Banner";
import AboutPageContent from "./AboutPageContent";
import CommitteeArea from "./CommitteeArea";
import AboutUs from "./AboutUs";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import '../About/style.css';

const About = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="About us" />
      <AboutPageContent />
      <FunfactCount />
      <CommitteeArea />
      <AboutUs />
      <FooterPage />
    </>
  );
};

export default About;
import React from "react";
import FunfactCount from "./FunfactCount";
import GalleryArea from "./GalleryArea";
import SliderArea from "./SliderArea";
import UpcomingArea from "./UpcomingArea";
import AboutArea from "./AboutArea";
import ResponseArea from "./ResponseArea";
import JobArea from "./JobArea";
import ScholershipArea from "./ScholershipArea";
import BlogArea from "./BlogArea";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import '../Home/style.css';

const Home = () => {
  return (
    <>
      <HeaderPage/>
      <SliderArea/>
      <UpcomingArea/>
      <AboutArea/>
      <ResponseArea/>
      <FunfactCount />
      <JobArea/>
      <GalleryArea />
      <ScholershipArea/>
      <BlogArea/>
      <FooterPage />
    </>
  );
};

export default Home;
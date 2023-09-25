import React from "react";
import Banner from "../banner/Banner";
import SidebarArea from "./SidebarArea";
import BlogContent from "./BlogContent";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const BlogLeftSidebar = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Blog Details" />
      <div id="page-content-wrap">
        <div className="blog-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <SidebarArea class="col-lg-4"/>
              <BlogContent/>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default BlogLeftSidebar;
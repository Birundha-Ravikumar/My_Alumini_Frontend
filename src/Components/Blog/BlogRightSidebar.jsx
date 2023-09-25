import React from "react";
import SidebarArea from "./SidebarArea";
import Banner from "../banner/Banner";
import BlogContent from "./BlogContent";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const BlogRightSidebar = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Blog Details" />
      <div id="page-content-wrap">
        <div class="blog-page-content-wrap section-padding">
          <div class="container">
            <div class="row">
              <BlogContent />
              <SidebarArea class="col-lg-4 order-first order-lg-last" />
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default BlogRightSidebar;
import React from "react";
import Banner from "../banner/Banner";
import SidebarArea from "./SidebarArea";
import images from "../../CurrentImages/ImageImports";
import SingleBlog from "./SingleBlog";
import Pagination from "../pagination/Pagination";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import '../Blog/blog.css';

const Blog = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Blog List" />
      <div id="page-content-wrap">
        <div className="blog-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-page-contant-start">
                  <div className="row">
                    <SingleBlog image={images.MCA_iOSLab}/>
                    <SingleBlog image={images.sports1}/>
                    <SingleBlog image={images.MBA_AmbiTheatre}/>
                    <SingleBlog image={images.MBA_Block}/>
                    <SingleBlog image={images.MBA_CompLab}/>
                    <SingleBlog image={images.MBA_Library}/>                    
                  </div>
                  <Pagination/>
                </div>
              </div>
              <SidebarArea class="col-lg-4"/>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default Blog;

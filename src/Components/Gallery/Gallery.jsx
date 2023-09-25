import React from "react";
import Banner from "../banner/Banner";
import Pagination from "../pagination/Pagination";
import GalleryContent from "./GalleryContent";
import GalleryImages from "./GalleryImages";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import '../Gallery/gallery.css';


const Gallery = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Gallery" />
      <section id="page-content-wrap">
        <div className="gallery-page-wrap section-padding">
          <div className="gallery-menu text-center">
            <a href="#" className="active">
              All
            </a>
            <a href="#">Seminar</a>
            <a href="#">Event</a>
            <a href="#">Picnic</a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="full-album-content">
                  <div className="single-album-wraper">
                    <GalleryContent />
                    <div className="album-gallery-item">
                      <GalleryImages />
                    </div>
                  </div>
                  <div className="single-album-wraper">
                    <GalleryContent />
                    <div className="album-gallery-item">
                      <GalleryImages />
                    </div>
                  </div>
                  <div className="single-album-wraper">
                    <GalleryContent />

                    <div className="album-gallery-item">
                      <GalleryImages />
                    </div>
                  </div>
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Gallery;
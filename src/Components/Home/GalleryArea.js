import React from "react";
import GalleryImages from "../Gallery/GalleryImages";


const GalleryArea = () => {
  return (
    <>
      <section id="gallery-area" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Our gallery</h2>
              </div>
            </div>
          </div>
          <div className="gallery-content-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="gallery-menu text-center">
                  <span className="active" data-filter="*">
                    All
                  </span>
                  <span data-filter=".old">Old Memories</span>
                  <span data-filter=".event">Event</span>
                  <span data-filter=".pic">Our Picnic</span>
                  <span
                    className="d-none d-sm-inline-block"
                    data-filter=".recent"
                  >
                    Recent
                  </span>
                </div>
                <GalleryImages />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryArea;
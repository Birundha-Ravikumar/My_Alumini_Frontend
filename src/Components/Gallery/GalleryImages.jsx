import React from "react";
import images from "../../CurrentImages/ImageImports";


const GalleryImages = () => {
  return (
    <div className="row gallery-gird">
      <div className="col-lg-3  col-sm-6 recent event">
        <div className="single-gallery-item gallery-bg-1">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.slider1} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 recent event">
        <div className="single-gallery-item gallery-bg-2">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery4} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 recent pic">
        <div className="single-gallery-item gallery-bg-3">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery2} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 old">
        <div className="single-gallery-item gallery-bg-4">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery3} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 pic event">
        <div className="single-gallery-item gallery-bg-5">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery5} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 old recent">
        <div className="single-gallery-item gallery-bg-6">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery6} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 old recent">
        <div className="single-gallery-item gallery-bg-7">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery6} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3  col-sm-6 pic recent old">
        <div className="single-gallery-item gallery-bg-8">
          <div className="gallery-hvr-wrap">
            <div className="gallery-hvr-text">
              <h4>University Cumpus</h4>
              <p className="gallery-event-date">28 Oct, 2018</p>
            </div>
            <a href={images.mepgallery7} className="btn-zoom image-popup">
              <img src={images.zoom} alt="a" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
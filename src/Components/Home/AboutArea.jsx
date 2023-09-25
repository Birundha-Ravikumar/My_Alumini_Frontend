import React from "react";
import images from "../../CurrentImages/ImageImports.js";

const AboutArea = () => {
  return (
    <section id="about-area" className="section-padding">
      <div className="about-area-wrapper">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-10">
              <div className="about-content-wrap">
                <div className="section-title text-lg-left">
                  <h2>Our Mission</h2>
                </div>

                <div className="about-thumb">
                  <img src={images.BArch1} alt="" className="img-fluid" />
                </div>

                <p>
                  There are many company Lorem ipsm dolor sitg amet, csetur
                  adipicing elit, sed do eiusmod tempor dncint ut labore et
                  dolore magna alis enim ad minim veniam, quis csetur adipicing
                  elit, sed do eiusmod tempor dncint ut labore et dolore magna
                  alis enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <p>
                  There are many company Lorem ipsm dolor sitg amet, csetur
                  adipicing elit, sed do eiusmod tempor dncint ut labore et
                  dolore magna alis enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <a href="/about" className="btn btn-brand about-btn">
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
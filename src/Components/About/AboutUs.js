import React from "react";
import images from "../ImageImports";

const AboutUs = () => {
  return (
    <section className="people-to-say section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="about-page-area-title">
              <h2>Some Speech About Us</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="people-to-say-wrapper owl-carousel">
              <div className="single-testimonial-wrap">
                <div className="people-thumb">
                  <img src={images.testi1} alt="Alumni" className="img-fluid" />
                </div>
                <i className="quote-icon"></i>
                <p>
                  Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                  elit, sed do eimod tempor inciidunt ut labore et dolorgna
                  aliqua. Ut enim ad minim ostrud.{" "}
                </p>
                <h4>
                  Robert Albert{" "}
                  <span className="people-deg">Founder at Boxr</span>
                </h4>
              </div>
              <div className="single-testimonial-wrap">
                <div className="people-thumb">
                  <img src={images.testi2} alt="" className="img-fluid" />
                </div>
                <i className="quote-icon"></i>
                <p>
                  Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                  elit, sed do eimod tempor inciidunt ut labore et dolorgna
                  aliqua. Ut enim ad minim ostrud.{" "}
                </p>
                <h4>
                  Akamla Albert{" "}
                  <span className="people-deg">Founder at Kamlakana</span>
                </h4>
              </div>
              <div className="single-testimonial-wrap">
                <div className="people-thumb">
                  <img src={images.testi3} alt="" className="img-fluid" />
                </div>
                <i className="quote-icon"></i>
                <p>
                  Exxcellent Lorem ipsum dolor sit amet, ectetur adipisicing
                  elit, sed do eimod tempor inciidunt ut labore et dolorgna
                  aliqua. Ut enim ad minim ostrud.{" "}
                </p>
                <h4>
                  Taklo Nahid{" "}
                  <span className="people-deg">Minister at Nara</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
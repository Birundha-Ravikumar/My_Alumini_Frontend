import React from "react";
import images from "../ImageImports.js";

const ResponseArea = () => {
  return (
    <section id="responsibility-area" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Our Responsibility</h2>
            </div>
          </div>
        </div>
        <div className="row text-center text-sm-left">
          <div className="col-lg-3 col-sm-6">
            <div className="single-responsibility">
              <img src={images.res1} alt="Responsibility" />
              <h4>Scholarship</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-responsibility">
              <img src={images.res2} alt="Responsibility" />
              <h4>Help Current Students</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-responsibility">
              <img src={images.res3} alt="Responsibility" />
              <h4>Help Our University</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-responsibility">
              <img src={images.res4} alt="Responsibility" />
              <h4>Build Our Community</h4>
              <p>
                De create building thinking about your requirment and latest
                treand on our marketplace area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseArea;
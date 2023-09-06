import React from "react";
import { Carousel } from "react-bootstrap";

const SliderArea = () => {
  return (
    <section id="slider-area">
      <Carousel
        id="testimonial-carousel"
        className="carousel carousel-fade slide"
        data-bs-ride="carousel"
        indicators={false}
      >
        <Carousel.Item>
          <div key={1}>
            <div className="single-slide-wrap slide-bg-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="slider-content">
                      <h2>We Are Proud</h2>
                      <h3>
                        Students of <span>Oxfornt University</span>
                      </h3>
                      <p>
                        Alumni Needs enables you to harness the power of your
                        alumni network. Whatever may be the need academic,
                        relocation, career, projects, mentorship, etc. you can
                        ask the community and get responses in three.
                      </p>
                      <div className="slider-btn">
                        <a
                          href="#about-area"
                          className="btn btn-brand smooth-scroll"
                        >
                          our mission
                        </a>
                        <a href="/about" className="btn btn-brand-rev">
                          our story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div key={2}>
            <div className="single-slide-wrap slide-bg-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="slider-content">
                      <h2>We Are Not Proud</h2>
                      <h3>
                        Students of <span>Oxfornt University</span>
                      </h3>
                      <p>
                        Alumni Needs enables you to harness the power of your
                        alumni network. Whatever may be the need academic,
                        relocation, career, projects, mentorship, etc. you can
                        ask the community and get responses in three.
                      </p>
                      <div className="slider-btn">
                        <a href="#" className="btn btn-brand">
                          our mission
                        </a>
                        <a href="#" className="btn btn-brand-rev">
                          our story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div key={3}>
            <div className="single-slide-wrap slide-bg-3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="slider-content">
                      <h2>Why Proud for u</h2>
                      <h3>
                        Students of <span>Oxfornt University</span>
                      </h3>
                      <p>
                        Alumni Needs enables you to harness the power of your
                        alumni network. Whatever may be the need academic,
                        relocation, career, projects, mentorship, etc. you can
                        ask the community and get responses in three.
                      </p>
                      <div className="slider-btn">
                        <a href="#" className="btn btn-brand">
                          our mission
                        </a>
                        <a href="#" className="btn btn-brand-rev">
                          our story
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="social-networks-icon social-networks-icon-display">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
              <span>7.2k Likes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i> <span>3.2m Followers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-pinterest"></i> <span>7.2k Likes</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i> <span style={{fontSize:'12px'}}>2.2k Subscribers</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SliderArea;
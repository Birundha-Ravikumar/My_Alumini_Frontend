import React from "react";
import Banner from "../banner/Banner";
import Pagination from "../pagination/Pagination";
import images from "../ImageImports.js";
import CareerJob from "./CareerJob";
import '../career/style.css';
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const Career = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Career" />
      <section id="page-content-wrap">
        <div className="career-page-wrapper">
          <div className="career-page-topbg">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <img
                    src={images.careerlogo}
                    className="img-fluid"
                    alt="career"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="career-page-content-wrap section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="event-filter-area">
                    <form action="index.html" className="form-inline d-flex">
                      <select name="cat" id="year" className="nice-select">
                        <option className="option-header" selected>Categories</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                      </select>

                      <select name="place" id="place" className="nice-select">
                        <option selected>Place</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Colorado</option>
                        <option>Delaware</option>
                      </select>

                      <select name="type" id="type" className="nice-select">
                        <option selected>Type</option>
                        <option>Meetup</option>
                        <option>Seminar</option>
                        <option>Get Together</option>
                      </select>

                      <button className="btn btn-brand">Filter</button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="job-opportunity-wrapper">
                <div className="row">
                  <CareerJob Joblogo={images.job1} btnName="Apply Now" />
                  <CareerJob Joblogo={images.job2} btnName="Apply Now" />
                  <CareerJob Joblogo={images.job3} btnName="Expired" />
                  <CareerJob Joblogo={images.job4} btnName="Apply Now" />
                  <CareerJob Joblogo={images.job1} btnName="Expired" />
                  <CareerJob Joblogo={images.job2} btnName="Apply Now" />
                  <CareerJob Joblogo={images.job3} btnName="Apply Now" />
                  <CareerJob Joblogo={images.job4} btnName="Expired" />
                  <CareerJob Joblogo={images.job1} btnName="Apply Now" />
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

export default Career;
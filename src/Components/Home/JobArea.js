import React from "react";
import CareerJob from "../career/CareerJob";
import images from "../ImageImports.js";

const JobArea = () => {
  return (
    <section id="job-opportunity" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Recent Jobs</h2>
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
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="/career" className="btn btn-brand btn-loadmore">
                All job list
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobArea;
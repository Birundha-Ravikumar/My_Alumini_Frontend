import React from "react";

const CareerJob = ({ Joblogo, btnName }) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 text-center">
        <div className="single-job-opportunity">
          <div className="job-opportunity-text">
            <div className="job-oppor-logo">
              <div className="display-table">
                <div className="display-table-cell">
                  <img src={Joblogo} alt="Job" />
                </div>
              </div>
            </div>
            <h3>
              <a href="#">Urgently Need Five Data Center Specialist</a>
            </h3>
            <p>
              Claritas est etiam procsus dymicus, qui sequitur mutationem
              Claritas est etiam procsus est etiam procsus dymicus.
              <a href="#">[...]</a>
            </p>
          </div>
          <a href="#" className="btn btn-job">
            {btnName}
          </a>
        </div>
      </div>
    </>
  );
};

export default CareerJob;
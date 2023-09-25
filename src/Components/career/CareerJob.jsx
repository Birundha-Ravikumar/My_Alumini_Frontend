import React from "react";
import '../career/career.css';

const CareerJob = ({ Joblogo, data }) => {
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
            <h3 style={{color:"#3b60c9", fontSize:"22px"}}>{data.title}</h3>
            <h5 style={{fontSize:"20px"}}>{data.position}</h5>
            <p>
              {data.discription}
            </p>
          </div>
          <div>
            <div>
          <button type="button" className="btn btn-framed btn-color-grey btn-small">
          <i className="fa-solid fa-envelope"></i>  {data.email}</button><br></br>
          <button type="button" className="btn btn-framed btn-color-grey btn-small">
          <i className="fa-solid fa-phone"></i>  {data.contactNumber}</button><br></br>
          <button type="button" className="btn btn-framed btn-color-grey btn-small">
          <i className="fa-brands fa-edge"></i>  {data.website}</button><br></br>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerJob;

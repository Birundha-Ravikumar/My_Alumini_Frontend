import React, { useEffect, useState } from "react";
import CareerJob from "../career/CareerJob";
import images from "../../CurrentImages/ImageImports.js";
import { JOB_GET_API } from "../../../utils/endpoints";
import { formHeaders } from "../../../utils/FormHeader";
import axios from "axios";

const JobArea = () => {
const [data,setData]=useState([]);

const fetchData = async () =>{
  try{
    const response = await axios.get(JOB_GET_API,formHeaders());
    setData(response.data.data);
  }
  catch(error){
    console.log("Error fetching data", error);
  }
}

useEffect(()=>{
  fetchData()
},[])

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
          {data.slice(0,3).map((job,index) => <CareerJob key={index} Joblogo={images.job1} data={job}/>)}
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
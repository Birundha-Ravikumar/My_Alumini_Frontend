import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Pagination from "../pagination/Pagination";
import images from "../../CurrentImages/ImageImports.js";
import CareerJob from "./CareerJob";
import "../career/career.css";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import axios from "axios";
import { JOB_GET_API } from "../../../utils/endpoints";
import { formHeaders } from "../../../utils/FormHeader";
import ReactPaginate from "react-paginate";

const Career = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(JOB_GET_API, formHeaders());
      setData(response.data.data);
      setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  {/* <div className="event-filter-area">
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
                  </div> */}
                </div>
              </div>

              <div className="job-opportunity-wrapper">
                <div className="row">
                  {subset.map((job) => (
                    <CareerJob Joblogo={images.job1} data={job} />
                  ))}
                </div>
                <p className="show-memeber text-end">
                  Show <span>{itemsPerPage}</span> of{" "}
                  <span>{subset.length} Jobs</span>
                </p>
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  pageCount={totalPages}
                  forcePage={currentPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageChange}
                  containerClassName={
                    "pagination justify-content-center bg-color-#9e4fa7"
                  }
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active"}
                />
                {/* <Pagination /> */}
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

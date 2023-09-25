import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import images from "../../CurrentImages/ImageImports";
import Pagination from "../pagination/Pagination";
import EventCount from "./EventCount";
import "../event/event.css";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import axios from "axios";
import { EVENT_GET_API } from "../../../utils/endpoints";
import { formHeaders } from "../../../utils/FormHeader";
import ReactPaginate from "react-paginate";

const Event = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 2;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(EVENT_GET_API, formHeaders());
      setData(response.data.data);
      setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
      console.log(response.data.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <HeaderPage />
      <Banner title="All Event Archive" />
      <section id="page-content-wrap">
        <div className="event-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <div className="event-filter-area">
                  <form action="index.html" className="form-inline d-flex">
                    <select name="year" id="year" className="nice-select">
                      <option selected>Year</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                    </select>
                    <select name="place" id="place"className="nice-select" >
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
            <div className="row">
              <div className="col-lg-12">
                <div className="all-event-list">
                  {subset.map((event) => (
                    <EventCount image={images.MBA_AmbiTheatre} data={event} />
                  ))}
                </div>
              </div>
            </div>
            <p className="show-memeber text-end">
              Show <span>{itemsPerPage}</span> of{" "}
              <span>{subset.length} Members</span>
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
              containerClassName={ "pagination justify-content-center bg-color-#9e4fa7"}
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
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Event;

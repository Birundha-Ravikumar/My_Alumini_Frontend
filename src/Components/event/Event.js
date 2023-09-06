import React from "react";
import Banner from "../banner/Banner";
import images from "../ImageImports";
import Pagination from "../pagination/Pagination";
import EventCount from "./EventCount";
import '../event/style.css';
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const Event = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="All Event Archive" />
      <section id="page-content-wrap">
        <div className="event-page-content-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="event-filter-area">
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="all-event-list">
                  <EventCount image={images.MBA_AmbiTheatre} />
                  <EventCount image={images.MBA_Block} />
                  <EventCount image={images.MBA_CompLab} />
                  <EventCount image={images.MBA_Library} />
                </div>
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Event;

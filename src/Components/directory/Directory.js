import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Pagination from "../pagination/Pagination";
import images from "../ImageImports.js";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import axios from "axios";
import { GET_API } from "../apiservices/endpoints";
import ReactPaginate from "react-paginate";
import "../directory/style.css";

const Directory = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const itemsPerPage = 10;

  const NumberCounter = ({ from, to, duration, value }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const timeElapsed = timestamp - startTimestamp;
        const progress = Math.min(timeElapsed / duration, 1);
        const currentValue = Math.round(from + progress * (to - from));
        setCount(currentValue);
        if (timeElapsed < duration) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [from, to, duration]);

    return <span className="counter-number-text">{count}</span>;
  };

  useEffect(() => {
    axios
      .get(GET_API, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGUxOTczODk2MGRmYWNkZTY1Mjk0YyIsImlhdCI6MTY5MzkxMjY1OX0.rXXXr75Hd4i7u2uUcCT9TuhyB38LOhKNwWQC05qfc7s",
        },
      })
      .then((response) => {
        setData(response.data);
        setRecords(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };


  return (
    <>
      <HeaderPage />
      <Banner title="Directory" />
      <section id="page-content-wrap">
        <div className="directory-page-content-warp section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="directory-text-wrap">
                  <h2>
                    Now we have{" "}
                    <strong className="funfact-count">
                      <NumberCounter from={1000} to={21910} duration={1000} />
                    </strong>{" "}
                    member{" "}
                  </h2>
                  <div className="table-search-area">
                    <form action="index.html">
                      <input type="search" placeholder="Type Your Keyword" />
                      <select name="dept" className="select-option">
                        <option selected>Dept</option>
                        <option value="cmt">Civil Engineering</option>
                        <option value="cmt">
                          Electrical and Electronics Engineering
                        </option>
                        <option value="cmt">
                          Electronics and Communication Engineering
                        </option>
                        <option value="cmt">
                          Computer Science and Engineering
                        </option>
                        <option value="cmt">Mechanical Engineering</option>
                        <option value="cmt">Information Technology</option>
                        <option value="cmt">Bio Technology</option>
                        <option value="cmt">
                          Artificial Intelligence and Data Science
                        </option>
                        <option value="cmt">Bio-Medical Engineering</option>
                      </select>
                      <button className="btn btn-brand">Search</button>
                    </form>
                  </div>
                  <div className="directory-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Degree</th>
                          <th scope="col">Department</th>
                          <th scope="col">Starting Year</th>
                          <th scope="col">Ending Year</th>
                          <th scope="col">Show Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subset.map((d, index) => (
                          <tr key={index}>
                            <td>
                              <img src={images.testi1} alt="table" />
                              {d.name}
                            </td>
                            <td>{d.degree}</td>
                            <td>{d.department}</td>
                            <td>{d.startingYear}</td>
                            <td>{d.endingYear}</td>
                            <td><button className="btn btn-default">Get Details</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="show-memeber text-end">
                    Show <span>10</span> of <span>12487 Member</span>
                  </p>
                </div>
              </div>
            </div>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={totalPages}
              forcePage={currentPage}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={"pagination justify-content-center"}
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
      </section>
      <FooterPage />
    </>
  );
};

export default Directory;

import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import images from "../../CurrentImages/ImageImports.js";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import axios from "axios";
import { GET_API } from "../../../utils/endpoints";
import ReactPaginate from "react-paginate";
import "../directory/directory.css";
import { Button, Modal } from "react-bootstrap";

const Directory = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGUxOTczODk2MGRmYWNkZTY1Mjk0YyIsImlhdCI6MTY5NDA5MDgyNH0.FFkisRzvnr62umWsfkVqoCh1iRyKLnwPUWkPfdbc99c",
        },
      })
      .then((response) => {
        setData(response.data);
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

  const handleFunc = (data) => {
    handleShow();
    setSelectedStudent(data);
  };
  console.log(selectedStudent);

  const filteredData = data.filter((alumniData) =>
    alumniData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
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
                      <NumberCounter
                        from={1}
                        to={filteredData.length}
                        duration={1000}
                      />
                    </strong>{" "}
                    students{" "}
                  </h2>
                  <div className="table-search-area">
                    <form action="">
                      <input
                        type="search"
                        placeholder="Search the Name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                      />
                      {/* <select name="dept" className="select-option">
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
                      <button className="btn btn-brand">Search</button> */}
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
                        {filteredData
                          .slice(startIndex, endIndex)
                          .map((alumniData, index) => (
                            <tr key={index}>
                              <td>
                                <img src={images.testi1} alt="table" />
                                {alumniData.name}
                              </td>
                              <td>{alumniData.degree}</td>
                              <td>{alumniData.department}</td>
                              <td>{alumniData.startingYear}</td>
                              <td>{alumniData.endingYear}</td>

                              <td>
                                <Button
                                  variant="primary"
                                  onClick={() => handleFunc(alumniData)}
                                >
                                  Get Details
                                </Button>
                              </td>
                            </tr>
                          ))}

                        <div className="model_box">
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header>
                              <div style={{ width: "100%", display: "flex" }}>
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.webp"
                                  alt="Profile pic"
                                  class="rounded-circle img-responsive text-center mb-1"
                                  style={{
                                    borderRadius: "50%!important",
                                    aspectRatio: "1/1",
                                    width: "150px",
                                    margin: "auto",
                                  }}
                                />
                              </div>
                            </Modal.Header>
                            <Modal.Body>
                              {selectedStudent && (
                                <>
                                  <div class="modal-body text-center mb-1">
                                    <h3 class="mt-1 mb-2">
                                      {selectedStudent.name}
                                    </h3>
                                  </div>
                                  <div className="">
                                    <table className="table table-bordered">
                                      <tbody>
                                        <tr>
                                          <th width="40%">Id</th>
                                          <td>{selectedStudent.Id}</td>
                                        </tr>
                                        <tr>
                                          <th width="30%">RollNumber</th>
                                          <td>{selectedStudent.rollNumber}</td>
                                        </tr>
                                        <tr>
                                          <th width="30%">RegisterNumber</th>
                                          <td>
                                            {selectedStudent.registerNumber}
                                          </td>
                                        </tr>
                                        <tr>
                                          <th width="30%">StartingYear</th>
                                          <td>
                                            {selectedStudent.startingYear}
                                          </td>
                                        </tr>
                                        <tr>
                                          <th width="30%">EndingYear</th>
                                          <td>{selectedStudent.endingYear}</td>
                                        </tr>
                                        <tr>
                                          <th width="30%">Email</th>
                                          <td>{selectedStudent.email}</td>
                                        </tr>
                                        <tr>
                                          <th width="30%">Mobile No</th>
                                          <td>
                                            {selectedStudent.mobileNumber}
                                          </td>
                                        </tr>
                                        <tr>
                                          <th width="30%">Degree</th>
                                          <td>{selectedStudent.degree}</td>
                                        </tr>
                                        <tr>
                                          <th width="50%">Department</th>
                                          <td>{selectedStudent.department}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </>
                              )}
                            </Modal.Body>

                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </tbody>
                    </table>
                  </div>
                  <p className="show-memeber text-end">
                    Show <span>{itemsPerPage}</span> of{" "}
                    <span>{filteredData.length} Members</span>
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
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Directory;

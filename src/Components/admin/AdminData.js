import React, { useEffect, useState } from "react";
import axios from "axios";
// import ReactPaginate from "react-paginate";
import { Button, Modal } from "react-bootstrap";
import { GET_API, POST_API } from "../apiservices/endpoints";
import _ from "lodash";

const AdminData = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [paginatedPost, setPaginatedPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 50;

  const [values, setValues] = useState({
    rollNumber: "",
    registerNumber: "",
    startingYear: "",
    endingYear: "",
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    degree: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values, "values");
    try {
      const response = await axios.post(POST_API, values);
      setValues({
        ...values,
        rollNumber: "",
        registerNumber: "",
        startingYear: "",
        endingYear: "",
        name: "",
        mobileNumber: "",
        email: "",
        password: "",
        degree: "",
        department: "",
      });
      if (response.status === 200) {
        alert("Added successfully");
      }
    } catch (error) {
      console.log(error);
    }
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
        setPaginatedPost(_(response.data).slice(0).take(pageSize).value());
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const Pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };

  const Filter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
    );
  };

  // const handleChangeRollNo = (e) => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     rollNumber: e.target.value,
  //   }));
  // };
  const handleChangeRollNo = (e) => {
    setValues({ ...values, rollNumber: e.target.value });
  };
  const handleChangeRegisterNo = (e) => {
    setValues({ ...values, registerNumber: e.target.value });
  };
  const handleChangeStartYear = (e) => {
    setValues({ ...values, startingYear: e.target.value });
  };
  const handleChangeEndYear = (e) => {
    setValues({ ...values, endingYear: e.target.value });
  };
  const handleChangeName = (e) => {
    setValues({ ...values, name: e.target.value });
  };
  const handleChangeMobileNo = (e) => {
    setValues({ ...values, mobileNumber: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleChangePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleChangeDegree = (e) => {
    setValues({ ...values, degree: e.target.value });
  };
  const handleChangeDepartment = (e) => {
    setValues({ ...values, department: e.target.value });
  };

  return (
    <>
      <div className="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div className="row ">
            <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Student"
                    aria-label="Search"
                    onChange={Filter}
                  />
                </form>
              </div>
            </div>
            <div
              className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
              style={{ color: "green" }}
            >
              <h5>
                <b>Alumni Details</b>
              </h5>
            </div>
            <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Alumni
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive ">
              <table className="table table-striped table-bordered table-hover">
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Roll Number</th>
                    <th scope="col">Register Number</th>
                    <th scope="col">Starting Year</th>
                    <th scope="col">Ending Year</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Department</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  {records.map((d, index) => (
                    <tr key={index}>
                      <td>{d.Id}</td>
                      <td>{d.rollNumber}</td>
                      <td>{d.registerNumber}</td>
                      <td>{d.startingYear}</td>
                      <td>{d.endingYear}</td>
                      <td>{d.name}</td>
                      <td>{d.mobileNumber}</td>
                      <td>{d.email}</td>
                      <td>{d.degree}</td>
                      <td>{d.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Alumni</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter RollNumber"
                      value={values.rollNumber}
                      onChange={handleChangeRollNo}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter RegisterNumber"
                      value={values.registerNumber}
                      onChange={handleChangeRegisterNo}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="year"
                      className="form-control"
                      placeholder="Enter StartYear"
                      value={values.startingYear}
                      onChange={handleChangeStartYear}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="year"
                      className="form-control"
                      placeholder="Enter EndYear"
                      value={values.endingYear}
                      onChange={handleChangeEndYear}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      value={values.name}
                      onChange={handleChangeName}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile No"
                      value={values.mobileNumber}
                      onChange={handleChangeMobileNo}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChangeEmail}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={values.password}
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Degree"
                      value={values.degree}
                      onChange={handleChangeDegree}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                      value={values.department}
                      onChange={handleChangeDepartment}
                    />
                  </div>
                  <button type="submit" className="btn btn-success mt-4">
                    Add Record
                  </button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <p
                className="page-link"
                onClick={() => Pagination(currentPage - 1)}
              >
                Previous
              </p>
            </li>
            {pages.map((page, index) => {
              if (page === "...") {
                return (
                  <li key={index} className="page-item disabled">
                    <p className="page-link">...</p>
                  </li>
                );
              }

              return (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => Pagination(page)}>
                    {page}
                  </p>
                </li>
              );
            })}
            <li className="page-item">
              <p
                className="page-link"
                onClick={() => Pagination(currentPage + 1)}
              >
                Next
              </p>
            </li>
          </ul>
        </nav>
      </div>

      {/* <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={15}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
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
      /> */}
    </>
  );
};

export default AdminData;

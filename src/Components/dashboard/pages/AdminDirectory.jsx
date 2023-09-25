import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { formHeaders } from "../../../../utils/FormHeader";
import { GET_API, GET_FULLUSER_API } from "../../../../utils/endpoints";
import ReactPaginate from "react-paginate";
import { StudentSchema } from "../../../validation/StudentValidation";

const AdminDirectory = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [Option, setOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formMode, setFormMode] = useState("create");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;
  const [validationErrors, setValidationErrors] = useState({});

  const options = ["BE", "B.Tech", "B.Arch", "ME", "M.Tech", "MBA"];
  const departments = [
    "Civil Engineering",
    "Electrical and Electronics Engineering",
    " Electronics and Communication Engineering",
    "Computer Science and Engineering",
    "Mechanical Engineering",
    "Information Technology",
    "Bio Technology",
    " Bio Medical Engineering",
    " Artificial Intelligence and Data Science",
    "Architecture",
    "Structural Engineering",
    "Power Electronics and Drives",
    " Communication Systems",
    " Industrial Safety Engineering",
    "Master of Business Administration",
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(GET_FULLUSER_API, formHeaders());
      setData(response.data);
      setTotalPages(Math.ceil(response.data.length / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleShowModal = (mode, alumni = {}) => {
    setFormMode(mode);
    setFormData(alumni);
    setModalTitle(mode === "create" ? "Add Alumni" : "Edit Alumni");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
    setFormMode("create");
  };

  const errorValidation = () => {
    const StudentValidationResult = StudentSchema.validate(formData, {
      abortEarly: false,
    });
    console.log("StudentValidationResult", StudentValidationResult);
    if (StudentValidationResult?.error) {
      const errors = {};
      StudentValidationResult.error.details.forEach((errorDetail) => {
        errors[errorDetail.path[0]] = errorDetail.message;
      });
      setValidationErrors(errors);
    } else setValidationErrors({});
  };
  
  const handleSubmit = async () => {
    errorValidation();
    if (Object.keys(validationErrors).length > 0) {
      return;
    } else {
      try {
        if (formMode === "create") {
          await axios.post(
            "http://localhost:8080/v1/student/create",
            formData,
            formHeaders()
          );
          alert("Alumni Details Added Successfully");
        }
        // else {
        //   await axios.post(
        //     `http://localhost:8080/v1/job/update/${id}`,
        //     formData,
        //     formHeaders()
        //   );
        // }
        fetchData();
        handleCloseModal();
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this job?")) {
  //     try {
  //       await axios.get(
  //         `http://localhost:8080/v1/job/delete/${id}`,
  //         formHeaders()
  //       );
  //       fetchData();
  //     } catch (error) {
  //       console.error("Error deleting data:", error);
  //     }
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  return (
    <>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <h3 style={{ textAlign: "center" }}>Directory Management</h3>
        <div className="search-box">
          <Button variant="success" onClick={() => handleShowModal("create")}>
            Add Alumni
          </Button>
          <input
            className="form-control mr-sm-2"
            style={{ width: "auto" }}
            type="search"
            placeholder="Search Student Name"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>

        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>id</th>
              <th>Roll Number</th>
              <th>Register Number</th>
              <th>Starting Year</th>
              <th>Ending Year</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Degree</th>
              <th>Department</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(startIndex, endIndex).map((alumni) => (
              <tr key={alumni._id}>
                <td>{alumni.Id}</td>
                <td>{alumni.rollNumber}</td>
                <td>{alumni.registerNumber}</td>
                <td>{alumni.startingYear}</td>
                <td>{alumni.endingYear}</td>
                <td>{alumni.name}</td>
                <td>{alumni.mobileNumber}</td>
                <td>{alumni.email}</td>
                <td>{alumni.degree}</td>
                <td>{alumni.department}</td>
                {/* <td>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal("update", alumni)}
                  >
                    Edit
                  </Button>{" "}
                  <Button variant="danger" onClick={() => handleDelete(alumni._id)}>
                  Delete
                </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Student ID</label>
                <input
                  type="text"
                  name="userId"
                  className="form-control"
                  placeholder="ID"
                  value={formData.Id || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, Id: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>RollNumber</label>
                <input
                  type="text"
                  name="rollNo"
                  className="form-control"
                  placeholder="RollNumber"
                  value={formData.rollNumber || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, rollNumber: e.target.value })
                  }
                />
                {validationErrors.rollNumber && (
                  <span style={{ color: "red" }}>
                    {validationErrors.rollNumber}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>RegisterNumber</label>
                <input
                  type="number"
                  name="regNo"
                  className="form-control"
                  placeholder="RegisterNumber"
                  value={formData.registerNumber || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, registerNumber: e.target.value })
                  }
                />
                {validationErrors.registerNumber && (
                  <span style={{ color: "red" }}>
                    {validationErrors.registerNumber}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>startingYear</label>
                <input
                  type="year"
                  name="startYear"
                  className="form-control"
                  placeholder="StartingYear"
                  value={formData.startingYear || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, startingYear: e.target.value })
                  }
                />
                {validationErrors.startingYear && (
                  <span style={{ color: "red" }}>
                    {validationErrors.startingYear}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>EndingYear</label>
                <input
                  type="year"
                  name="endYear"
                  className="form-control"
                  placeholder="EndingYear"
                  value={formData.endingYear || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, endingYear: e.target.value })
                  }
                />
                {validationErrors.endingYear && (
                  <span style={{ color: "red" }}>
                    {validationErrors.endingYear}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {validationErrors.name && (
                  <span style={{ color: "red" }}>{validationErrors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label>MobileNumber</label>
                <input
                  type="number"
                  name="mobileNo"
                  className="form-control"
                  placeholder="MobileNumber"
                  value={formData.mobileNumber || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                />
                {validationErrors.mobileNumber && (
                  <span style={{ color: "red" }}>
                    {validationErrors.mobileNumber}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {validationErrors.email && (
                  <span style={{ color: "red" }}>{validationErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {validationErrors.password && (
                  <span style={{ color: "red" }}>
                    {validationErrors.password}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Degree</label>
                <br></br>
                <input
                  type="text"
                  name="degree"
                  className="form-control"
                  placeholder="Degree"
                  value={formData.degree || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, degree: e.target.value })
                  }
                />
                {validationErrors.degree && (
                  <span style={{ color: "red" }}>
                    {validationErrors.degree}
                  </span>
                )}
                {/* <select
                  id="dropdown"
                  name="dropdown"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Select an option</option>{" "}
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select> */}
              </div>
              <div className="form-group">
                <label>Department</label>
                <br></br>
                <input
                  type="text"
                  name="department"
                  className="form-control"
                  placeholder="Department"
                  value={formData.department || ""}
                  onBlur={errorValidation}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                />
                {validationErrors.department && (
                  <span style={{ color: "red" }}>
                    {validationErrors.department}
                  </span>
                )}
                {/* <select
                 id="dropdown"
                 name="dropdown"
                 value={Option}
                 onChange={(e) => setOption(e.target.value)}>
                  <option value="">Select an option</option>{" "}
                  {departments.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}

                </select> */}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>

        <p className="show-memeber text-end">
          Show <span>{itemsPerPage}</span> of{" "}
          <span>{filteredData.length} Members</span>
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
    </>
  );
};

export default AdminDirectory;

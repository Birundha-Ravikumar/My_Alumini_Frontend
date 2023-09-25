import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { formHeaders } from "../../../Utils/FormHeader";
import { JOB_GET_API, JOB_POST_API } from "../../apiservices/endpoints";
import ReactPaginate from "react-paginate";
import { JobSchema } from "../../../validation/JobValidation";

const AdminJob = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    jobID: "",
    title: "",
    position: "",
    discription: "",
    email: "",
    contactNumber: "",
    website: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formMode, setFormMode] = useState("create");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await axios.get(JOB_GET_API, formHeaders());
      setData(response.data.data);
      setTotalPages(Math.ceil(response.data.data.length / itemsPerPage));
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

  const handleShowModal = (mode, job = {}) => {
    setFormMode(mode);
    setFormData(job);
    setModalTitle(mode === "create" ? "Add Job" : "Edit Job");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
    setFormMode("create");
  };

  const errorValidation = () =>{
    const JobValidationResult = JobSchema.validate(formData, {
      abortEarly: false,
    });
    if (JobValidationResult?.error) {
      const errors = {};
      JobValidationResult.error.details.forEach((errorDetail) => {
        errors[errorDetail.path[0]] = errorDetail.message;
      });
      setValidationErrors(errors);
  }else setValidationErrors({});
}

  const handleSubmit = async (id) => {
    errorValidation();
    if(Object.keys(validationErrors).length > 0){
      return;
    }else {
      try {
        if (formMode === "create") {
          await axios.post(JOB_POST_API, formData, formHeaders());
          alert("Job Details Added Successfully");
        } else {
          const requiredFormData = {
            jobID: formData.jobID,
            title: formData.title,
            position: formData.position,
            discription: formData.discription,
            email: formData.email,
            contactNumber: formData.contactNumber,
            website: formData.website,
          };
          await axios.post(
            `http://localhost:8080/v1/job/update/${id}`,
            requiredFormData,
            formHeaders()
          );
          alert("Job Details updated");
        }
        fetchData();
        handleCloseModal();
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await axios.get(
          `http://localhost:8080/v1/job/delete/${id}`,
          formHeaders()
        );
        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const filteredData = data.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
      <h3 style={{ textAlign: "center" }}>Job Management</h3>
      <div className="search-box">
        <Button variant="success" onClick={() => handleShowModal("create")}>
          Add Job
        </Button>
        <input
          className="form-control mr-sm-2"
          style={{ width: "auto" }}
          type="search"
          placeholder="Search Job Title"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Position</th>
            <th>Discription</th>
            <th>Email</th>
            <th>ContactNumber</th>
            <th>Website</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.position}</td>
              <td>{job.discription}</td>
              <td>{job.email}</td>
              <td>{job.contactNumber}</td>
              <td>{job.website}</td>
              <td>
                <div style={{ display: "flex" }}>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal("update", job)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
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
              <label>JobID</label>
              <input
                type="number"
                name="jobId"
                className="form-control"
                placeholder="JobID"
                value={formData.jobID || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, jobID: e.target.value })
                }
              />
              {validationErrors.jobID && (
                <span style={{color:'red'}}>{validationErrors.jobID}</span>
              )}
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                value={formData.title || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {validationErrors.title && (
                <span style={{color:'red'}}>{validationErrors.title}</span>
              )}
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                name="position"
                className="form-control"
                placeholder="Position"
                value={formData.position || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              />
              {validationErrors.position && (
                <span style={{color:'red'}}>{validationErrors.position}</span>
              )}
            </div>
            <div className="form-group">
              <label>Discription</label>
              <input
                type="text"
                name="discription"
                className="form-control"
                placeholder="Discription"
                value={formData.discription || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, discription: e.target.value })
                }
              />
              {validationErrors.discription && (
                <span style={{color:'red'}}>{validationErrors.discription}</span>
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
                <span style={{color:'red'}}>{validationErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label>ContactNumber</label>
              <input
                type="number"
                name="contactNo"
                className="form-control"
                placeholder="ContactNumber"
                value={formData.contactNumber || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
              />
              {validationErrors.contactNumber && (
                <span style={{color:'red'}}>{validationErrors.contactNumber}</span>
              )}
            </div>
            <div className="form-group">
              <label>Website</label>
              <input
                type="text"
                name="website"
                className="form-control"
                placeholder="Website"
                value={formData.website || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
              />
              {validationErrors.website && (
                <span style={{color:'red'}}>{validationErrors.website}</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(formData._id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <p className="show-memeber text-end">
        Show <span>{itemsPerPage}</span> of{" "}
        <span>{filteredData.length} Jobs</span>
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
  );
};

export default AdminJob;

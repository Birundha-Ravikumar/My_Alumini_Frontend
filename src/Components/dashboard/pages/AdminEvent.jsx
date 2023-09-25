import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { formHeaders } from "../../../../utils/FormHeader";
import { EVENT_GET_API, EVENT_POST_API } from "../../../../utils/endpoints";
import ReactPaginate from "react-paginate";
import { EventSchema } from "../../../validation/EventValidation";

const AdminEvent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    venue: "",
    time: "",
    eventDate: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formMode, setFormMode] = useState("create");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  const fetchData = async () => {
    try {
      const response = await axios.get(EVENT_GET_API, formHeaders());
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

  const handleShowModal = (mode, event = {}) => {
    setFormMode(mode);
    setFormData(event);
    setModalTitle(mode === "create" ? "Add Event" : "Edit Event");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
    setFormMode("create");
  };

  const errorValidation = () => {
    const EventValidationResult = EventSchema.validate(formData,{
      abortEarly:false,
    });
    console.log("EventValidationResult",EventValidationResult);
    if (EventValidationResult?.error) {
      const errors = {};
      EventValidationResult.error.details.forEach((errorDetail)=>{
        console.log("errorDetail", errorDetail);
        errors[errorDetail.path[0]]=errorDetail.message;
      });
      setValidationErrors(errors);
    }else setValidationErrors({});
  }

  const handleSubmit = async (id) => {
    errorValidation()
    if (Object.keys(validationErrors).length > 0) {
      return;
    } else {
      try {
        if (formMode === "create") {
          await axios.post(EVENT_POST_API, formData, formHeaders());
          alert("Event Added Successfully");
        } else {
          const requiredFormData = {
            title: formData.title,
            description: formData.description,
            venue: formData.venue,
            time: formData.time,
            eventDate: formData.eventDate,
          };
          await axios.post(
            `http://localhost:8080/v1/event/update/${id}`,
            requiredFormData,
            formHeaders()
          );
          alert("Event details updated");
        }
        fetchData();
        handleCloseModal();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.get(
          `http://localhost:8080/v1/event/delete/${id}`,
          formHeaders()
        );
        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const filteredData = data.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
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
      <h3 style={{ textAlign: "center" }}>Event Management</h3>
      <div className="search-box">
        <Button variant="success" onClick={() => handleShowModal("create")}>
          Add Event
        </Button>
        <input
          className="form-control mr-sm-2"
          style={{ width: "auto" }}
          type="search"
          placeholder="Search Event Title"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Venue</th>
            <th>Time</th>
            <th>EventDate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((event) => (
            <tr key={event._id}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.venue}</td>
              <td>{event.time}</td>
              <td>{event.eventDate}</td>
              <td>
                <div style={{ display: "flex" }}>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal("update", event)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(event._id)}
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
                <span style={{color:"red"}}>{validationErrors.title}</span>
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                value={formData.description || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
                {validationErrors.description && (
                <span style={{color:"red"}}>{validationErrors.description}</span>
              )}
            </div>
            <div className="form-group">
              <label>Venue</label>
              <input
                type="text"
                name="venue"
                className="form-control "
                placeholder="Venue"
                value={formData.venue || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, venue: e.target.value })
                }
              />
              {validationErrors.venue && (
                <span style={{color:"red"}}>{validationErrors.venue}</span>
              )}
            </div>
            <div className="form-group">
              <label>Event Time</label>
              <input
                type="time"
                name="eventTime"
                className="form-control"
                placeholder="EventTime"
                value={formData.time || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
               {validationErrors.time && (
                <span style={{color:"red"}}>{validationErrors.time}</span>
              )}
            </div>
            <div className="form-group">
              <label>EventDate</label>
              <input
                type="date"
                name="eventDate"
                className="form-control"
                placeholder="EventDate"
                value={formData.eventDate || ""}
                onBlur={errorValidation}
                onChange={(e) =>
                  setFormData({ ...formData, eventDate: e.target.value })
                }
              />
               {validationErrors.eventDate && (
                <span style={{color:"red"}}>{validationErrors.eventDate}</span>
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
        <span>{filteredData.length} Events</span>
      </p>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPages}
        forcePage={currentPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
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

export default AdminEvent;

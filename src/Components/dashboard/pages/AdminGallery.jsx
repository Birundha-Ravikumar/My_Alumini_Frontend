import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { formHeaders } from "../../../../utils/FormHeader";
import { GALLERY_GET_API, GALLERY_POST_API } from "../../../../utils/endpoints";
import ReactPaginate from "react-paginate";
import { GallerySchema } from "../../../validation/GalleryValidation";
import { object } from "joi";


const AdminGallery = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title:"",
    description:""
  });
  const [validationErrors,setValidationErrors]=useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formMode, setFormMode] = useState("create"); 
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await axios.get(GALLERY_GET_API,formHeaders());
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

  const handleShowModal = (mode, gallery = {}) => {
    setFormMode(mode);
    setFormData(gallery);
    setModalTitle(mode === "create" ? "Add Gallery" : "Edit Gallery");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
    setFormMode("create");
  };

  const errorValidation = () =>{
    const GalleryValidationResult = GallerySchema.validate(formData,{
      abortEarly:false,
    });
    if(GalleryValidationResult?.error){
      const errors ={};
      GalleryValidationResult.error.details.forEach((errorDetail)=>{
        errors[errorDetail.path[0]]=errorDetail.message;
      });
      setValidationErrors(errors);
  }else setValidationErrors({});
}

  const handleSubmit = async (id) => {
   errorValidation();
   if(Object.keys(validationErrors).length > 0){
    return;
   } else {
    try {
      if (formMode === "create") {
        await axios.post(GALLERY_POST_API, formData,formHeaders());
        alert('Gallery Added Successfully');
      } else {
        const requiredFormData = {
          title: formData.title,
          description: formData.description
        }
        await axios.post(`http://localhost:8080/v1/gallery/update/${id}`, requiredFormData, formHeaders());
        alert("Gallery Updated")
      }
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery?")) {
      try {
        await axios.get(`http://localhost:8080/v1/gallery/delete/${id}`, formHeaders());
        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const filteredData = data.filter((gallery) =>
    gallery.title.toLowerCase().includes(searchQuery.toLowerCase())
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
      <h3 style={{textAlign:'center'}}>Gallery Management</h3>
      <div className="search-box">
          <Button variant="success" onClick={() => handleShowModal("create")}>
            Add Gallery
          </Button>
          <input
            className="form-control mr-sm-2" style={{width:"auto"}}
            type="search"
            placeholder="Search Gallery Title"
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((gallery) => (
            <tr key={gallery._id}>
              <td>{gallery.title}</td>
              <td>{gallery.description}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleShowModal("update", gallery)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(gallery._id)}
                >
                  Delete
                </Button>
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSubmit(formData._id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        <p className="show-memeber text-end">
          Show <span>{itemsPerPage}</span> of{" "}
          <span>{filteredData.length} Gallerys</span>
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

export default AdminGallery;
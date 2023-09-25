import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import "../register/register.css";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GET_API, LOGIN_API } from "../apiservices/endpoints";
import axios from "axios";
import { formHeaders } from "../../Utils/FormHeader";
import { StudentSchema } from "../../validation/StudentValidation";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ userName: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.userName || !values.password) {
      setErrMsg("Please give the credential");
      return;
    } else {
      try {
        const response = await axios.post(LOGIN_API, values);
        setValues({ ...values, userName: "", password: "" });
        console.log("response", response);
        if (response.status === 200) {
          navigate("/admin/dashboard");
        }
      } catch (err) {
        setValues({ ...values, userName: "", password: "" });
        navigate("/register");
        setErrMsg("wrong credential");
      }
    }
  };

  const handleNameChange = (e) => {
    setErrMsg("");
    setValues({ ...values, userName: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setErrMsg("");
    setValues({ ...values, password: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(GET_API, formHeaders());
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createUser = async (formData) => {
    try {
      await axios.post(
        "http://localhost:8080/v1/student/create",
        formData,
        formHeaders()
      );
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const errorValidation = () => {
    const StudentValidationResult = StudentSchema.validate(formData, {
      abortEarly: false,
    });
    if (StudentValidationResult?.error) {
      const errors = {};
      StudentValidationResult.error.details.forEach((errorDetail) => {
        errors[errorDetail.path[0]] = errorDetail.message;
      });
      setValidationErrors(errors);
    } else setValidationErrors({});
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    errorValidation();
    if (Object.keys(validationErrors).length > 0) {
      return;
    } else {
      try {
        await createUser(formData);
        fetchData();
        setFormData({});
        alert("Your profile is added in directory");
      } catch (err) {
        console.error("Error submitting data:", err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeaderPage />
      <Banner title="Membership Form" />
      <section id="page-content-wrap">
        <div className="register-page-wrapper section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="register-page-inner">
                  <div className="col-lg-10 m-auto">
                    <div className="register-form-content">
                      <div className="row justify-content-between">
                        <div className="col-lg-4 col-md-6 text-center">
                          <div className="display-table">
                            <div className="display-table-cell">
                              <div className="signin-area-wrap">
                                <h4>Already a Member?</h4>
                                <div className="sign-form">
                                  <form onSubmit={handleSubmit}>
                                    <input
                                      type="text"
                                      placeholder="Enter your ID"
                                      value={values.userName}
                                      onChange={handleNameChange}
                                    />
                                    <input
                                      type="password"
                                      placeholder="Password"
                                      value={values.password}
                                      onChange={handlePasswordChange}
                                    />
                                    <button
                                      type="submit"
                                      className="btn btn-reg"
                                    >
                                      Login
                                    </button>
                                    {/* <button
                                      type="submit"
                                      className="btn btn-reg"
                                    >
                                      Login us Alumni
                                    </button> */}
                                  </form>
                                  {errMsg !== "" && (
                                    <span
                                      style={{
                                        color: "red",
                                        textAlign: "center",
                                      }}
                                    >
                                      {errMsg}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-6 ml-auto">
                          <div className="register-form-wrap">
                            <h3>create New Alumni Account</h3>
                            <div className="register-form">
                              <form action="#">
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_email">Email</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="register_email"
                                        name="register_email"
                                        value={formData.email || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            email: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.email && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.email}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_email">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="register_pass"
                                        name="register_pass"
                                        value={formData.password || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            password: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.password && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.password}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_name">Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_name"
                                        name="register_name"
                                        value={formData.name || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            name: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.name && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.name}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_stuid">
                                        Student ID
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_stuid"
                                        name="register_stuid"
                                        value={formData.Id || ""}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            Id: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_stryear">
                                        StartingYear
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_stryear"
                                        name="register_stryear"
                                        value={formData.startingYear || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            startingYear: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.startingYear && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.startingYear}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_endyear">
                                        EndingYear
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_endyear"
                                        name="register_endyear"
                                        value={formData.endingYear || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            endingYear: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.endingYear && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.endingYear}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_rollno">
                                        RollNumber
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_rollno"
                                        name="register_rollno"
                                        value={formData.rollNumber || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            rollNumber: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.rollNumber && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.rollNumber}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_regno">
                                        RegisterNumber
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="register_regno"
                                        name="register_regno"
                                        value={formData.registerNumber || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            registerNumber: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.registerNumber && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.registerNumber}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_degree">
                                        Degree
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_degree"
                                        name="register_degree"
                                        value={formData.degree || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            degree: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.degree && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.degree}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_deptno">
                                        Department
                                      </label>

                                      {/* <Dropdown>
                                        <Dropdown.Toggle
                                          variant="none"
                                          split
                                          id="dropdown-basic"
                                          className="Select-option" style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}
                                        >
                                          select department
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu
                                          className="Select-option"
                                          style={{
                                            height: "100px",
                                            overflow: "scroll",
                                          }}
                                        >
                                          <Dropdown.Item href="#/action-1">
                                            Action
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-2">
                                            Another action
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-3">
                                            Something else
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-4">
                                            Something else
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-5">
                                            Something else
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-6">
                                            Something else
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#/action-7">
                                            Something else
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown> */}

                                      {/* <div className="custom-select">
                                        <select  className="Select-option" type="dropdown" >
                                        <option>Civil Engineering</option>
                                        <option>Electrical and Electronics Engineering</option>
                                        <option>Electronics and Communication Engineering</option>
                                        <option>Computer Science and Engineering</option>
                                        <option>Mechanical Engineering</option>
                                        <option>Information Technology</option>
                                        <option>Bio Technology</option>
                                        <option>Bio Medical Engineering</option>
                                        <option>Artificial Intelligence and Data Science</option>
                                        <option>Architecture</option>
                                        <option>Structural Engineering</option>
                                        <option>Power Electronics and Drives</option>
                                        <option>Communication Systems</option>
                                        <option>Master of Business Administration</option>
                                        <option >Civil Engineering</option>
                                        <option>Electrical and Electronics Engineering</option>
                                        <option>Electronics and Communication Engineering</option>
                                        <option>Computer Science and Engineering</option>
                                        <option>Mechanical Engineering</option>
                                        <option>Information Technology</option>
                                        <option>Bio Technology</option>
                                        <option>Bio Medical Engineering</option>
                                        <option>Artificial Intelligence and Data Science</option>
                                        <option>Architecture</option>
                                        <option>Structural Engineering</option>
                                        <option>Power Electronics and Drives</option>
                                        <option>Communication Systems</option>
                                        <option>Master of Business Administration</option>
                                        <option >Civil Engineering</option>
                                        <option>Electrical and Electronics Engineering</option>
                                        <option>Electronics and Communication Engineering</option>
                                        <option>Computer Science and Engineering</option>
                                        <option>Mechanical Engineering</option>
                                        <option>Information Technology</option>
                                        <option>Bio Technology</option>
                                        <option>Bio Medical Engineering</option>
                                        <option>Artificial Intelligence and Data Science</option>
                                        <option>Architecture</option>
                                        <option>Structural Engineering</option>
                                        <option>Power Electronics and Drives</option>
                                        <option>Communication Systems</option>
                                        <option>Master of Business Administration</option>
                                      </select>
                                      </div> */}

                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_dept"
                                        name="register_dept"
                                        value={formData.department || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            department: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.department && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.department}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_mobileNo">
                                        MobileNumber
                                      </label>
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="register_mobileNo"
                                        name="register_mobileNo"
                                        value={formData.mobileNumber || ""}
                                        onBlur={errorValidation}
                                        onChange={(e) =>
                                          setFormData({
                                            ...formData,
                                            mobileNumber: e.target.value,
                                          })
                                        }
                                      />
                                      {validationErrors.mobileNumber && (
                                        <span style={{ color: "red" }}>
                                          {validationErrors.mobileNumber}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group file-input">
                                  <input
                                    type="file"
                                    name="register_file"
                                    id="customfile"
                                    className="d-none"
                                  />
                                  <label
                                    className="custom-file"
                                    for="customfile"
                                  >
                                    <i className="fa fa-upload"></i>Upload Your
                                    Photo
                                  </label>
                                </div>

                                <div className="form-group">
                                  <div className="custom-control custom-checkbox float-lg-right">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="customCheck1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="customCheck1"
                                    >
                                      {" "}
                                      I have read and agree to the{" "}
                                      <a href="#">Alumni</a> Terms of Service
                                    </label>
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-reg"
                                    onClick={handleCreateSubmit}
                                  >
                                    Create
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Register;

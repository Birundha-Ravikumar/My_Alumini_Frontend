import React from "react";
import Banner from "../banner/Banner";
import "../register/style.css";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const Register = () => {
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
                                  <form action="#">
                                    <input
                                      type="text"
                                      placeholder="Enter your ID"
                                    />
                                    <input
                                      type="password"
                                      placeholder="Password"
                                    />
                                    <button
                                      type="submit"
                                      className="btn btn-reg"
                                    >
                                      Login
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-6 ml-auto">
                          <div className="register-form-wrap">
                            <h3>registration Form</h3>
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
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_password">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="register_password"
                                        name="register_password"
                                      />
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
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_stuid">
                                        Student Id
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_stuid"
                                        name="register_stuid"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_year">
                                        Passing Year
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_year"
                                        name="register_year"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label for="register_deptno">
                                        Department
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="register_deptno"
                                        name="register_deptno"
                                      />
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

                                <div className="gender form-group">
                                  <label className="g-name d-block">
                                    Gender
                                  </label>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      type="radio"
                                      id="register_gender_male"
                                      name="register_gender"
                                      value="mail"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="register_gender_male"
                                    >
                                      Male
                                    </label>
                                  </div>
                                  <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                      type="radio"
                                      id="register_gender_female"
                                      name="register_gender"
                                      value="female"
                                      className="custom-control-input"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="register_gender_female"
                                    >
                                      Female
                                    </label>
                                  </div>
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
                                  <input
                                    type="submit"
                                    className="btn btn-reg"
                                    value="Registration"
                                  />
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

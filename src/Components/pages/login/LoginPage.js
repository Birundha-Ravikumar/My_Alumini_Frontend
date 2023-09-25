import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LOGIN_API } from "../../apiservices/endpoints";
import "./login.css";
import { loginSchema } from "../../../validation/LoginValidation";
import logo from "../../../CurrentImages/Logo/logo1.jpeg";
import image from '../../../CurrentImages/CollegeIamges/Admin/Admin - Entrance.jpg'

const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ userName: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { userName, password } = values;
    const loginSchemaResult = loginSchema.validate({ userName, password });
    if (loginSchemaResult.error) {
      setErrMsg(loginSchemaResult.error.message);
    } else {
      setIsLoding(true);
      try {
        const response = await axios.post(LOGIN_API, values);
        setValues({ ...values, userName: "", password: "" });
        if (response.status === 200) {
          setValues({ userName: "", password: "" });
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.data.token)
          );
          navigate("/admin/dashboard");
        }
      } catch (err) {
        console.log("err", err);
        setValues({ userName: "", password: "" });
        navigate("/admin/login");
        setErrMsg("wrong credential");
      } finally {
        setIsLoding(false);
      }
    }
  };

  const handleChangeName = (e) => {
    setErrMsg("");
    setValues({ ...values, userName: e.target.value });
  };

  const handleChangePassword = (e) => {
    setErrMsg("");
    setValues({ ...values, password: e.target.value });
  };
  return (

    <section className="" style={{ backgroundColor: "#9A616D",height:"100vh"}}>
      <div className="container py-5 h-100" style={{maxWidth:"70%"}}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row ">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={image}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: " 1rem 0 0 1rem",height: "100%",objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src={logo}
                          alt="logo"
                          className="main-logo fa-2x me-3"
                          style={{ aspectRatio: "1/1", width: "60px" }}
                        />
                        <span className="h1 fw-bold mb-0">Mepco</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          name="email"
                          value={values.userName}
                          onChange={handleChangeName}
                        />
                        <label className="form-label" for="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                          value={values.password}
                          onChange={handleChangePassword}
                        />
                        <label className="form-label" for="form2Example27">
                          Password
                        </label>
                      </div>
                      {errMsg && (
                        <div className="alert alert-danger">{errMsg}</div>
                      )}
                      <div className="pt-1 mb-4">
                        <button
                        style={{width:"100%"}}
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? "Logging in..." : "Login"}
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_API } from '../../apiservices/endpoints';
import "./style.css";

const LoginPage = () => {
    const navigate = useNavigate();
  const [values,setValues] = useState({userName: "",password: "" })
  const [errMsg,setErrMsg] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.userName || !values.password) {
      setErrMsg("Please give the credential");
      return;
    }else {
      try {
        const response = await axios.post(LOGIN_API, values);
        setValues({...values, userName: "", password: ""});
        if(response.status === 200) {
          navigate("/admin/user")
        }
      } catch(err) {
        console.log("err", err);
        setValues({...values, userName: "", password: ""});
        navigate("/admin/login")
        setErrMsg("wrong credential")
      }
    }
  }

  const handleChangeName = (e) => {
    setErrMsg("")
    setValues({ ...values, userName: e.target.value })
  }

  const handleChangePassword = (e) => {
    setErrMsg("")
    setValues({ ...values, password: e.target.value })
  }
  return (
    <div className="col-lg-4 col-md-6 text-centerAdmin">
      <div className="display-table">
        <div className="display-table-cell">
          <div className="signin-area-wrap">
            <h4>Already a Member?</h4>
            <div className="sign-form">
              <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={values.userName} placeholder="Enter your ID" onChange={handleChangeName}/>
                <input type="password" name="password" value={values.password} placeholder="Password" onChange={handleChangePassword}/>
                <button type="submit" className="btn btn-reg" >
                  Login
                </button>
              </form>
                {errMsg !== "" && <span style={{color:"red", textAlign:"center"}}>{errMsg}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

import React from 'react';
import logo from '../../../CurrentImages/Logo/logo1.jpeg';

const Header = () => {
  return (
    <>
    <div className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow display-flex justify-content-around'>
      <div className='d-flex justify-content-between align-items-center' style={{width: "80vw"}}>
      <div></div>

    <h4 style={{color:"#8a158f"}}>Admin Dashboard</h4>
    <img src={logo} alt='logo' className='main-logo' style={{aspectRatio: "1/1", width: "60px"}}/>
      </div>
    </div>
    
    </>
   
  )
}

export default Header
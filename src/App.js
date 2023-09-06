import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Event from './Components/event/Event.js';
import Gallery from './Components/Gallery/Gallery.js';
import Blog from './Components/Blog/Blog.js';
import BlogRightSidebar from './Components/Blog/BlogRightSidebar.js';
import BlogLeftSidebar from './Components/Blog/BlogLeftSidebar.js';
import BlogNoSidebar from './Components/Blog/BlogNoSidebar.js';
import Contact from './Components/contact/Contact'
import SingleAlbum from './Components/Gallery/singleAlbum/SingleAlbum';
import Directory from './Components/directory/Directory.js';
import Register from './Components/register/Register.js';
import Typography from './Components/typography/Typography.js';
import Committee from './Components/committee/Committee.js';
import Career from './Components/career/Career.js';
import SingleEvent from './Components/singleEvent/SingleEvent.js';
import AdminForm from './Components/admin/AdminForm.js';
import AdminData from './Components/admin/AdminData.js';
import About from './Components/About/About';
import LoginPage from './Components/pages/login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="event" element={<Event/>} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="blog" element={<Blog/>} />
          <Route path="blogrightsidebar" element={<BlogRightSidebar/>} />
          <Route path="blogleftsidebar" element={<BlogLeftSidebar/>} />
          <Route path="blognobar" element={<BlogNoSidebar/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="single-album" element={<SingleAlbum/>} />
          <Route path="directory" element={<Directory/>} />
          <Route path="register" element={<Register/>} /> 
          <Route path="typography" element={<Typography/>} />  
          <Route path="committee" element={<Committee/>} /> 
          <Route path="career" element={<Career/>} />   
          <Route path="singleEvent" element={<SingleEvent/>} />   
          <Route path="team" element={<AdminForm/>} />  
        </Route>
        <Route path="/admin">
          <Route path="login" element={<LoginPage/>} /> 
          <Route path="user" element={<AdminData/>} />        
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
 
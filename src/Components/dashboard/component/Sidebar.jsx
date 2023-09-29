import React from 'react';
import {BsCalendarEventFill} from 'react-icons/bs';
import {RiGalleryFill,RiContactsFill,RiErrorWarningFill} from 'react-icons/ri';
import {
  FaTh,
  FaCommentAlt,
  FaSuitcase,
  FaSignOutAlt,
  FaBlog,
} from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import '../../dashboard/style.css';


const Sidebar = () => {
  const menuItem = [
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/admin/directory',
      name: 'Directory',
      icon: <FaCommentAlt />,
    },
    {
      path: '/admin/job',
      name: 'Job',
      icon: <FaSuitcase/>,
    },
    {
      path: '/admin/event',
      name: 'Event',
      icon: <BsCalendarEventFill />,
    },
    {
      path: '/admin/gallery',
      name: 'Gallery',
      icon: <RiGalleryFill />,
    },
    {
      path: '/admin/blog',
      name: 'Blogs',
      icon: <FaBlog />,
    },
    {
      path: '/admin/aboutUs',
      name: 'AboutUs',
      icon: <RiErrorWarningFill />,
    },
    {
      path: '/admin/contactUs',
      name: 'ContactUs',
      icon: <RiContactsFill/>,
    },
    // {
    //   path: '/admin/logout',
    //   name: 'Logout',
    //   icon: <FaSignOutAlt />,
    // },
  ];

  const navigate = useNavigate()

  const handleLogout =()=>{
    navigate("/admin/login")
  }
  return (
    <div className="container1">
      <div className="sidebar" id="admin-side-bar">
        {/* <div> */}
          {menuItem.map((item) => {
            return (
              <NavLink
                to={item.path}
                key={item.path}
                name={item.name}
                className={`${
                  item.name != 'Logout' ? 'menu' : 'menu menu-logout'
                }`}
                // activeClassName="active-menu"
              >
                <div className="menu-icons">{item.icon}</div>
                <div className="nav-menu">{item.name}</div>
              </NavLink>
            );
          })}
          <div className='menu menu-logout' onClick={handleLogout}>
          <div className="menu-icons"><FaSignOutAlt /></div>
          <div className="nav-menu">Logout</div></div>
        {/* </div> */}
      </div>
      <main>
        <Header/>
        <div className='px-4'>
          <Outlet/>
        </div>
        </main>
    </div>
  );
};

export default Sidebar;

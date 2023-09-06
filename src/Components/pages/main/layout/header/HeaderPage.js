import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../header/style.css";
import logo from "../../../../../CurrentImages/Logo/logo1.jpeg";

const HeaderPage = () => {
  const headerMenu = [
    {
      name: "Home",
      index: 0,
      url: "/",
      hassubmenu: 0,
    },
    {
      name: "About",
      index: 1,
      url: "/about",
      hassubmenu: 0,
    },
    {
      name: "Event",
      index: 2,
      url: "/event",
      hassubmenu: 0,
    },
    {
      name: "Gallery",
      index: 3,
      url: "/gallery",
      hassubmenu: 0,
    },
    {
      name: "Blog",
      index: 4,
      hassubmenu: 1,
      innerList: [
        {
          name: "Blog List",
          index: 1,
          url: "/blog",
          hassubmenu: 0,
        },
        {
          name: "Single Blog Right Sidebar",
          index: 2,
          url: "/blogrightsidebar",
          hassubmenu: 0,
        },
        {
          name: "Single Blog Left Sidebar",
          index: 3,
          url: "/blogleftsidebar",
          hassubmenu: 0,
        },
        {
          name: "Single Blog No Sidebar",
          index: 4,
          url: "/blognobar",
          hassubmenu: 0,
        },
      ],
    },
    {
      name: "Pages",
      index: 4,
      hassubmenu: 1,
      innerList: [
        {
          name: "Gallery",
          index: 1,
          url: "/gallery",
          hassubmenu: 1,
          GallaryList: [
            {
              name: "Gallery",
              index: 1,
              url: "/gallery",
            },
            {
              name: "Single Album",
              index: 2,
              url: "/single-album",
            },
          ],
        },
        {
          name: "Committee",
          index: 2,
          url: "/committee",
          hassubmenu: 0,
        },
        {
          name: "Directory",
          index: 3,
          url: "/directory",
          hassubmenu: 0,
        },
        {
          name: "Register",
          index: 4,
          url: "/register",
          hassubmenu: 0,
        },
        {
          name: "Career",
          index: 5,
          url: "/career",
          hassubmenu: 0,
        },
        {
          name: "Typography",
          index: 6,
          url: "/typography",
          hassubmenu: 0,
        },
      ],
    },
    {
      name: "Contact",
      index: 4,
      url: "/contact",
      hassubmenu: 0,
    },
  ];
  const [active, setActive] = useState(0);
  const location = useLocation();
  const currentIndex = (i) => {
    setActive(i);
  };
  return (
    <>
      <header className="site-header header-fixed" data-responsive-width="991">
        <div className="header-topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7 col-7">
                <div className="preheader-left">
                  <a href="mailto:info@codeboxr.com">
                    <strong>Email:</strong>mepconnect@gmail.com
                  </a>
                  <a href="mailto:info@construc.com">
                    <strong>Hotline:</strong> 04652 235306
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-sm-5 col-5 text-end">
                <div className="preheader-right">
                  <a
                    title="Login"
                    className="btn-auth btn-auth-rev"
                    href="/register"
                  >
                    Login
                  </a>
                  {/* <a
                    title="Register"
                    className="btn-auth btn-auth-sign"
                    href="/register"
                  >
                    Signup
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-inner">
            <nav id="site-navigation" className="main-nav">
              <div className="site-logo">
                <a href="index.html" className="logo">
                  <img src={logo} alt="site logo" className="main-logo" />
                  <img src={logo} alt="site logo" className="logo-sticky" />
                </a>
              </div>
              <div
                className="menu-wrapper main-nav-container canvas-menu-wrapper"
                id="mega-menu-wrap"
              >
                <div className="canvas-header">
                  <div className="mobile-offcanvas-logo">
                    <a href="index.html">
                      <img src={logo} alt="site logo" className="logo-sticky" />
                    </a>
                  </div>

                  <div className="close-menu" id="page-close-main-menu">
                    <i className="fas fa-times"></i>
                  </div>
                </div>

                <ul className="codeboxr-main-menu">
                  {headerMenu.map((item, index) =>
                    item.hassubmenu === 0 ? (
                      <li
                        className={`${
                          location?.pathname === item.url
                            ? "current-menu-item"
                            : ""
                        }`}
                        onClick={() => currentIndex(index)}
                      >
                        <a href={item.url}>{item.name}</a>
                      </li>
                    ) : (
                      <li className="has-submenu menu-item-depth-0">
                        <a href={item.url}>{item.name}</a>
                        <ul className="sub-menu">
                          {item?.innerList?.map((val) =>
                            val?.hassubmenu === 0 ? (
                              <li>
                                <a href={val.url}>{val.name}</a>
                              </li>
                            ) : (
                              <li className="has-submenu">
                                <a href={val.url}>{val.name}</a>
                                <ul className="sub-menu">
                                  {val?.GallaryList.map((item) => {
                                    return (
                                      <li>
                                        <a href={item.url}>{item.name}</a>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderPage;
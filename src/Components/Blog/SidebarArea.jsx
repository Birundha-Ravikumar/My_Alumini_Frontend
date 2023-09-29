import React from "react";

const SidebarArea = (props) => {
  return (
    <>
      <div className={`${props.class}`}>
        <div className="sidebar-area-wrap">
          <div className="single-sidebar-wrap">
            <div className="brand-search-form">
              <form action="index.html">
                <input type="search" placeholder="Type and hit here" />
                <button type="button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="single-sidebar-wrap">
            <h4 className="sidebar-title">Categories</h4>
            <div className="sidebar-body">
              <ul className="brand-unorderlist">
                <li>
                  <a href="/career">Jobs</a>
                </li>
                <li>
                  <a href="/directory">Alumni</a>
                </li>
                <li>
                  <a href="/event">Events</a>
                </li>
                <li>
                  <a href="/register">Member</a>
                </li>
                <li>
                  <a href="/directory">Current Students</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-sidebar-wrap d-none d-lg-block">
            <h4 className="sidebar-title">Popular Tags</h4>
            <div className="sidebar-body">
              <div className="tags">
                <a href="#">Bootstrap</a>
                <a href="#">Design</a>
                <a href="#">web</a>
                <a className="active" href="#">
                  custom
                </a>
                <a href="#">wordpress</a>
                <a href="#">Art</a>
                <a href="#">our team</a>
                <a href="#">Classic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarArea;
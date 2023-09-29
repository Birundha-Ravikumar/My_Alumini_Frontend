import React from "react";
import DashboardCards from "./DashboardCards";

const Dashboard = () => {
  // const obj = [
  //   {
  //     title: "Directory",
  //     count: 21897,
  //     headCls: "card border-left-primary shadow h-100 py-2",
  //     className: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  //     icon:<i className="fa-solid fa-folder fa-2x text-gray-300"></i>
  //   },
  //   {
  //     title: "Jobs",
  //     count: 21897,
  //     headCls: "card border-left-primary shadow h-100 py-2",
  //     className: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  //     icon:<i class="fa-solid fa-suitcase fa-2x text-gray-300"></i>
  //   },
  //   {
  //     title: "Event",
  //     count: 21897,
  //     headCls: "card border-left-primary shadow h-100 py-2",
  //     className: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  //     icon: <i className="fa-solid fa-calendar fa-2x text-gray-300"></i>
  //   },
  //   {
  //     title: "Gallery",
  //     count: 21897,
  //     headCls: "card border-left-primary shadow h-100 py-2",
  //     className: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  //     icon:<i className="fa-solid fa-image  fa-2x text-gray-300"></i>
  //   },
  //   {
  //     title: "Blogs",
  //     count: 21897,
  //     headCls: "card border-left-primary shadow h-100 py-2",
  //     className: "text-xs font-weight-bold text-primary text-uppercase mb-1",
  //     icon:<i className="fa-solid fa-image  fa-2x text-gray-300"></i>
  //   },
  // ];
  return (
    <main className="main-container">
      <div className="main-title">
        <h4 className="heading">Welcome to Mepco</h4>
      </div>

      <div className="row">
        <DashboardCards
          title="Directory"
          count="21,893"
          headCls="card border-left-primary shadow h-100 py-2"
          className="text-xs font-weight-bold text-primary text-uppercase mb-1"
          icon="fa-solid fa-folder fa-2x text-gray-300"
        />
        <DashboardCards
          title="Job"
          count="6"
          headCls="card border-left-success shadow h-100 py-2"
          className="text-xs font-weight-bold text-success text-uppercase mb-1"
          icon="fa-solid fa-suitcase fa-2x text-gray-300"
        />
        <DashboardCards
          title="Event"
          count="4"
          headCls="card border-left-warning shadow h-100 py-2"
          className="text-xs font-weight-bold text-warning text-uppercase mb-1"
          icon="fa-solid fa-calendar fa-2x text-gray-300"
        />
        <DashboardCards
          title="Gallery"
          count="10"
          headCls="card border-left-info shadow h-100 py-2"
          className="text-xs font-weight-bold text-info text-uppercase mb-1"
          icon="fa-solid fa-image fa-2x text-gray-300"
        />
        <DashboardCards
          title="Blogs"
          count="2"
          headCls="card border-left-danger shadow h-100 py-2"
          className="text-xs font-weight-bold text-danger text-uppercase mb-1"
          icon="fa-solid fa-blog fa-2x text-gray-300"
        />
      </div>
    </main>
  );
};

export default Dashboard;

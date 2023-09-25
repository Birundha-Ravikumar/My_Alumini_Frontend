import React from "react";

const Dashboard = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h4 className="heading">Welcome to Mepco</h4>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Directory
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    21,909
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa-solid fa-folder fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Jobs
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    10
                  </div>
                </div>
                <div className="col-auto">
                  <i class="fa-solid fa-suitcase fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Events
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    30
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa-solid fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Gallery
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    18
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fa-solid fa-image  fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

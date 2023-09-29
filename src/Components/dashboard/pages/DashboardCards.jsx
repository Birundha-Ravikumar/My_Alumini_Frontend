import React from 'react'

const DashboardCards = ({title,count,className ,headCls,icon}) => {
  return (
        <div className="col-xl-3 col-md-6 mb-4">
          <div className={headCls}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className={className}>
                    {title}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {count}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={icon}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DashboardCards

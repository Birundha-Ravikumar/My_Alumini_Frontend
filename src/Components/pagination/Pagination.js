import React from "react";
import '../pagination/pagination.css';

const Pagination = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="pagination-wrap text-center">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  50
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;

// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import axios from "axios";

// const Pagination = ({ apiEndpoint, itemsPerPage, renderData }) => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(apiEndpoint);
//       setData(response.data.data);
//       setTotalPages(Math.ceil(response.data.length / itemsPerPage));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [apiEndpoint, itemsPerPage]);

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const subset = data.slice(startIndex, endIndex);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   return (
//     <div>
//       {renderData(subset)}
//       <ReactPaginate
//         previousLabel={"previous"}
//         nextLabel={"next"}
//         breakLabel={"..."}
//         pageCount={totalPages}
//         forcePage={currentPage}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={3}
//         onPageChange={handlePageChange}
//         containerClassName={"pagination justify-content-center"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-link"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

// export default Pagination;

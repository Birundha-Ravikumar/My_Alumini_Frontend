import React from "react";
import Banner from "../banner/Banner";
import images from '../../CurrentImages/ImageImports.js';
import '../committee/committee.css';
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";



const committee = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Committee" />
      <section id="page-content-wrap">
        <div className="committee-content-wrap section-padding">
          <div className="committee-member-list">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-10 col-md-7 m-auto">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee1}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Bryan Watshon{" "}
                      <span className="committee-deg">President</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee2}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Carlos Helu{" "}
                      <span className="committee-deg">Vice President</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee3}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Amancio Ortega{" "}
                      <span className="committee-deg">Secretary</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee5}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Angle Tuni{" "}
                      <span className="committee-deg">Asst Secretary</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee6}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Alex Kalifa{" "}
                      <span className="committee-deg">Office Secretary</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee7}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Mal Muhit{" "}
                      <span className="committee-deg">Finance Member</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee8}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Alex Salina{" "}
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee3}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Karim Mia{" "}
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee2}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Rahim Mia{" "}
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee5}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Prince Rimon
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee6}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Sheoli Afsar
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="single-committee-member">
                    <img
                      src={images.commitee7}
                      className="img-fluid"
                      alt="Committee"
                    />
                    <h3>
                      Prince Kamla
                      <span className="committee-deg">Committee Member</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};
export default committee;
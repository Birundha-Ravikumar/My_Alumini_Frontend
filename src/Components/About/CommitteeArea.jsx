import React from "react";
import images from "../../CurrentImages/ImageImports";

const CommitteeArea = () => {
  return (
    <section className="our-honorable-commitee section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="about-page-area-title">
              <h2>Our Honorable Committe</h2>
            </div>
          </div>
        </div>

        <div className="honorable-committee-list">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee1}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  BRYAN WATSHON
                  <span className="committee-deg">President</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee2}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  CARLOS HELU
                  <span className="committee-deg">Vice President</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee3}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  ANGLE TUNI<span className="committee-deg">Secretary</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee5}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  ALEX KALIFA
                  <span className="committee-deg">Asst Secretary</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee6}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  ALEX Tuntuni
                  <span className="committee-deg">Office Secretary</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee7}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  MAL MUHIT
                  <span className="committee-deg">Finance Member</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee8}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  PRINCE RIMON
                  <span className="committee-deg">Committee Member</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-committee-member">
                <div className="commitee-thumb">
                  <img
                    src={images.commitee1}
                    className="img-fluid"
                    alt="Committee"
                  />
                </div>
                <h3>
                  PRINCE KAMLA
                  <span className="committee-deg">Committee Member</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeArea;
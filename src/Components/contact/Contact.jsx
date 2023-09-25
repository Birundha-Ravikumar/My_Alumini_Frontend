import React from "react";
import '../contact/contact.css';
import Banner from "../banner/Banner";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";

const Contact = () => {
  return (
    <>
      <HeaderPage />
      <Banner title="Contact Us" />
      <section id="page-content-wrap">
        <div className="contact-page-wrap section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-content-inner">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="map-area-wrap">
                        <iframe src="https://snazzymaps.com/embed/75079"></iframe>
                      </div>
                    </div>
                    <div className="col-lg-6 m-auto">
                      <div className="contact-form-wrap">
                        <h3>Send Message</h3>
                        <form action="#" id="cbx-contact-form">
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label for="cbxname">Name</label>
                                <input
                                  type="text"
                                  name="cbxname"
                                  required
                                  id="cbxname"
                                  placeholder="Your Full Name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label for="cbxemail">Email</label>
                                <input
                                  type="email"
                                  name="cbxemail"
                                  required
                                  id="cbxemail"
                                  placeholder="Your Email"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <label for="cbxsubject">Subject</label>
                            <input
                              type="text"
                              name="cbxsubject"
                              id="cbxsubject"
                              placeholder="Subject"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label for="cbxmessage">Message</label>
                            <textarea
                              name="cbxmessage"
                              id="cbxmessage"
                              rows="10"
                              cols="80"
                              placeholder="Your Message"
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cbxsendme"
                              name="cbxsendme"
                              value="on"
                            />
                            <label className="custom-control-label" for="cbxsendme">
                              Send Me CC
                            </label>
                          </div>

                          <button className="btn btn-reg">Send</button>
                          <div id="cbx-formalert"></div>
                        </form>
                      </div>
                    </div>
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

export default Contact;
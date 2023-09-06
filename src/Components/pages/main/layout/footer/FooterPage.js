import React from 'react';
import logo from '../../../../../CurrentImages/Logo/logo1.jpeg'
import '../footer/style.css';

const FooterPage = () => {
  return (
    <>
    <footer id="footer-area">
      <div className="footer-widget section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-widget-wrap">
                <div className="widgei-body">
                  <div className="footer-about">
                    <img src={logo} alt="Logo" className="img-fluid" />
                    <p>
                      VISION ENVISIONING A WORLD LEAD BY OUR ENGINEERS HOLDING
                      A BEACON OF HOPE AND CONFIDENCE FOR GENERATION TO COME
                      MISSION TO PRODUCE COMPETENT, DISCIPLINED AND QUALITY
                      ENGINEERS & ADMINISTRATORS THROUGH SERVICE PAR EXCELLENCE
                    </p>
                    <a href="#">Telephone: 04652 235306</a>
                    <a href="#">Email: mepconnect@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-widget-wrap">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widgei-body">
                  <p>
                    We are legend Lorem ipsum dolor sitmet, nsecte ipisicing
                    eit, sed
                  </p>
                  <div className="newsletter-form">
                    <form id="cbx-subscribe-form">
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        id="subscribe"
                        required
                      />
                      <button type="submit">
                        <i className="far fa-paper-plane"></i>
                      </button>

                      <p id="cbx-subscribe-form-error"></p>
                    </form>
                  </div>
                  <div className="footer-social-icons">
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fab fa-vimeo-v"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-widget-wrap">
                <h4 className="widget-title">Usefull Link</h4>
                <div className="widgei-body">
                  <ul className="double-list footer-list clearfix">
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Alumni</a>
                    </li>
                    <li>
                      <a href="#">Notice Board</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-bottom-text">
                <a href="/admin/login" type="button" target="blank">Admin Panel</a>
                <p>© 2017 - 2023 Mepco, All rights reserved..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default FooterPage
import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import { Accordion, Carousel, CarouselItem } from "react-bootstrap";
import "../singleEvent/singleEvent.css";
import HeaderPage from "../pages/main/layout/header/HeaderPage";
import FooterPage from "../pages/main/layout/footer/FooterPage";
import { useLocation } from "react-router-dom";

const SingleEvent = () => {
  const location = useLocation();
  console.log("location", location.state?.data?.title);
  const countDownDate = new Date(location.state.data.eventDate).getTime();
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const countValue = countDownDate - new Date().getTime();
      const days = Math.floor(countValue / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (countValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((countValue % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countValue % (1000 * 60)) / 1000);
      setCountDown({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <HeaderPage />
      <Banner title="All Event Archieve" />
      <section id="page-content-wrap">
        <div className="single-event-page-content section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-event-details">
                  <div className="event-thumbnails">
                    <Carousel
                      id="testimonial-carousel"
                      className="carousel carousel-fade slide event-thumbnail-carousel"
                      data-bs-ride="carousel"
                      indicators={false}
                    >
                      <Carousel.Item>
                        <div className="event-thumb-item event-thumb-img-1">
                          <div className="event-meta">
                            <h3>{location.state.data.title}</h3>
                            <a className="event-address" href="#">
                              <i className="fa fa-map-marker"></i>{location.state.data.venue}
                            </a>
                            <a href="/" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>
                      </Carousel.Item>
                      <CarouselItem>
                        <div className="event-thumb-item event-thumb-img-2">
                          <div className="event-meta">
                            <h3>{location.state.data.title}</h3>
                            <a className="event-address" href="#">
                              <i className="fa fa-map-marker"></i> Sayidan
                              Street, Gondomanan, 8993, San Francisco, CA
                            </a>
                            <a href="#" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="event-thumb-item event-thumb-img-3">
                          <div className="event-meta">
                            <h3>
                              Recently we are going to arrange a awesome get
                              together!
                            </h3>
                            <a className="event-address" href="#">
                              <i className="fa fa-map-marker"></i> Sayidan
                              Street, Gondomanan, 8993, San Francisco, CA
                            </a>
                            <a href="#" className="btn btn-brand btn-join">
                              Join
                            </a>
                          </div>
                        </div>
                      </CarouselItem>
                    </Carousel>
                    <div className="event-countdown">
                      <div
                        className="event-countdown-counter"
                        data-date="2024/10/10"
                      >
                        <div className="counter-item">
                          <span className="counter-label">Days</span>
                          <span className="single-count">{countDown.days}</span>
                        </div>
                        <div className="counter-item">
                          <span className="counter-label">Hr</span>
                          <span className="single-count">
                            {countDown.hours}
                          </span>
                        </div>
                        <div className="counter-item">
                          <span className="counter-label">Min</span>
                          <span className="single-count">
                            {countDown.minutes}
                          </span>
                        </div>
                        <div className="counter-item">
                          <span className="counter-label">Sec</span>
                          <span className="single-count">
                            {countDown.seconds}
                          </span>
                        </div>
                      </div>
                      <p>Remaining</p>
                    </div>
                  </div>
                  <h2>Details all Thing About This Event</h2>
                  <p>
                    Aenean viverra rhoncus pede. Phasellus leo dolor, tempus
                    non, auctor endrerit quis, nisi. Fusce neque. Donec vitae
                    orci sed dolor rutrum auctor. Sed ngilla mauris sit amet
                    nibhr, tempus non, auctor endrerit quis, nisi..
                  </p>

                  <p>
                    Etiam rhoncus. Ut leo. Morbi mollis tellus ac sapien. Fusce
                    fermentum oo nec arcu. Quisque malesuada placerat nisl.
                    Etiam sit amet orci eget faucitincidunt. Quisque rutrum.
                    Pellentesque posuere. Praesent ac massa at ligula laoureet
                    iaculis. Cras risus ipsum, faucibus ut, ullamcorper id,
                    varius ac, leo.Ut a nisl id Etiam rhoncus. Ut leo. Morbi
                    mollis tellus ac sapien. Fusce fermentum oo nec ante tempus
                    hendrerit. Curabitur at lacus ac velit ornare lobortis.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In turpis. Quisque id mi.
                  </p>
                  <div className="event-schedul">
                    <h3>Event Schedule</h3>

                    <div className="row justify-content-center">
                      <div className="col-md-10">
                        <Accordion
                          className="cbx-acacordion"
                          id="cbx-event-accordion"
                        >
                          <Accordion.Item eventKey="0">
                            <Accordion.Header id="headingOne">
                              <span className="event-time">8am - 10am</span>{" "}
                              Grand Opening Speech of Our Event And Re
                              Introductory episode
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header id="headingTwo">
                              <span className="event-time">11am - 2pm</span>{" "}
                              Grand Opening Speech of Our Event And Re
                              Introductory episode
                            </Accordion.Header>
                            <Accordion.Body>
                              <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident.
                              </p>
                              <p>
                                Ad vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                              </p>
                              <h4 className="speaker-name">
                                <strong>Speaker:</strong> Adam Watshon,
                                <span className="speaker-deg">
                                  Crish Joshef
                                </span>
                              </h4>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header id="headingThree">
                              <span className="event-time">2am - 5pm</span>{" "}
                              Grand Opening Speech of Our Event And Re
                              Introductory episode
                            </Accordion.Header>
                            <Accordion.Body>
                              <p>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident.
                              </p>
                              <p>
                                Ad vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.
                              </p>
                              <h4 className="speaker-name">
                                <strong>Speaker:</strong> Adam Watshon,
                                <span className="speaker-deg">
                                  Crish Joshef
                                </span>
                              </h4>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
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

export default SingleEvent;

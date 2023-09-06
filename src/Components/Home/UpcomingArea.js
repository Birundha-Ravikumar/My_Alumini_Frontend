import React from "react";
import { Carousel } from "react-bootstrap";
import EventCount from "../event/EventCount";
import images from "../ImageImports.js";

const UpcomingArea = () => {
  return (
    <section id="upcoming-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="upcoming-event-wrap">
              <div className="up-event-titile">
                <h3>Upcoming event</h3>
              </div>
              <Carousel
                id="testimonial-carousel"
                className="upcoming-carousel upcoming-event-content carousel carousel-fade slide"
                data-bs-ride="carousel"
                indicators={false}
              >
                <Carousel.Item>
                  <EventCount image={images.BArch2} />
                </Carousel.Item>

                <Carousel.Item>
                  <EventCount image={images.BArch3} />
                </Carousel.Item>

                <Carousel.Item>
                  <EventCount image={images.BArch4} />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingArea;
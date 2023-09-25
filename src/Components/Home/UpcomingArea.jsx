import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import EventCount from "../event/EventCount";
import images from "../../CurrentImages/ImageImports.js";
import axios from "axios";
import { EVENT_GET_API } from "../../../utils/endpoints";
import { formHeaders } from "../../../utils/FormHeader";

const UpcomingArea = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(EVENT_GET_API, formHeaders());
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
                {data.map((event,index) =>
                <Carousel.Item key={index}>
                  <EventCount image={images.BArch2} data={event}/>
                </Carousel.Item>)}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingArea;
import React, { useEffect, useState } from "react";
import "../event/event.css";
import { Link } from "react-router-dom";


const EventCount = ({ image, data }) => {
  const countDownDate = new Date(data.eventDate).getTime();
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
          <div className="single-upcoming-event">
            <div className="row">
              <div className="col-lg-5">
                <div className="up-event-thumb">
                  <img src={image} className="img-fluid" alt="Upcoming Event" />
                  <h4 className="up-event-date">It’s {data.eventDate}</h4>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="display-table">
                  <div className="display-table-cell">
                    <div className="up-event-text">
                      <div className="event-countdown">
                        <div
                          className="event-countdown-counter"
                          data-date="2024/9/10"
                        >
                          <div className="counter-item">
                            <span className="counter-label">Days</span>
                            <span className="single-count">
                              {countDown.days}
                            </span>
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
                      <h3>
                        <a href="/singleEvent">{data.title}</a>
                      </h3>
                      <p>{data.description}</p>                      
                      <Link
                        to="/singleEvent"
                        state={{data}}
                        className="btn btn-brand btn-brand-dark"
                      >
                        join with us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default EventCount;

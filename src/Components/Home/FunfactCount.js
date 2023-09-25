import React, { useEffect, useState } from 'react';
import images from "../ImageImports.js";


const FunfactCount = () => {
  const NumberCounter = ({ from, to, duration}) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const timeElapsed = timestamp - startTimestamp;
        const progress = Math.min(timeElapsed / duration, 1);
        const currentValue = Math.round(from + progress * (to - from));
        setCount(currentValue);
        if (timeElapsed < duration) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [from, to, duration]);

    return (
      <span className="counter-number-text">
        {count}
      </span>
    );
  };
  return (
    <>
    <section id="funfact-area">
        <div className="container-fluid class4">
          <div className="row text-center class1">
            <div className="col-lg-3 col-sm-6 class2">
              <div className="single-funfact-wrap ">
                <div className="funfact-icon">
                  <img src={images.fun_fact1} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">
                  <NumberCounter from={1} to={4025} duration={1000} />
                  </h5>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={images.fun_fact2} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5 className="funfact-count">
                  <NumberCounter from={1} to={8725} duration={1000} />
                  </h5>
                  <p>Photos</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={images.fun_fact3} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">
                    <NumberCounter from={1} to={231} duration={1000} />
                    </span>+
                  </h5>
                  <p>Events</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-wrap">
                <div className="funfact-icon">
                  <img src={images.fun_fact4} alt="Funfact" />
                </div>
                <div className="funfact-info">
                  <h5>
                    <span className="funfact-count">
                    <NumberCounter from={1} to={32} duration={1000} />
                    </span>+
                  </h5>
                  <p>Alumnis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FunfactCount
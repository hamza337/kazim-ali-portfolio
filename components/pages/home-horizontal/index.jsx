import React, { useEffect, useState } from "react";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import { GetAllReviews, GetAllServices } from "../../../redux/action";
import { useDispatch } from "react-redux";
import { PopUp } from "../../PopUp";

const EdinaHorizontal = () => {

  const [showPopup, setShowPopup] = useState(false)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllReviews())
    dispatch(GetAllServices())
  }, [])
  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');

    if (!popupShown || popupShown === 'false') {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('popupShown', true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div>
      <PopUp
        show={showPopup}
        setShow={setShowPopup} />
      <Hero />
      <About />
      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>His International Courses!</h3>
            <p>
              Sir Syed Kazim Ali has been teaching and providing the following services at the international level.
            </p>
          </div>
          <Service apiRoute='international-courses' path='/international-courses'/>
        </div>
      </div>
      <div className="edina_tm_national_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>His National Courses!</h3>
            <p>
              Sir Syed Kazim Ali has been teaching and providing the following services at the national level.
            </p>
          </div>
          <Service apiRoute='courses' path='/national-courses'/>
        </div>
      </div>
      {/* <div className="edina_tm_portfolio" id="courses">
        <div className="container">
          <div className="edina_tm_title">
            <h3>His National Courses!</h3>
            <p>
              Sir Syed Kazim Ali has been teaching and providing the following services and courses at the national level.
            </p>
          </div>
          <Portfolio />
        </div>
      </div> */}
      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Discover what his students have to say about their journey to success under his guidance.
            </p>
          </div>
          {/* End xt_tm_title */}
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      {/* Start Student Rreviews Slider */}
      <div className="edina_tm_news" id="studentreviews">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Student Reviews</h3>
            <p>
              Discover what his students have to say about their journey to success under his guidance.
            </p>
          </div>
          <Blog />
        </div>
      </div>
      {/* End Student Rreviews Slider */}

    </div>
  );
};

export default EdinaHorizontal;

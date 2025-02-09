import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NationalCoursesList from "../../national-courses/NationalCoursesList";
import { GetAllNationalCourses } from "../../../redux/action/nationalCourses";

const MyNationalCourses = () => {
  const dispatch = useDispatch();
  const reviewsLoaded = useSelector((state) => state.review.reviewsLoaded);

  // Fetch reviews when the component mounts
  useEffect(() => {
    if (!reviewsLoaded) {
      dispatch(GetAllNationalCourses()); // Ensure that reviews are fetched if not already loaded
    }
  }, [dispatch, reviewsLoaded]);

  return (
    <div className="card overflow-hidden inner-page-card">
      <div className={`layout-container`}>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-page">
            <div className="edina_tm_news" id="studentreviews">
              <div className="container">

              <div className="about_title">
                                        <h3 >Why Choose Sir Kazim’s National Courses?</h3>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <p>
                                              Explore Sir Kazim’s expertly designed national courses, designed for CSS, PMS exam preparation, and professional English writing. Let's join him to gain unparalleled guidance, skills, and knowledge to excel in English essay and precis and career pursuits with comprehensive support for ambitious learners.
                                            </p>
                                        </div>
                                    </div>

                <NationalCoursesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNationalCourses;
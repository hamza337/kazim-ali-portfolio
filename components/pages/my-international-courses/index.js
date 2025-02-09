import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InternationalCoursesList from "../../international-courses/InternationalCourses";
import { GetAllInterationalCourses } from "../../../redux/action/internationalCourses";

const MyInternationalCourses = () => {
  const dispatch = useDispatch();
  const reviewsLoaded = useSelector((state) => state.review.reviewsLoaded);

  // Fetch reviews when the component mounts
  useEffect(() => {
    if (!reviewsLoaded) {
      dispatch(GetAllInterationalCourses()); // Ensure that reviews are fetched if not already loaded
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
                                        <h3 >What Makes Sir Kazim’s International Courses Unique?</h3>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <p>                                         
                                              Master GRE, GAT, SAT, GMAT, IELTS, TOEFL, Business English, English Grammar, and Professional English with Sir Kazim’s expert international courses. Gain the skills, confidence, and strategies needed to excel in standardized tests, academic writing, and professional communication for global success.
                                            </p>
                                        </div>
                                    </div>

                <InternationalCoursesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInternationalCourses;
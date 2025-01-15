import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewList from "../../review-list/ReviewList";
import { GetAllReviews } from "../../../redux/action/reviews"; // Import your action to fetch reviews

const Reviews = () => {
  const dispatch = useDispatch();
  const reviewsLoaded = useSelector((state) => state.review.reviewsLoaded);
  console.log('second', reviewsLoaded);

  // Fetch reviews when the component mounts
  useEffect(() => {
    if (!reviewsLoaded) {
      dispatch(GetAllReviews()); // Ensure that reviews are fetched if not already loaded
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
                                        <h3 >What Sir Kazim's Students Say!</h3>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <p>
                                         
Discover what students worldwide have to say about Sir Kazim's transformative English writing courses. From CSS and PMS exam preparation to building professional writing skills, read testimonials highlighting his expert guidance, comprehensive teaching methods, and dedication to student success. Learn how his personalized approach has empowered thousands to excel in competitive exams and launch digital careers.
                                            </p>
                                        </div>
                                    </div>

                <ReviewList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
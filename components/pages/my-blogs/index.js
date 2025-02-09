import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "../../blog-list/BlogList";
import { GetAllBlogs } from "../../../redux/action/blogs";

const MyBlogs = () => {
  const dispatch = useDispatch();
  const reviewsLoaded = useSelector((state) => state.review.reviewsLoaded);

  // Fetch reviews when the component mounts
  useEffect(() => {
    if (!reviewsLoaded) {
      dispatch(GetAllBlogs()); // Ensure that reviews are fetched if not already loaded
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
                  <h3 >Unlock Success with Sir Kazim’s Expert Insights</h3>
                </div>
                <div className="content">
                  <div className="info">
                    <p>
                    Explore Sir Syed Kazim Ali’s expert blogs, packed with insights, tips, and strategies for CSS, PMS, and professional English writing. Stay ahead with high-quality content designed to help students excel in competitive exams and academic writing.
                    </p>
                  </div>
                </div>
                <BlogList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
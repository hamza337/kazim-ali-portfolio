import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { removeTags } from "../../assets";

const ReviewList = () => {
  const router = useRouter();
  const review = useSelector((state) => state.review);

    // Generate slug dynamically from the title
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    };

  // Check if reviews are loading
  const isLoading = !review.allReviews || review.allReviews.length === 0;

  // Filter published reviews and sort by creation date (newest first)
  const filteredReviews = review.allReviews
    ? review.allReviews
        .filter((item) => item.isPublished)
        .sort((a, b) => new Date(b.createDateTime) - new Date(a.createDateTime))
    : [];

  if (isLoading) {
    return <p className="text-center">Loading reviews...</p>;
  }

  return (
    <div className="news_inner my_carousel review_list">
      <ul>
        {filteredReviews.length > 0 &&
          filteredReviews.map((item) => {
            const formattedDate = new Date(item.createDateTime).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
            const slug = generateSlug(item.title); // Generate slug from title

            return (
              <li
                key={item.id}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div
                    className="image"
                    onClick={() => {
                      router.push(`/student-reviews/details/${slug}`);
                    }}
                  >
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${item.featuredImage})`,
                      }}
                    ></div>
                  </div>

                  <div className="news_details">
                    <span>
                      {formattedDate}{" "}
                      <a href="#!">
                        {item.categoryName ? removeTags(item.categoryName) : "Uncategorized"}
                      </a>
                    </span>
                    <h3
                      className="title"
                      onClick={() => {
                        router.push(`/student-reviews/details/${slug}`);
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ReviewList;
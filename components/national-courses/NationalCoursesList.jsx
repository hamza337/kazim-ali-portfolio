import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const NationalCoursesList = () => {
  const router = useRouter();
  const review = useSelector((state) => state.review);
  const cmsUrl = 'http://localhost:1337'

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
  const filteredReviews = review.allReviews ? review.allReviews : [];

  if (isLoading) {
    return <p className="text-center">Loading reviews...</p>;
  }

  console.log('first', filteredReviews)

  return (
    <div className="news_inner my_carousel review_list">
      <ul>
        {filteredReviews.length > 0 &&
          filteredReviews.map((item) => {
            const formattedDate = new Date(item.postedDate).toLocaleDateString("en-US", {
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
                      router.push(`/national-courses/details/${slug}`);
                    }}
                  >
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${cmsUrl}${item.coverImage?.url})`,
                      }}
                    ></div>
                  </div>

                  <div className="news_details">
                    <span>
                      {item?.duration}{" "}USD{" "}{item?.courseFee}
                    </span>
                    <h3
                      className="title"
                      onClick={() => {
                        router.push(`/national-courses/details/${slug}`);
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

export default NationalCoursesList;
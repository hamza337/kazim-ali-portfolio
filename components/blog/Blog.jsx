import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { removeTags } from "../../assets";

Modal.setAppElement("#__next");

const Blog = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  const router = useRouter();
  const review = useSelector((state) => state.review);
      // Generate slug dynamically from the title
      const generateSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
      };

  // Filter published reviews and sort by creation date (newest first)
  const filteredReviews = review.allReviews
    .filter((item) => item.isPublished)
    .sort((a, b) => new Date(b.createDateTime) - new Date(a.createDateTime));

  return (
    <div className="news_inner my_carousel" id="modal">
      <ul>
        {/* Slider component */}
        <Slider {...settings}>
          {filteredReviews.length > 0 &&
            filteredReviews.map((item) => {
              // Format the date as "02 May 2024"
              const formattedDate = new Date(item.createDateTime).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });
              const slug = generateSlug(item.title); // Generate slug from title
              // Return the <li> element inside the map function
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
        </Slider>
      </ul>
    </div>
  );
};

export default Blog;
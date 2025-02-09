import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
Modal.setAppElement("#__next");

const Blog = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  var settings = {
    dots: false,
    arrow: true,
    infinite: data?.length > 3,
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
      // Generate slug dynamically from the title
      const generateSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "");
      };

  const getReviews = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/student-reviews?populate=*&sort[0]=createdAt:asc&pagination[limit]=100`)
      setData(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getReviews();
  },[])

  return (
    <div className="news_inner my_carousel" id="modal">
      <ul>
        {/* Slider component */}
        <Slider {...settings}>
          {data?.length > 0 &&
            data?.slice(0,6).map((item) => {
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
                      className="cover-container"
                      onClick={() => {
                        router.push(`/student-reviews/details/${slug}`);
                      }}
                    >
                      <Image
                        src={`${baseUrl}${item?.reviewerImage?.url}`}
                        alt={'blog Image'}
                        layout="responsive"
                        width={1170}
                        height={610}
                        className="cover-image"
                        priority
                      />
                    </div>

                    <div className="news_details">
                      <span>
                        {item.reviewerName ? item.reviewerName : ""}{" "}
                      </span>
                      <p>
                        {item.reviewerDesignation ? item.reviewerDesignation : ""}
                      </p>
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
import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import Image from "next/image";
import axios from "axios";

export default function Testimonial() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  const getTestimonials = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/testimonials?populate=*&sort[0]=createdAt:desc`)
      setData(response.data.data);
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTestimonials();
  },[])

  return (
    <Slider {...settings}>
      {data?.slice(0,6).map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay='100'
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${baseUrl}${val.image?.url})`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              <div className="icon">
                <Image
                  width={60}
                  height={60}
                  className="svg"
                  src="/img/svg/quote.svg"
                  alt="quote"
                />
              </div>
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.description}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}

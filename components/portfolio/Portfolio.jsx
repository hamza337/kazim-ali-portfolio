import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

Modal.setAppElement("#__next");

const Portfolio = () => {
  const router = useRouter();
  const service = useSelector((state) => state.service);
  
  // Generate slug dynamically from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const filteredServices = service.allServices
    .filter((item) => item.isPublished && item.isNational)
    .sort((a, b) => new Date(b.createDateTime) - new Date(a.createDateTime));

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
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          {filteredServices.length > 0 &&
            filteredServices.map((item) => {
              const formattedDate = new Date(item.createDateTime).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              });

              const slug = generateSlug(item.title); // Generate slug from title

              return (
                <li key={item.id}>
                  <div className="list_inner">
                    <div className="image">
                      <div
                        onClick={() => {
                          router.push(`/national-service/${slug}`);
                        }}
                        className="details"
                      >
                        <Image
                          width={357}
                          height={357}
                          src={item.featuredImage}
                          data-tip
                          data-for={item.id}
                          alt="National Service"
                        />

                        <ReactTooltip
                          id={item.id}
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                          <div>
                            <h5>{item.title}</h5>
                            <span>FEE: RS.{item.courseFee}</span>
                          </div>
                        </ReactTooltip>
                      </div>
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

export default Portfolio;
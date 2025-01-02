import { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Tilt from "react-parallax-tilt";

Modal.setAppElement("#__next");

const Service = () => {
  const [visibleServices, setVisibleServices] = useState(4);
  const router = useRouter();
  const service = useSelector((state) => state.service);
  
  const filteredServices = service.allServices
    .filter((item) => item.isPublished && !item.isNational)
    .sort((a, b) => new Date(b.createDateTime) - new Date(a.createDateTime));

  // Generate slug dynamically from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const loadMoreServices = () => {
    setVisibleServices((prev) => prev + 4);
  };

  const showLessServices = () => {
    setVisibleServices(4);
  };

  return (
    <div className="service_list">
      <ul>
        {filteredServices.slice(0, visibleServices).map((item) => (
          <li data-aos="fade-right" data-aos-duration="1200" key={item.id}>
            <Tilt>
              <div
                className="list_inner"
                // Navigate using the generated slug instead of ID
                onClick={() => router.push(`/international-service/${generateSlug(item.title)}`)}
              >
                <div className="hover">
                  <div className="course_price">
                    <p>
                      <span>Fee: </span>${item.courseFee}
                    </p>
                  </div>
                  <div className="service_title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="learn_more">
                    Learn More <span></span>
                  </div>
                </div>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>

      <div className="show_more_btn edina_tm_about edina_tm_button">
        {visibleServices < filteredServices.length ? (
          <button className="color" onClick={loadMoreServices}>Show More</button>
        ) : (
          <button className="color" onClick={showLessServices}>Show Less</button>
        )}
      </div>
    </div>
  );
};

export default Service;
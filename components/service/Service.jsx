import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Tilt from "react-parallax-tilt";
import axios from "axios";

Modal.setAppElement("#__next");

const Service = ({apiRoute, path}) => {
  const [courses, setCourses] = useState([]);
  const baseUrl = 'http://localhost:1337/api'
  const router = useRouter();

  // Generate slug dynamically from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const getAllInternationalCourses = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${apiRoute}?populate=*&sort[0]=createdAt:desc`)
      setCourses(response?.data.data);
    } catch (err) {
      console.error('Error Fetching Data');
    }
  }

  useEffect(() => {
    getAllInternationalCourses();
  },[])

  return (
    <div className="service_list">
      <ul>
        {courses.slice(0, 4).map((item) => (
          <li data-aos="fade-right" data-aos-duration="1200" key={item.id}>
            <Tilt>
              <div
                className="list_inner"
                // Navigate using the generated slug instead of ID
                onClick={() => router.push(`${path}/details/${generateSlug(item.title)}`)}
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

      <div className="show_more_btn edina_tm_button">
        <button className="color"
        onClick={() => router.push(`${path}`)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Service;
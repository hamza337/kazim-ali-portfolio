import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Image from "next/image";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Sir Kazim</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <p>
              Over the last 10 years, he has taught English grammar, blogging, story writing, essay composition, and research and content creation with a global community of nearly 12,000 students. His goal has always been to help his students express their ideas and thoughts coherently, fluently, and confidently.
              </p>
              <p></p>
              <p>
              However, he is a well-known English essay and precis teacher in Pakistan for CSS and PMS and descriptive and judiciary examinations with the highest success rate of his students. Known for his rigorous teaching methods and insightful guidance, he has successfully mentored countless competitive students, especially CSS and PMS aspirants, in mastering essay writing, précis, and communication skills.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What is his skill level?</h3>
              <p className="desc">

                Sir Syed Kazim Ali is renowned for his expertise and mastery in teaching the following areas.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <Image
                width={445}
                height={599}
                src="/img/thumbs/26-35.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/hero/kazim.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>10+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;

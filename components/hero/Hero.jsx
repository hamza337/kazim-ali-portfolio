import React from "react";
import Social from "../Social";
import {ReactTyped} from "react-typed";
import Image from "next/image";
// import shapeImage from "../../public/img/hero/1.jpg";
import heroImage from "../../public/img/hero/kazim.jpg";

const heroContent = {
  // shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Sir Syed Kazim Ali",
  description: `He is a well-known online English grammarian and writing coach nationally and internationally. Based in Pakistan, he has over 10 years of experience.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroContent.heroImage} alt="brand" />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
           Meet {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={180}
                backSpeed={60}
                strings={["Writing Coach", "Grammarian", "Essay and Precis Teacher"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            
            <a href="https://cssprepforum.com/" target="_blank" className="color">
             VISIT CPF
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;

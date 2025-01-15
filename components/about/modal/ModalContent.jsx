import React, { useEffect, useState } from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";
import Feedback from "../Feedback";
import axios from "axios";

const ModalContent = () => {
  const baseUrl = 'http://localhost:1337/api';
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/me?populate=*`)
      setData(response.data.data);
    }catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getData();
  },[])
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Personal Info</h3>
          <PersonalInfo data={data}/>
          <div className="edina_tm_button">
            <a href="https://www.linkedin.com/in/syed-kazim-ali/" target="_blank" className="color">
              Visit Profile
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}

        <div className="col-6 achievements-wrapper">
          <h3>Achievements</h3>
          <Achievements data={data} />
        </div>
        {/* End  Achievements */}
      </div>
      {/* End .row */}

      <div className="row resume-box">
        <div className="col-12 one-wrapper achievements-wrapper">
          <h3>What Pakistani Say About Him?</h3>
          <Feedback data={data?.comments}/>
        </div>
      </div>

      <div className="row resume-box">
        <div className="col-6">
          <h3>Founder Of</h3>
          <Experience data={data?.experience}/>
        </div>
        {/* End  Experience */}

        <div className="col-6">
          <h3>Education</h3>
          <Education data={data?.education}/>
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;

import React from "react";

const skillsContent = [
  {
    name: "English Grammar",
    skillPercent: "95",
  },
  {
    name: "Written Communication",
    skillPercent: "95",
  },
  {
    name: "Article & Blog writing",
    skillPercent: "90",
  },
  {
    name: "Essay & Precis Writing",
    skillPercent: "95",
  },
  {
    name: "Comprehension Writing",
    skillPercent: "90",
  },
  {
    name: "Translation Processing",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;

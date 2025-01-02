import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
  FiYoutube
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/cssforyou",
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/cssprepforum/",
  },
  { iconName: <FiYoutube />, link: "https://www.youtube.com/@Howfiv" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/syed-kazim-ali/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

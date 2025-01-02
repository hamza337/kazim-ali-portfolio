import Image from "next/image";
import feedbackContent from "../../data/feedback";

const Feedback = () => {
  return (
    <ul>
      {feedbackContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <Image
              width={19}
              height={19}
              src="/img/about/briefcase.png"
              alt="icon"
            />
          </div>
    
          <h5 className="poppins-font text-uppercase">
            {val.title}
            {/* <span className="place open-sans-font">{val.institute}</span> */}
          </h5>
          <a href={val.url} target="_blank" className="open-sans-font about_link_name">{val.linkName}</a>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;

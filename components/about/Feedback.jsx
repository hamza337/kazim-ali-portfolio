import Image from "next/image";

const Feedback = ({data}) => {
  return (
    <ul>
      {data?.map((val, id) => (
        <li key={id}>
          <div className="icon">
            <Image
              width={19}
              height={19}
              src="/img/about/briefcase.png"
              alt="icon"
            />
          </div>
    
          <h5 className="poppins-font text-uppercase">
            {val.comment}
            {/* <span className="place open-sans-font">{val.institute}</span> */}
          </h5>
          <a href={val.link} target="_blank" className="open-sans-font about_link_name">{val.plateformName}</a>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;

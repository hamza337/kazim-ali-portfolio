import Image from "next/image";

const Experience = ({data}) => {
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
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.startYear}-{val.endYear ? val.endYear : (val.present ? 'present' : '')}</span>
          <h5 className="poppins-font text-uppercase">
            {val.title}
            <span className="place open-sans-font">{val.plateformType}</span>
          </h5>
          <p className="open-sans-font">{val.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

const PersonalInfo = ({data}) => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      <li 
      >
        <span className="title">first name: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Syed Kazim
        </span>
      </li>
      <li 
      >
        <span className="title">last name: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Ali
        </span>
      </li>
      <li 
      >
        <span className="title">age: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          {data?.Age}
        </span>
      </li>
      <li 
      >
        <span className="title">city: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Multan
        </span>
      </li>
      <li 
      >
        <span className="title">province: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Punjab
        </span>
      </li>
      <li 
      >
        <span className="title">country: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Pakistan
        </span>
      </li>
      <li 
      >
        <span className="title">phone: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          {data?.phone}
        </span>
      </li>
      <li 
      >
        <span className="title">email: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          {data?.email}
        </span>
      </li>
      <li 
      >
        <span className="title">langages: </span>
        <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
          Urdu, English
        </span>
      </li>
    </ul>
  );
};

export default PersonalInfo;

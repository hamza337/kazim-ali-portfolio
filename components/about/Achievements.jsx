const Achievements = ({data}) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{data?.yearsOfExperience}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            years of <span className="d-block">Experience</span>
          </p>
        </div>
      </div>
      <div className="col-6" >
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{data?.studentsTaughtWorldwide}</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            Students Taught <span className="d-block">Worldwide</span>
          </p>
        </div>
      </div>
      <div className="col-6" >
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{data?.studentSuccessRate}%</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            Students <span className="d-block">Success Rate</span>
          </p>
        </div>
      </div>
      <div className="col-6" >
        <div className="box-stats with-margin">
          <h3 className="poppins-font position-relative">{data?.studentsRecommendHim}%</h3>
          <p className="open-sans-font m-0 position-relative text-uppercase">
            Students Recommend <span className="d-block">HIM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

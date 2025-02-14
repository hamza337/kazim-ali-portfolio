import ParentHOC from "../../components/ParentHOC";
import MyNationalCourses from "../../components/pages/my-national-courses";

const Index = () => {
    const pageTitle = "National Courses";
    const description = "Explore sir kazim's national courses for CSS, PMS, and other competitive exams. Get expert guidance and structured preparation to achieve success.";
    const keywords = "sir kazim national courses, CSS preparation, PMS coaching, competitive exams, test preparation, online coaching";
    const image = 'https://syedkazimali.info/img/hero/kazim.jpg'; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyNationalCourses />
      </ParentHOC>  
    );
};

export default Index;

// import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"
import MyNationalCourses from "../../components/pages/my-national-courses";

const Index = () => {
    const pageTitle = "National Courses";
    const description = "Explore sir kazim's national courses for CSS, PMS, and other competitive exams. Get expert guidance and structured preparation to achieve success.";
    const keywords = "sir kazim national courses, CSS preparation, PMS coaching, competitive exams, test preparation, online coaching";
    const image = theimage; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyNationalCourses />
      </ParentHOC>  
    );
};

export default Index;

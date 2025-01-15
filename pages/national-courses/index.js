import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"
import MyNationalCourses from "../../components/pages/my-national-courses";

const index = () => {
    const pageTitle = "Student Review Page";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "student reviews, coaching, essay writing";
    const image = theimage; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyNationalCourses />
      </ParentHOC>  
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

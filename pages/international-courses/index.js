import dynamic from "next/dynamic";
import MyInternationalCourses from "../../components/pages/my-international-courses";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"

const index = () => {
    const pageTitle = "Student Review Page";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "student reviews, coaching, essay writing";
    const image = theimage; 

    return (
<ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
    <MyInternationalCourses />
</ParentHOC>
          
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

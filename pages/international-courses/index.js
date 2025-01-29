import dynamic from "next/dynamic";
import MyInternationalCourses from "../../components/pages/my-international-courses";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"

const index = () => {
    const pageTitle = "International Courses";
    const description = "Explore sir kazim's international courses for CSS, PMS, and other competitive exams. Get expert guidance and structured preparation to achieve success.";
    const keywords = "sir kazim international courses, CSS preparation, PMS coaching, competitive exams, test preparation, online coaching";
    const image = theimage; 

    return (
        <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
            <MyInternationalCourses />
        </ParentHOC>    
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

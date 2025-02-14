import MyInternationalCourses from "../../components/pages/my-international-courses";
import ParentHOC from "../../components/ParentHOC";

const Index = () => {
    const pageTitle = "International Courses";
    const description = "Explore sir kazim's international courses for CSS, PMS, and other competitive exams. Get expert guidance and structured preparation to achieve success.";
    const keywords = "sir kazim international courses, CSS preparation, PMS coaching, competitive exams, test preparation, online coaching";
    const image = 'https://syedkazimali.info/img/hero/kazim.jpg'; 

    return (
        <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
            <MyInternationalCourses />
        </ParentHOC>    
    );
};

export default Index;

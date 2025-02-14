import Reviews from "../../components/pages/reviews";
import ParentHOC from "../../components/ParentHOC";

const Index = () => {
    const pageTitle = "Student Review Page";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "student reviews, coaching, essay writing";
    const image = 'https://syedkazimali.info/img/hero/kazim.jpg'; 

    return (
        <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
            <Reviews />
        </ParentHOC>
    );
};

export default Index;

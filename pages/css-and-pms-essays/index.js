import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import CssAndPms from "../../components/pages/CSS&PMS";
import theimage from "../../public/img/hero/kazim.jpg"

const index = () => {
    const pageTitle = "CSS AND PMS ESSAYS PAGE";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "student reviews, coaching, essay writing";
    const image = theimage; 
    return (
        <ParentHOC authorizedIgnored={true}  pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
            <CssAndPms />
        </ParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

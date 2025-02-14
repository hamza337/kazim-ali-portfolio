import ParentHOC from "../../components/ParentHOC";
import CssAndPms from "../../components/pages/CSS&PMS";

const Index = () => {
    const pageTitle = "CSS AND PMS ESSAYS PAGE";
    const description = "Access high-quality CSS and PMS essays to enhance your preparation. Learn from expertly crafted essays covering diverse topics.";
    const keywords = "CSS essays, PMS essays, competitive exam preparation, essay writing, CSS past papers, PMS past papers";
    const image = "https://syedkazimali.info/img/hero/kazim.jpg"; 
    return (
        <ParentHOC authorizedIgnored={true}  pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
            <CssAndPms />
        </ParentHOC>
    );
};

export default Index;

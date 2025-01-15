import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"
import MyBlogs from "../../components/pages/my-blogs";

const index = () => {
    const pageTitle = "Blogs Page";
    const description = "Read what our students have to say about their experience with our coaching services.";
    const keywords = "blogs , articles";
    const image = theimage; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyBlogs/>
      </ParentHOC> 
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

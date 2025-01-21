import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"
import MyBlogs from "../../components/pages/my-blogs";

const index = () => {
    const pageTitle = "Blogs Page";
    const description = "Explore insightful blogs by Sir Kazim Ali, covering essay and precis teaching, and career growth strategies. Stay updated and inspired!";
    const keywords = "blogs, sir kazim blogs, syed kazim ali blogs, syed kazim ali articles, blogs list, articles";
    const image = theimage; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyBlogs/>
      </ParentHOC> 
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

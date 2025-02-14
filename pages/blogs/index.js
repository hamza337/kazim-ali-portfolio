import ParentHOC from "../../components/ParentHOC";
import MyBlogs from "../../components/pages/my-blogs";

const Index = () => {
    const pageTitle = "Blogs";
    const description = "Explore insightful blogs by Sir Kazim Ali, covering essay and precis teaching, and career growth strategies. Stay updated and inspired!";
    const keywords = "blogs, sir kazim blogs, syed kazim ali blogs, syed kazim ali articles, blogs list, articles";
    const image = 'https://syedkazimali.info/img/hero/kazim.jpg'; 

    return (
      <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
          <MyBlogs/>
      </ParentHOC> 
    );
};

export default Index;

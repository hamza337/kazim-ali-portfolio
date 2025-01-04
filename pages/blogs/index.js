import dynamic from "next/dynamic";
import ParentHOC from "../../components/ParentHOC";
import theimage from "../../public/img/hero/kazim.jpg"
import BlogCard from "../../components/blogContent/blogCard";
import { blogs } from '../../components/blogContent/blogs';

const index = () => {
  const pageTitle = "Student Review Page";
  const description = "Read what our students have to say about their experience with our coaching services.";
  const keywords = "student reviews, coaching, essay writing";
  const image = theimage; 

  return (
    <ParentHOC authorizedIgnored={true} pageTitle={pageTitle} description={description} keywords={keywords} image={image}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Blog Posts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </ParentHOC>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });



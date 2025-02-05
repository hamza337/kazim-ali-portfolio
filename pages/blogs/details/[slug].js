import dynamic from "next/dynamic";
import Detail from "../../../components/pages/my-blogs/details/[slug]";
import ParentHOC from "../../../components/ParentHOC";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBlogs } from "../../../redux/action/blogs";

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const review = useSelector((state) => state.review);
  const [metaData, setMetaData] = useState({
    pageTitle: "",
    description: "",
    keywords: "",
    image: null,
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    if (!review.allReviews.length) {
      dispatch(GetAllBlogs());
    } else if (slug) {
      const selectedBlog = review.allReviews.find(
        (item) => generateSlug(item.title) === slug
      );

      if (selectedBlog) {
        setMetaData({
          pageTitle: selectedBlog.metaTitle || selectedBlog.title,
          description: selectedBlog.metaDescription || selectedBlog.description,
          keywords: selectedBlog.metaKeywords || "blog, sir kazim blogs, css blogs, pms blogs, css and pms blogs, article, insights",
          image: `${baseUrl}${selectedBlog.blogImage.url}` || null,
        });
      }
    }
  }, [dispatch, slug]);

  return (
    <ParentHOC  authorizedIgnored={true} pageTitle={metaData.pageTitle} description={metaData.description} keywords={metaData.keywords} image={metaData.image}>
      <Detail />
    </ParentHOC>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailPage), { ssr: false });

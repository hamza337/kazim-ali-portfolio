import dynamic from "next/dynamic";
import Detail from "../../../components/pages/my-blogs/details/[slug]";
import ParentHOC from "../../../components/ParentHOC";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBlogs } from "../../../redux/action/blogs";
import theimage from "../../../public/img/hero/kazim.jpg"

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  const [metaData, setMetaData] = useState({
    pageTitle: "Loading...",
    description: "Loading...",
    keywords: "loading",
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
                pageTitle: selectedBlog.metaTitle,
                description: selectedBlog.metaDescription || "Blog details, Sir Kazim Blog",
                keywords: selectedBlog.metaKeywords || "blog, full blog, article, insights",
                image: theimage || null,
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

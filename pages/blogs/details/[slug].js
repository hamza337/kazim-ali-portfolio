// import dynamic from "next/dynamic";
// import Detail from "../../../components/pages/my-blogs/details/[slug]";
// import ParentHOC from "../../../components/ParentHOC";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllBlogs } from "../../../redux/action/blogs";

// const BlogDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const dispatch = useDispatch();
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//   const review = useSelector((state) => state.review);
//   const [metaData, setMetaData] = useState({
//     pageTitle: "",
//     description: "",
//     keywords: "",
//     image: null,
//   });

//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   useEffect(() => {
//     if (!review.allReviews.length) {
//       dispatch(GetAllBlogs());
//     } else if (slug) {
//       const selectedBlog = review.allReviews.find(
//         (item) => generateSlug(item.title) === slug
//       );

//       if (selectedBlog) {
//         setMetaData({
//           pageTitle: selectedBlog.metaTitle || selectedBlog.title,
//           description: selectedBlog.metaDescription || selectedBlog.description,
//           keywords: selectedBlog.metaKeywords || "blog, sir kazim blogs, css blogs, pms blogs, css and pms blogs, article, insights",
//           image: `${baseUrl}${selectedBlog.blogImage.url}` || null,
//         });
//       }
//     }
//   }, [dispatch, slug]);

//   return (
//     <ParentHOC  authorizedIgnored={true} pageTitle={metaData.pageTitle} description={metaData.description} keywords={metaData.keywords} image={metaData.image}>
//       <Detail />
//     </ParentHOC>
//   );
// };

// export default dynamic(() => Promise.resolve(BlogDetailPage), { ssr: false });

// ================================================================================================================================

// import dynamic from "next/dynamic";
// import Detail from "../../../components/pages/my-blogs/details/[slug]";
// import ParentHOC from "../../../components/ParentHOC";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllBlogs } from "../../../redux/action/blogs";

// const BlogDetailPage = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const dispatch = useDispatch();
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//   const review = useSelector((state) => state.review);
//   const [metaData, setMetaData] = useState(null);

//   const generateSlug = (title) => {
//     return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
//   };

//   useEffect(() => {
//     if (!review.allReviews.length) {
//       dispatch(GetAllBlogs());
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (slug && review.allReviews.length) {
//       const selectedBlog = review.allReviews.find(
//         (item) => generateSlug(item.title) === slug
//       );

//       if (selectedBlog) {
//         setMetaData({
//           pageTitle: selectedBlog.metaTitle || selectedBlog.title,
//           description: selectedBlog.metaDescription || selectedBlog.description,
//           keywords: selectedBlog.metaKeywords || "blog, sir kazim blogs, css blogs, pms blogs, article, insights",
//           image: `${baseUrl}${selectedBlog.blogImage.url}`,
//         });
//       }
//     }
//   }, [slug, review.allReviews]);

//   if (!metaData) return <div>Loading...</div>; // Avoid rendering ParentHOC before metadata is ready

//   return (
//     <ParentHOC 
//       authorizedIgnored={true} 
//       pageTitle={metaData.pageTitle} 
//       description={metaData.description} 
//       keywords={metaData.keywords} 
//       image={metaData.image}
//     >
//       <Detail />
//     </ParentHOC>
//   );
// };

// export default dynamic(() => Promise.resolve(BlogDetailPage), { ssr: false });

// =============================================================================================================================

import ParentHOC from "../../../components/ParentHOC";
import Detail from "../../../components/pages/my-blogs/details/[slug]";
import { useRouter } from "next/router";
import { GetAllBlogs } from "../../../redux/action/blogs";
import { useDispatch } from "react-redux";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch blogs from API
  const res = await fetch(`${baseUrl}/api/blogs?populate=*`);
  const blogs = await res.json();

  console.log('first', blogs)

  // Find the blog by slug
  const selectedBlog = blogs.data.find((blog) => 
    blog.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") === slug
  );

  if (!selectedBlog) {
    return { notFound: true };
  }

  return {
    props: {
      metaData: {
        pageTitle: selectedBlog.metaTitle || selectedBlog.title,
        description: selectedBlog.metaDescription || selectedBlog.description,
        keywords: selectedBlog.metaKeywords || "blog, sir kazim blogs, css blogs, pms blogs",
        image: `${baseUrl}${selectedBlog.blogImage.url}`,
      },
      selectedBlog,
    },
  };
}

const BlogDetailPage = ({ metaData, selectedBlog }) => {
  const dispatch = useDispatch();

  return (
    <ParentHOC
      authorizedIgnored={true}
      pageTitle={metaData.pageTitle}
      description={metaData.description}
      keywords={metaData.keywords}
      image={metaData.image}
    >
      <Detail blog={selectedBlog} />
    </ParentHOC>
  );
};

export default BlogDetailPage;

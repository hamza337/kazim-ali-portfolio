// import dynamic from "next/dynamic";
// import Detail from "../../../components/pages/student-reviews/details/[slug]";
// import ParentHOC from "../../../components/ParentHOC";
// import theimage from "../../../public/img/hero/kazim.jpg"
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllReviews } from "../../../redux/action";


// const index = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL;
//   const dispatch = useDispatch();
//   const review = useSelector((state) => state.review);
//   const [metaData, setMetaData] = useState({
//     pageTitle: "",
//     description: "",
//     keywords: "",
//     image: theimage,
//   });

//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   useEffect(() => {
//     if (!review.allReviews.length) {
//       dispatch(GetAllReviews());
//     } else if (slug) {
//       const selectedCourse = review.allReviews.find(
//         (item) => generateSlug(item.title) === slug
//       );

//       if (selectedCourse) {
//         setMetaData({
//             pageTitle: selectedCourse.metaTitle || selectedCourse.title,
//             description: selectedCourse.metaDescription || selectedCourse.content.slice(0,200),
//             keywords: selectedCourse.metaKeywords || "sir kazim students remarks, sir kazim reviews, sir kazim ali reviews, sir kazim ali feedbacks",
//             image: `${baseUrl}${selectedCourse.coverImage.url}` || null,
//         });
//       }
//     }
//   }, [dispatch, slug]);
 
//     return (
//         <ParentHOC  authorizedIgnored={true} pageTitle={metaData.pageTitle} description={metaData.description} keywords={metaData.keywords} image={metaData.image}>
//             <Detail />
//         </ParentHOC>
//     );
// };

// export default dynamic(() => Promise.resolve(index), { ssr: false });

// ==============================================================================

import ParentHOC from "../../../components/ParentHOC";
import Detail from "../../../components/pages/student-reviews/details/[slug]";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch blogs from API
  const res = await fetch(`${baseUrl}/api/student-reviews?populate=*&sort[0]=createdAt:asc&pagination[limit]=100`);
  const reviews = await res.json();

  console.log('first', reviews)

  // Find the blog by slug
  const selectedReview = reviews.data.find((review) => 
    review.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") === slug
  );

  if (!selectedReview) {
    return { notFound: true };
  }

  return {
    props: {
      metaData: {
        pageTitle: selectedReview.metaTitle || selectedReview.title,
        description: selectedReview.metaDescription || selectedReview.content.slice(0,200),
        keywords: selectedReview.metaKeywords || "sir kazim students remarks, sir kazim reviews, sir kazim ali reviews, sir kazim ali feedbacks",
        image: `${baseUrl}${selectedReview.coverImage.url}`,
      },
      selectedReview,
    },
  };
}

const index = ({ metaData, selectedReview }) => {

  return (
    <ParentHOC
      authorizedIgnored={true}
      pageTitle={metaData.pageTitle}
      description={metaData.description}
      keywords={metaData.keywords}
      image={metaData.image}
    >
      <Detail review={selectedReview} />
    </ParentHOC>
  );
};

export default index;

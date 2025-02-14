// import dynamic from "next/dynamic";
// import ParentHOC from "../../../components/ParentHOC";
// import theimage from "../../../public/img/hero/kazim.jpg"
// import Detail from "../../../components/pages/my-national-courses/details/[slug]";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllNationalCourses } from "../../../redux/action/nationalCourses";


// const index = () => {
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
//       dispatch(GetAllNationalCourses());
//     } else if (slug) {
//       const selectedCourse = review.allReviews.find(
//         (item) => generateSlug(item.title) === slug
//       );

//       if (selectedCourse) {
//             setMetaData({
//                 pageTitle: selectedCourse.metaTitle || selectedCourse.title,
//                 description: selectedCourse.metaDescription || selectedCourse.courseOutline.slice(0, 250),
//                 keywords: selectedCourse.metaKeywords || "national courses, sir kazim national courses",
//                 image: `${baseUrl}${selectedCourse.coverImage.url}` || null,
//             });
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

import ParentHOC from "../../../components/ParentHOC";
import Detail from "../../../components/pages/my-national-courses/details/[slug]";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch blogs from API
  const res = await fetch(`${baseUrl}/api/courses?populate=*&sort[0]=createdAt:desc&pagination[limit]=100`);
  const courses = await res.json();

  // Find the blog by slug
  const selectedCourse = courses.data.find((course) => 
   course.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") === slug
  );

  if (!selectedCourse) {
    return { notFound: true };
  }

  return {
    props: {
      metaData: {
        pageTitle: selectedCourse.metaTitle || selectedCourse.title,
        description: selectedCourse.metaDescription || selectedCourse.courseOutline.slice(0, 200),
        keywords: selectedCourse.metaKeywords || "national courses, sir kazim national courses",
        image: `${baseUrl}${selectedCourse.coverImage.url}`,
      },
      selectedCourse,
    },
  };
}

const index = ({ metaData, selectedCourse }) => {

  return (
    <ParentHOC
      authorizedIgnored={true}
      pageTitle={metaData.pageTitle}
      description={metaData.description}
      keywords={metaData.keywords}
      image={metaData.image}
    >
      <Detail course={selectedCourse} />
    </ParentHOC>
  );
};

export default index;

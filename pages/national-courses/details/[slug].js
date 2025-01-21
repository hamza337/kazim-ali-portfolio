import dynamic from "next/dynamic";
import ParentHOC from "../../../components/ParentHOC";
import theimage from "../../../public/img/hero/kazim.jpg"
import Detail from "../../../components/pages/my-national-courses/details/[slug]";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllNationalCourses } from "../../../redux/action/nationalCourses";


const index = () => {
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
      dispatch(GetAllNationalCourses());
    } else if (slug) {
      const selectedCourse = review.allReviews.find(
        (item) => generateSlug(item.title) === slug
      );

      if (selectedCourse) {
            setMetaData({
                pageTitle: selectedCourse.metaTitle,
                description: selectedCourse.metaDescription || "Blog details, Sir Kazim Blog",
                keywords: selectedCourse.metaKeywords || "blog, full blog, article, insights",
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

export default dynamic(() => Promise.resolve(index), { ssr: false });

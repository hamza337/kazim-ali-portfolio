import dynamic from "next/dynamic";
import Detail from "../../../components/pages/student-reviews/details/[slug]";
import ParentHOC from "../../../components/ParentHOC";
import theimage from "../../../public/img/hero/kazim.jpg"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllReviews } from "../../../redux/action";


const index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  const [metaData, setMetaData] = useState({
    pageTitle: "",
    description: "",
    keywords: "",
    image: theimage,
  });

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    if (!review.allReviews.length) {
      dispatch(GetAllReviews());
    } else if (slug) {
      const selectedCourse = review.allReviews.find(
        (item) => generateSlug(item.title) === slug
      );

      if (selectedCourse) {
        setMetaData({
            pageTitle: selectedCourse.metaTitle || selectedCourse.title,
            description: selectedCourse.metaDescription || selectedCourse.content.slice(0,200),
            keywords: selectedCourse.metaKeywords || "sir kazim students remarks, sir kazim reviews, sir kazim ali reviews, sir kazim ali feedbacks",
            image: `${baseUrl}${selectedCourse.coverImage.url}` || null,
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

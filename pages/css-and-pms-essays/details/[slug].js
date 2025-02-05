import dynamic from "next/dynamic";
import ParentHOC from "../../../components/ParentHOC";
import CSSAndPMSDetail from "../../../components/pages/CSS&PMS/details/[slug]";
import theimage from "../../../public/img/hero/kazim.jpg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCSS } from "../../../redux/action";

const index = () => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { slug } = router.query;
  const dispatch = useDispatch();
  const cssAndPms = useSelector((state) => state.cssAndPms);
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
    if (!cssAndPms.allCssAndPms.length) {
      dispatch(GetAllCSS());
    } else if (slug) {
      const selectedCourse = cssAndPms.allCssAndPms.find(
        (item) => generateSlug(item.title) === slug
      );

      if (selectedCourse) {
        setMetaData({
          pageTitle: selectedCourse.metaTitle || selectedCourse.title,
          description: selectedCourse.metaDescription || selectedCourse.description,
          keywords: selectedCourse.metaKeywords || "Css and Pms Essay, Sir Kazim Essays, Sir Kazim Css writings",
          image: `${baseUrl}${selectedCourse.coverImage.url}` || null,
        });
      }
    }
  }, [dispatch, slug]);

    return (
        <ParentHOC authorizedIgnored={true} pageTitle={metaData.pageTitle} description={metaData.description} keywords={metaData.keywords} image={metaData.image}>
          <CSSAndPMSDetail />
        </ParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

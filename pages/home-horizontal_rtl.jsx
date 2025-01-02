import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeHorizontalRtl from "../components/pages/home-horizontal_rtl";

const index = () => {
  return (
    <>
      <Seo pageTitle="SKA RTL" />
      <HomeHorizontalRtl />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

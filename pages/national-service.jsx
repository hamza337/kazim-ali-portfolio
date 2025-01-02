import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Login from "../components/pages/login";
import NationalService from "../components/pages/national-service/[slug]";

const index = () => {
    return (
        <>
            <Seo pageTitle="National Services" />
            <NationalService />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

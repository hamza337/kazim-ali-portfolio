import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import InternationalService from "../components/pages/international-service/[slug]";


const index = () => {
    return (
        <>
            <Seo pageTitle="International Service" />
            <InternationalService />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

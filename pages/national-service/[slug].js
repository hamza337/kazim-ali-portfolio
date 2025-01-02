import dynamic from "next/dynamic";
import NationalService from "../../components/pages/national-service/[slug]";
import ParentHOC from "../../components/ParentHOC";


const index = () => {
    return (
        <ParentHOC pageTitle="National Service"
        authorizedIgnored={true}  >
            <NationalService />
        </ParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

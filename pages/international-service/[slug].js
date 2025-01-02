import dynamic from "next/dynamic";
import InternationalService from "../../components/pages/international-service/[slug]";
import ParentHOC from "../../components/ParentHOC";


const index = () => {
    return (
        <ParentHOC pageTitle="International Service"
        authorizedIgnored={true}  >
            <InternationalService />
        </ParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

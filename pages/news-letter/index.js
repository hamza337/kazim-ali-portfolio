import dynamic from "next/dynamic";
import { AdminParentHOC } from "../../components/ParentHOC";
import NewsLetter from "../../components/pages/news-letter";


const index = () => {
    return (
        <AdminParentHOC pageTitle={"Newsletter"} >
            <NewsLetter />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

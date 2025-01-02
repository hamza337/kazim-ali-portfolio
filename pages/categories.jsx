import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Categories from "../components/pages/categories";
import { AdminParentHOC } from "../components/ParentHOC";

const index = () => {
    return (
        <>
             <AdminParentHOC pageTitle={"Categories"} >
            <Categories />
            </AdminParentHOC>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

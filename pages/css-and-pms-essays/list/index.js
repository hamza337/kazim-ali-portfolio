import dynamic from "next/dynamic";
import { AdminParentHOC } from "../../../components/ParentHOC";
import AllCSSAndPMS from "../../../components/pages/CSS&PMS/list/cssAdminList"

const index = () => {
    return (
        <AdminParentHOC pageTitle={"CSS And PMS"} >
            <AllCSSAndPMS />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

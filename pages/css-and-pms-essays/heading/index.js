import dynamic from "next/dynamic";

import { AdminParentHOC } from "../../../components/ParentHOC";
import Heading from "../../../components/pages/CSS&PMS/heading";


const index = () => {

    return (
        <AdminParentHOC pageTitle={"Edit PMS Heading"} >
            <Heading />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

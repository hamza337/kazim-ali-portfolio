import dynamic from "next/dynamic";
import Courses from "../../components/pages/courses";
import { AdminParentHOC } from "../../components/ParentHOC";

const index = () => {
    return (
        <AdminParentHOC pageTitle="Courses" >
            <Courses />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

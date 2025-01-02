import dynamic from "next/dynamic";
import StudentReviews from "../../components/pages/student-reviews/index";
import { AdminParentHOC } from "../../components/ParentHOC";

const index = () => {
    return (
        <AdminParentHOC pageTitle="Student Reviews Admin" >
            <StudentReviews />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

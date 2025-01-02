import dynamic from "next/dynamic";
import AddStudentReview from "../../components/pages/student-reviews/[id]";
import { AdminParentHOC } from "../../components/ParentHOC";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <AdminParentHOC pageTitle={id === 'new' ? "Add Student Review" : "Edit Student Review"} >
            <AddStudentReview />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

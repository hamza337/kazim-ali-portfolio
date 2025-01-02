import dynamic from "next/dynamic";
import AddCourse from "../../components/pages/courses/[id]";
import { AdminParentHOC } from "../../components/ParentHOC";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <AdminParentHOC pageTitle={id === 'new' ? "Add Course" : "Edit Course"} >
            <AddCourse />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

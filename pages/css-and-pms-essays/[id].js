import dynamic from "next/dynamic";
import AddCSSAndPMS from "../../components/pages/CSS&PMS/[id]";
import { AdminParentHOC } from "../../components/ParentHOC";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <AdminParentHOC pageTitle={id === 'new' ? "Add CSS And PMS" : "Edit CSS And PMS"} >
            <AddCSSAndPMS />
        </AdminParentHOC>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

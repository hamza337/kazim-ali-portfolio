import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Login from "../components/pages/login";

const index = () => {
    return (
        <>
            <Seo pageTitle="Login" />
            <Login />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

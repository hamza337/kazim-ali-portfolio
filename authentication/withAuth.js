import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./ProvideAuth";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const authUser = useAuth()
        const isAuthenticated = authUser; // Example: You can replace this with your own auth logic

        useEffect(() => {
            if (!isAuthenticated) {
                router.push("/login");
            }
            
        }, [isAuthenticated]);

        if (!isAuthenticated) {
            return null; // Render nothing or a loading spinner while checking auth
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
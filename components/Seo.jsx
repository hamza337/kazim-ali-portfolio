import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Seo = ({ pageTitle, font, description, keywords, image }) => {
    const router = useRouter();
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set the current URL using window.location
            const fullUrl = `${window.location.origin}${router.asPath}`;
            setCurrentUrl(fullUrl);
        }
    }, [router.asPath]);


    return (
        <>
            <Head>
                <title>
                    {pageTitle &&
                        `${pageTitle} || Writing Coach – Grammarian – Essay & Precis Teacher`}
                </title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="keywords" content={keywords || "default, keywords"} />
                <meta name="description" content={description || "Default description for the page."} />
                <meta name="XODEAC" content="Xodeac Tech business@xodeactech.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                {font && <link href={font} rel="stylesheet" />}
                <link rel="icon" href="favicon.ico" />
            </Head>
        </>
    );
};

export default Seo;
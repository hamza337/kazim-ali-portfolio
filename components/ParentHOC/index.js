import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import HeaderHorizontal from "../header/HeaderHorizontal";
import Seo from "../Seo";
import HeaderMobile from "../header/HeaderMobile";
import ContactModule from "../pages/Contact";
import { useAuth } from '../../authentication/ProvideAuth'
import { SideBar } from "../sidebar";
import "react-toastify/dist/ReactToastify.css";

const ParentHOC = ({ children, ...rest }) => {
    const [isDark, setIsDark] = useState(() => {
        // Get theme from localStorage or fallback to false (light mode)
        return localStorage.getItem("theme-color") === "theme-dark";
    });
    const authorized = useAuth()
    useEffect(() => {
        document.querySelector("body").classList.remove("rtl");
    }, []);

    const handleLabelClick = () => {
        if (isDark) {
            console.log('dark')
            localStorage.setItem("theme-color", "theme-light");
            document.querySelector("body").classList.add("theme-light");
            document.querySelector("body").classList.remove("theme-dark");
            setIsDark(false);
        } else {
            console.log('light')
            localStorage.setItem("theme-color", "theme-dark");
            document.querySelector("body").classList.add("theme-dark");
            document.querySelector("body").classList.remove("theme-light");
            setIsDark(true);
        }
    };
    return (
        <div>
            <Seo pageTitle={rest.pageTitle} description={rest.description}  keywords={rest.keywords} image={rest.image} />
            <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
                {/* Start Dark & Light Mode Swicher  */}
                <label
                    className={`theme-switcher-label horizontal d-flex  ${isDark ? "active" : ""
                        }`}
                >
                    <input
                        type="checkbox"
                        onClick={handleLabelClick}
                        className="theme-switcher"
                    />
                    <div className="switch-handle">
                        <i className="light-text" title="Switch to Dark">
                            <FaMoon />
                        </i>
                        <i className="dark-text" title="Switch to Light">
                            <FaSun />
                        </i>
                    </div>
                </label>
                {(!authorized || rest.authorizedIgnored) && <header className="header-area">
                    <div className="header-inner">
                        <HeaderMobile />
                    </div>
                </header>}
                {(!authorized || rest.authorizedIgnored) && <HeaderHorizontal />}
                {children}
                {(!authorized || rest.authorizedIgnored) && <ContactModule />}
            </div>

        </div>
    );
};

export const AdminParentHOC = ({ children, ...rest }) => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        document.querySelector("body").classList.remove("rtl");
    }, []);

    const handleLabelClick = () => {
        if (isDark) {
            localStorage.setItem("theme-color", "theme-light");
            document.querySelector("body").classList.add("theme-light");
            document.querySelector("body").classList.remove("theme-dark");
            setIsDark(false);
        } else {
            localStorage.setItem("theme-color", "theme-dark");
            document.querySelector("body").classList.add("theme-dark");
            document.querySelector("body").classList.remove("theme-light");
            setIsDark(true);
        }
    };
    return (
        <div>
            <Seo pageTitle={rest.pageTitle} />
            <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
                {/* Start Dark & Light Mode Swicher  */}
                <label
                    className={`theme-switcher-label d-none horizontal d-flex  ${isDark ? "active" : ""
                        }`}
                >
                    <input
                        type="checkbox"
                        onClick={handleLabelClick}
                        className="theme-switcher"
                    />
                    <div className="switch-handle">
                        <i className="light-text" title="Switch to Dark">
                            <FaMoon />
                        </i>
                        <i className="dark-text" title="Switch to Light">
                            <FaSun />
                        </i>
                    </div>
                </label>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <SideBar />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentHOC;

ParentHOC.defaultProps = {
    authorizedIgnored: false

}
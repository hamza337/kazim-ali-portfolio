import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCSS } from "../../../redux/action";
import CSSAndPMSList from "./CSSAndPMSList";

const CssAndPms = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllCSS());
    }, [dispatch]);

    const cssAndPms = useSelector((state) => state.cssAndPms);

    return (
        <div id='css-and-pms'>
            <div className="card overflow-hidden inner-page-card">
                <div className={`layout-container`}>
                    <div className="layout-wrapper layout-content-navbar">
                        <div className="layout-page">
                            <div className="edina_tm_news" id="studentreviews">
                                <div className="container">
                                    <div className="about_title">
                                        <h3 >CSS & PMS Essays</h3>
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <p>
                  Find a comprehensive collection of CSS essays, PMS essays, CSS solved essays, and PMS solved essays at SyedKazimAli.info. Have free access to high-quality, expert-crafted essays by Sir Kazim’s successful students to enhance your CSS and PMS exam preparation.
                                            </p>
                                        </div>
                                    </div>
                                    <CSSAndPMSList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssAndPms;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCSS, GetAllLOOKUPS } from "../../../redux/action";
import CSSAndPMSList from "./CSSAndPMSList";
import DOMPurify from "dompurify";

const CssAndPms = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllCSS());
        dispatch(GetAllLOOKUPS())
    }, [dispatch]);

    const cssAndPms = useSelector((state) => state.cssAndPms);

    const sanitizedDescription = DOMPurify.sanitize(cssAndPms?.getLookUps?.value || "");
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
                                            <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizedDescription,
                    }}
                  />
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
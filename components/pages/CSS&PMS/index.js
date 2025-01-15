import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCSS } from "../../../redux/action";
import CSSAndPMSList from "./CSSAndPMSList";
import DOMPurify from "dompurify";

const CssAndPms = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllCSS());
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
                  Stay ahead in your preparation with Sir Kazim’s enriching blogs, designed to empower you with in-depth knowledge and practical strategies for CSS and PMS exams. Explore expert insights on mastering competitive exam techniques, honing professional English writing skills, and navigating your career path with confidence. Tailored to inspire and guide aspiring students, Sir Kazim’s regular posts provide the tools you need to excel academically and professionally. Step into a world of learning and inspiration with Sir Kazim, and unlock your potential for success today.
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
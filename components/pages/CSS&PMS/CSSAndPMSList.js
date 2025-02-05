import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { removeTags, truncateString } from "../../../assets";
import DOMPurify from "dompurify";
import Image from "next/image";

const CSSAndPMSList = () => {
    const router = useRouter();
    const cssAndPms = useSelector((state) => state.cssAndPms);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
      // Generate slug dynamically from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

    const isLoading = !cssAndPms.allCssAndPms || cssAndPms.allCssAndPms.length === 0;

  
    const filteredReviews = cssAndPms.allCssAndPms ? cssAndPms.allCssAndPms : [];

    if (isLoading) {
        return <p className="text-center">Loading List...</p>;
    }
    return (
        <div className="news_inner my_carousel review_list pms_list">
            <ul>
                {filteredReviews?.length > 0 &&
                    filteredReviews.map((item) => {
                        const sanitizedDescription = DOMPurify.sanitize(item?.description || "");
                        const slug = generateSlug(item.title); // Generate slug from title
                        return (
                            <li
                                key={item.id}
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                data-aos-delay="150">
                                <div className="card list_inner">
                                    <div 
                                        className="cover-container"
                                        onClick={() => {
                                        router.push(`/css-and-pms-essays/details/${slug}`);
                                        }}
                                    >
                                        <Image
                                        src={`${baseUrl}${item?.coverImage?.url}`}
                                        alt={'National Course Image'}
                                        layout="responsive"
                                        width={1170}
                                        height={610}
                                        className="cover-image"
                                        priority
                                        />
                                    </div>
                                    <div className="title-description">
                                        <div className="news_details">

                                            <h3
                                                className="title"
                                                onClick={() => {
                                                    router.push(`/css-and-pms-essays/details/${slug}`);
                                                }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="descriptions">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: truncateString(item.description?.slice(0,100))
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default CSSAndPMSList;
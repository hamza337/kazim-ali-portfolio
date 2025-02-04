import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

const BlogList = () => {
  const router = useRouter();
  const blogs = useSelector((state) => state.review);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    // Generate slug dynamically from the title
    const generateSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    };

  // Check if reviews are loading
  const isLoading = !blogs.allReviews || blogs.allReviews.length === 0;

  // Filter published reviews and sort by creation date (newest first)
  const filteredBlogs = blogs.allReviews ? blogs.allReviews : [];

  if (isLoading) {
    return <p className="text-center">Loading reviews...</p>;
  }

  return (
    <div className="news_inner my_carousel review_list">
      <ul>
        {filteredBlogs.length > 0 &&
          filteredBlogs.map((item) => {
            const formattedDate = new Date(item.postedOn).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });
            const slug = generateSlug(item.title);

            return (
              <li
                key={item.id}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div 
                    className="cover-container"
                    onClick={() => {
                      router.push(`/blogs/details/${slug}`);
                    }}
                  >
                    <Image
                      src={`${baseUrl}${item?.blogImage?.url}`}
                      alt={'blog Image'}
                      layout="responsive"
                      width={1170}
                      height={610}
                      className="cover-image"
                      priority
                    />
                  </div>

                  <div className="news_details">
                    <span>
                      {formattedDate}{" "}
                    </span>
                    <h3
                      className="title"
                      onClick={() => {
                        router.push(`/blogs/details/${slug}`);
                      }}
                    >
                      {item.title}
                    </h3>
                    <span>
                        {item.description ? item.description : ""}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BlogList;
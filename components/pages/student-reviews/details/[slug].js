import Social from "../../../Social";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetAllReviews } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";
import { Loader } from "../../../../assets";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

export default function Detail({review}) {
    const router = useRouter();
    // const { slug } = router.query; // Slug from the URL
    // const dispatch = useDispatch();
    // const review = useSelector((state) => state.review);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!review) {
        return (
          <div className="mb-4 mt-4 py-4 text-center align-items-center justify-center">
            <Loader />
          </div>
        );
    }

    // const onError = (errorMessage) => {
    //     toast.error(errorMessage, {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     });
    //     document.getElementB
    // }



  // Function to generate slug dynamically
//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   useEffect(() => {
//     dispatch(GetAllReviews(onError)); // Fetch all services
//   }, []);

   // Find the service based on the slug
//    const selectedReviews = review.allReviews.find(
//     (item) => generateSlug(item.title) === slug
//   );

//   if (!selectedReviews) {
//     return <div className='mb-4 mt-4 py-4 text-center align-items-center justify-center'>    <Loader /> </div>;
//   }

    return (
        <div className="edina_tm_modalbox studentreviews">
            {/* {
                review.loading === true
                    ?
                    <Loader />
                    : */}
                    <div className="container">
                        <div className="box_inner">
                            <div className="description_wrap scrollable">
                                <div className="cover-container">
                                    <Image
                                        src={`${baseUrl}${review?.coverImage?.url}`}
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
                                        {review?.postedDate}{" "}
                                        <a href="#">
                                            {review?.reviewerName
                                                ? review?.reviewerName
                                                : ""}
                                        </a>
                                    </span>
                                    <h3 className="title">{review?.title}</h3>
                                </div>
                                {/* End details */}

                                <div className="main_content">
                                    <div className="descriptions">
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{review?.content}</ReactMarkdown>
                                    </div>
                                    {/* End description */}

                                    <div className="news_share ">
                                        <span>Share:</span>
                                        <Social />
                                    </div>
                                    {/* End news share */}
                                </div>
                            </div>
                        </div>
                        {/* End box inner */}
                    </div>
            {/* } */}

        </div>
    );
}
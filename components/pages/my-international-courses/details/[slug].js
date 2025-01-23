import Social from "../../../Social";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "../../../../assets";
import ReactMarkdown from "react-markdown";
import { GetAllInterationalCourses } from "../../../../redux/action/internationalCourses";


export default function Detail() {
    const router = useRouter();
    const { slug } = router.query; // Slug from the URL
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const onError = (errorMessage) => {
        toast.error(errorMessage, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        document.getElementB
    }



  // Function to generate slug dynamically
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    dispatch(GetAllInterationalCourses(onError)); // Fetch all services
  }, []);

   // Find the service based on the slug
   const selectedReviews = review.allReviews.find(
    (item) => generateSlug(item.title) === slug
  );

  if (!selectedReviews) {
    return <div className='mb-4 mt-4 py-4 text-center align-items-center justify-center'>    <Loader /> </div>;
  }

    return (
        <div className="edina_tm_modalbox studentreviews">
            {
                review.loading === true
                    ?
                    <Loader />
                    :
                    <div className="container">
                        <div className="box_inner">
                            <div className="description_wrap scrollable">
                                <div className="image">
                                    <div
                                        className="main"
                                        style={{
                                            backgroundImage: `url(${baseUrl}${selectedReviews?.courseImage?.url})`,
                                        }}
                                    ></div>
                                </div>
                                <div className="news_details">
                                    <h3 className="title">{selectedReviews?.title}</h3>
                                </div>
                                {/* End details */}

                                <div className="main_content">
                                    <div className="descriptions">
                                        <ReactMarkdown>{selectedReviews?.courseOutline}</ReactMarkdown>
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
            }

        </div>
    );
}
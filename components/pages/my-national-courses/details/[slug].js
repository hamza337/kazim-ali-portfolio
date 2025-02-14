import Social from "../../../Social";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "../../../../assets";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { GetAllNationalCourses } from "../../../../redux/action/nationalCourses";
import Image from "next/image";

export default function Detail({course}) {
//     const router = useRouter();
//     const { slug } = router.query; // Slug from the URL
//     const dispatch = useDispatch();
//     const review = useSelector((state) => state.review);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

//     const onError = (errorMessage) => {
//         toast.error(errorMessage, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         document.getElementB
//     }

//   // Function to generate slug dynamically
//   const generateSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/ /g, "-")
//       .replace(/[^\w-]+/g, "");
//   };

//   useEffect(() => {
//     dispatch(GetAllNationalCourses(onError)); // Fetch all services
//   }, []);

//    // Find the service based on the slug
//    const selectedReviews = review.allReviews.find(
//     (item) => generateSlug(item.title) === slug
//   );

  if (!course) {
    return <div className='mb-4 mt-4 py-4 text-center align-items-center justify-center'> <Loader /> </div>;
  }

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
                                        src={`${baseUrl}${course?.coverImage?.url}`}
                                        alt={'blog Image'}
                                        layout="responsive"
                                        width={1170}
                                        height={610}
                                        className="cover-image"
                                        priority
                                    />
                                </div>
                                <div className="news_details">
                                    <h3 className="title">{course?.title}</h3>
                                </div>
                                {/* End details */}
                                <div className="course-info-style">
                                    <ul>
                                        <div>
                                        <li>
                                            <h6>Instructor</h6>
                                            <span>{course?.instructor}</span>
                                        </li>
                                        <li>
                                            <h6>Course Fee</h6>
                                            <span>{course?.courseFee}</span>
                                        </li>
                                        <li>
                                            <h6>Duration</h6>
                                            <span>{course?.duration}</span>
                                        </li>
                                        </div>
                                        <div>
                                        <li>
                                            <h6>Delivery Method</h6>
                                            <span>{course?.deliveryMethod}</span>
                                        </li>
                                        <li>
                                            <h6>Class Size</h6>
                                            <span>{course?.classSize}</span>
                                        </li>
                                        <li>
                                            <h6>One-on-One Coaching</h6>
                                            <span>{course?.oneOnOneCoaching}</span>
                                        </li>
                                        </div>
                                        <div>
                                        <li>
                                            <h6>Lectures a Week</h6>
                                            <span>{course?.lecturesPerWeek}</span>
                                        </li>
                                        <li>
                                            <h6>Lecture Length</h6>
                                            <span>{course?.lecturesLength}</span>
                                        </li>
                                        <li>
                                            <h6>Course Availiblity</h6>
                                            <span>{course?.courseAvailability}</span>
                                        </li>
                                        </div>
                                    </ul>

                                </div>

                                <div className="main_content">
                                    <div className="descriptions">
                                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{course?.courseOutline}</ReactMarkdown>
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
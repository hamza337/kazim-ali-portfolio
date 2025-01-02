import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GetAllServices } from "../../../redux/action"; // Fetch all services
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";
import { Loader } from "../../../assets";

const NationalService = () => {
  const router = useRouter();
  const { slug } = router.query; // Slug from the URL
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);

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
  };

  // Function to generate slug dynamically
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    dispatch(GetAllServices(onError)); // Fetch all services
  }, []);

//   console.log('Slug from URL:', slug); // Check the slug from the URL
// console.log('All Services:', service.allServices); // Check all fetched services

  // Find the service based on the slug
  const selectedService = service.allServices.find(
    (item) => generateSlug(item.title) === slug
  );

  if (!selectedService) {
    return <div className='mb-4 mt-4 py-4 text-center align-items-center justify-center'> <Loader /> </div>;
  }

  const formattedDate = new Date(selectedService?.createDateTime).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const sanitizedDescription = DOMPurify.sanitize(selectedService?.description || "");
  const sanitizedContent = DOMPurify.sanitize(selectedService?.content || "");

  return (
    <div className='container'>
      <div className="edina_tm_modalbox">
        <div className="box_inner">
          <div className="description_wrap ">
            <div className="popup_informations">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${selectedService?.featuredImage})`,
                  }}
                ></div>
              </div>

              <div className="description">
                <h3>{selectedService?.title}</h3>
                <div className='lil-description'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizedDescription,
                    }}
                  />
                </div>

                <div className='supportive-box'>
                  <ul>
                    <li>
                      <h5>Course Availability</h5>
                      <span>{selectedService?.courseAvailability}</span>
                    </li>
                    <li>
                      <h5>Course Modality</h5>
                      <span>{selectedService?.courseModality}</span>
                    </li>
                    <li>
                      <h5>Course Fee</h5>
                      <span>Rs.{selectedService?.courseFee}</span>
                    </li>
                  </ul>
                </div>
                <div className='lil-content'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizedContent,
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalService;
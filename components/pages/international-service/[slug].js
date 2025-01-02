import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GetAllServices } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";

const InternationalService = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);
  
  // State for loading
  const [loading, setLoading] = useState(true);

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
    setLoading(false); // Stop loading on error
  };

  // Function to generate slug dynamically
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    setLoading(true); // Start loading when component mounts or slug changes
    dispatch(GetAllServices(onError)); // Fetch all services
  }, [dispatch]);

  // Check if services are fetched
  useEffect(() => {
    if (service.allServices.length > 0) {
      setLoading(false); // Stop loading when services are fetched
    }
  }, [service.allServices]);

  const selectedService = slug ? service.allServices.find(
    (item) => generateSlug(item.title) === slug
  ) : null;

  // Loading state
  if (loading) {
    return <div className='text-center mt-4'>Loading...</div>; // Show loading text or spinner
  }

  // Service not found state
  if (!selectedService) {
    return <div className='mb-4 mt-4 py-4 text-center'>Service not found</div>;
  }

  const sanitizedDescription = DOMPurify.sanitize(selectedService.description || "");
  const sanitizedContent = DOMPurify.sanitize(selectedService.content || "");
  
  return (
    <div className='container'>
      <div className="edina_tm_modalbox">
        <div className="box_inner">
          <div className="description_wrap">
            <div className="popup_informations">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${selectedService.featuredImage})`,
                  }}
                ></div>
              </div>
              {/* End big image */}

              <div className="description">
                <h3>{selectedService.title}</h3>
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
                      <span>{selectedService.courseAvailability}</span>
                    </li>
                    <li>
                      <h5>Course Modality</h5>
                      <span>{selectedService.courseModality}</span>
                    </li>
                    <li>
                      <h5>Course Fee</h5>
                      <span>${selectedService.courseFee}</span>
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

export default InternationalService;
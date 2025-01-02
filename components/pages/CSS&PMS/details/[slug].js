import Social from "../../../Social";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GetAllCSS } from "../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";
import { Loader } from "../../../../assets";
import Image from "next/image";

export default function CSSAndPMSDetail() {
  const router = useRouter();
  const { slug } = router.query; // Slug from the URL
  const dispatch = useDispatch();
  const cssAndPms = useSelector((state) => state.cssAndPms);

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
    dispatch(GetAllCSS(onError)); // Fetch all services
  }, [dispatch]);

  // Check if the slug is defined
  if (!slug) {
    return <div className='mb-4 mt-4 py-4 text-center'>Loading...</div>; // Wait for slug
  }

  // Check if data is loading
  if (cssAndPms.loading) {
    return <Loader />; // Show loader while data is being fetched
  }


  // Find the service based on the slug
  const selectedCSSPMS = cssAndPms.allCssAndPms.find(
    (item) => generateSlug(item.title) === slug
  );

  // If no service is found after loading, show "Service not found"
  if (!selectedCSSPMS) {
    return <div className='mb-4 mt-4 py-4 text-center'><Loader /></div>;
  }

  const sanitizedDescription = DOMPurify.sanitize(selectedCSSPMS?.description || "");
  const sanitizedContent = DOMPurify.sanitize(selectedCSSPMS?.content || "");

  return (
    <div id="css-pms-details">
      <div className="edina_tm_modalbox">
        <div className="container">
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${selectedCSSPMS?.featuredImage})`,
                  }}
                ></div>
              </div>
              <div className="news_details paddingTop">
                <h3 className="title">{selectedCSSPMS?.title}</h3>
              </div>
              <CPFSection />
              <div className="main_content paddingTop">
                <div className="heading-1">
                  <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                </div>
                <div className="paddingTop descriptions">
                  <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
                </div>
                <div className="cpf-button edina_tm_button">
                  <a
                    href={selectedCSSPMS?.buttonUrl}
                    className="color"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedCSSPMS?.buttonText}
                  </a>
                </div>
                <div className="news_share ">
                  <span>Share:</span>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CPFSection = () => {
  return (
    <div className="d-flex gap-2 cpf-section paddingTop">
      <Image width={49} height={49} src="/img/CPF.png" alt="thumb" />
      <div className="cssprepforum">
        <span className="cpf-title">Cssprepforum</span>
        <span className="cpf-description">
          The essay has been originally published on the CPF website.
        </span>
      </div>
    </div>
  );
}
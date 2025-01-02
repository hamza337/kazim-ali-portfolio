import { useEffect } from "react";
import { GetAllNEWSLETTER } from "../../redux/action";
import DOMPurify from "dompurify";
import Link from "next/link";
import Image from "next/image";
import { MdCancel, MdClose } from "react-icons/md";
const { Modal, FormGroup, FormControl } = require("react-bootstrap");
const { useSelector, useDispatch } = require("react-redux");
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";
const { Loader } = require("../../assets");

export function PopUp(props) {
    const newsLetter = useSelector((state) => state.newsLetter);

    return (
        <Modal
            show={props.show}
            size={"lg"}
            centered
            className="pop-up-modal news_modal_up"
            onHide={() => { props.setShow(false) }}
        >
            <Modal.Body>
                <PopUpBody {...props} />
            </Modal.Body>
        </Modal>
    );
}

function PopUpBody(props) {
    const newsLetter = useSelector((state) => state.newsLetter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllNEWSLETTER());
    }, [dispatch]);

    if (!newsLetter.allNewsLetter) return <p>Loading...</p>;

    const sanitizedDescription = DOMPurify.sanitize(newsLetter?.allNewsLetter?.description || "");

    return (
        <div id="popup-newsletter">
            <div className="box_inner">
                <div className="description_wrap scrollable d-flex">
                    <div className="image news_image">
                        <div
                            className="main pop-up-background-image"
                            style={{
                                backgroundImage: `url(${newsLetter?.allNewsLetter.featuredImage})`,
                            }}
                        ></div>
                    </div>
                    <div className="pop-up-title title-description">
                        {/* Close button */}
                        <MdClose
                            fontSize={36}
                            size={36}
                            className="modal-close-icon"
                            onClick={() => props.setShow(false)} 
                        />

                        {/* Logo */}
                        <div className="logo modal_logo">
                            <Link href="/">
                                <Image
                                    width={100}
                                    height={33}
                                    className="logo_light"
                                    src={logo}
                                    alt="brand"
                                />
                                <Image
                                    width={100}
                                    height={33}
                                    className="logo_dark"
                                    src={logo2}
                                    alt="brand"
                                />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="news_content">
                            <div className="news_details">
                                <h3 className="title mb-4">
                                    {newsLetter?.allNewsLetter.title}
                                </h3>
                            </div>
                            <div className="descriptions">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sanitizedDescription
                                    }}
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="cpf-button edina_tm_button">
                            <a
                                href={newsLetter?.allNewsLetter.buttonUrl}
                                className="color"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {newsLetter?.allNewsLetter.buttonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
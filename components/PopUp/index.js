import { useEffect, useState } from "react";
import { GetAllNEWSLETTER } from "../../redux/action";
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
const { Modal } = require("react-bootstrap");
const { useSelector, useDispatch } = require("react-redux");
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";
import axios from "axios";

export function PopUp({ show, setShow }) {
    const [data, setData] = useState([]);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const getPopupsData = async () => {
        try{
            const response = await axios.get(`${baseUrl}/api/popups?populate=*`);
            setData(response.data.data);            
        }catch(e){
            console.error("Error loading popups");
        }
    }

    useEffect(() => {
        getPopupsData();
    },[])

    const randomIndex = (length) => { return Math.floor(Math.random() * length)}

    const newsLetter = useSelector((state) => state.newsLetter);

    return (
        <Modal
            show={show}
            size={"lg"}
            centered
            className="pop-up-modal news_modal_up"
            onHide={() => setShow(false) }
        >
            <Modal.Body>
                <PopUpBody popup={data[randomIndex(data.length)]} setShow={setShow} />
            </Modal.Body>
        </Modal>
    );
}

function PopUpBody({ popup, setShow }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const newsLetter = useSelector((state) => state.newsLetter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllNEWSLETTER());
    }, [dispatch]);

    const getARandomNumber = (length) => {
        return Math.floor(Math.random() * length);
    }

    if (!newsLetter.allNewsLetter) return <p>Loading...</p>;

    return (
        <div id="popup-newsletter">
            <div className="box_inner">
                <div className="description_wrap scrollable d-flex">
                    <div className="image news_image">
                        <div
                            className="main pop-up-background-image"
                            style={{
                                backgroundImage: `url(${baseUrl}${popup?.coverImage?.url})`,
                            }}
                        ></div>
                    </div>
                    <div className="pop-up-title title-description">
                        {/* Close button */}
                        <MdClose
                            fontSize={36}
                            size={36}
                            className="modal-close-icon"
                            onClick={() => setShow(false)} 
                        />

                        {/* Logo */}
                        {popup?.showLogo && 
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
                        }

                        {/* Content */}
                        <div className="news_content">
                            <div className="news_details">
                                <h3 className="title mb-4">
                                    {popup?.title}
                                </h3>
                            </div>
                            <div className="descriptions">
                                {popup?.content}
                            </div>
                        </div>

                        {/* Button */}
                        {popup?.showButton && 
                            <div className="cpf-button edina_tm_button">
                                <a
                                    href={popup?.buttonLink}
                                    className="color"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {popup?.buttonText}
                                </a>
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
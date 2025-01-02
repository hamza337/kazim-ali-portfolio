import React, { useEffect } from "react";
import { useState } from "react";
import withAuth from "../../../authentication/withAuth";
import { toast } from "react-toastify";
import { AdminFooter } from "../../footer/adminFooter";
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import CKeditor from '../../CkEditor';
import { Loader, urlToFile } from "../../../assets";
import { AddNewsLetter, EditNEWSLETTER, GetAllNEWSLETTER } from "../../../redux/action";
import { useRouter } from "next/navigation";

const NewsLetter = () => {
    const [image, setImage] = useState(null)
    const [imgSrc, setImagSrc] = useState(null)
    const [editObj, setEditObj] = useState(null)
    const [editorLoaded, setEditorLoaded] = useState(false);
    const {
        setValue,
        control,
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            buttonUrl: '',
            buttonText: '',
            featuredImage: image
        },
    });

    const dispatch = useDispatch();
    const newsLetter = useSelector((state) => state.newsLetter);
    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        dispatch(GetAllNEWSLETTER(onError))

    }, [])
    useEffect(() => {
        if (newsLetter.allNewsLetter) {
            let data = newsLetter.allNewsLetter
            setImagSrc(data.featuredImage)
            reset(newsLetter.allNewsLetter)
            urlToFile(data.featuredImage)
                .then(file => {
                    // let file_ = e.target.files[0];
                    if (file) {
                        setImage(file)
                    }
                    data = {
                        ...data,
                        featuredImage: file
                    }
                })
                .catch(error => {
                    console.error('Error converting URL to file:', error);
                });
            setEditObj(data)
            reset(data)
        }

    }, [newsLetter.allNewsLetter])
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


    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('featuredImage', image);
        formData.append('buttonText', data.buttonText);
        formData.append('buttonUrl', data.buttonUrl);
        formData.append('id', editObj.id);
        dispatch(EditNEWSLETTER(formData, handleGoBack, onError));

    };

    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };


    const onChangeProfilePicture = (e) => {
        let file_ = e.target.files[0];
        if (file_) {
            setImage(file_)
            const fileURL = URL.createObjectURL(file_);
            setImagSrc(fileURL)
        }
    };

    return (
        <div className="layout-page">
            {newsLetter.loading === true
                &&
                <>
                <div className="spinner-admin">  <Loader /></div></>
            }
            <div className="content-wrapper">
                <div className="container-fluid flex-grow-1 container-p-x container-p-y">
                    <div className="card overflow-hidden">
                        <h5 className="card-header">{`Popup Newsletter`}</h5>


                        <div className="card-body body-measure">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Title"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="title"
                                                type="text"
                                                {...register('title', {
                                                    required: 'Title is required',

                                                })} />
                                            {errors.title && <p>{errors.title.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>


                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Featured Image"}
                                            </FormLabel>
                                            <br />
                                            <Form.Control
                                                custom
                                                type="file"
                                                bscustomprefix="custom-input-add-img form-file-input"
                                                name="featuredImage"
                                                id="FeaturedImage"
                                                data-browse="UPLOAD"
                                                accept="image/*"

                                                onChange={(e) => {
                                                    onChangeProfilePicture(e);
                                                }}
                                            />
                                            {imgSrc &&
                                                <img alt={'file.name'} src={imgSrc}></img>}
                                            {errors.featuredImage && <p>{errors.featuredImage.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Button Title"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="buttonText"
                                                type="text"
                                                {...register('buttonText', {
                                                    required: 'Button Title is required',

                                                })} />
                                            {errors.buttonText && <p>{errors.buttonText.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Button Url"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="buttonUrl"
                                                type="url"
                                                {...register('buttonUrl', {
                                                    required: 'Button Url is required',
                                                    pattern: {
                                                        value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                                                        message: "Please enter a valid URL",
                                                    },
                                                })} />
                                            {errors.buttonUrl && <p>{errors.buttonUrl.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Description"}
                                            </FormLabel>
                                            <br />
                                            <Controller
                                                name="description"
                                                control={control}
                                                className="description-data"
                                                render={({ field }) =>
                                                    <CKeditor
                                                        {...field}
                                                        {...register('description', {
                                                            required: 'Description is required',

                                                        })}
                                                        name="Description"
                                                        onChange={(data) => {
                                                            setValue('description', data)
                                                        }}

                                                        editorLoaded={editorLoaded}
                                                        style={{ minHeight: '400px' }}
                                                    />}
                                            />

                                            {errors.description && <p>{errors.description.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>

                                {newsLetter.addLoading === true
                                    ?
                                    <>
                                    <div className="spinner-admin">  <Loader /></div></>: <div className="button-group-new">
                                        <button type="button" className="cancel-button" onClick={handleGoBack}>
                                            Cancel
                                        </button>
                                        <button type="submit" className="submit-button">
                                            Submit
                                        </button>
                                    </div>}
                            </form>
                        </div>
                    </div>

                    <hr className="my-12" />




                </div>

                <AdminFooter />

                <div className="content-backdrop fade"></div>
            </div>
        </div>
    );
};
export default withAuth(NewsLetter);

import React, { useEffect } from "react";
import { useState } from "react";
import withAuth from "../../../authentication/withAuth";
import { toast } from "react-toastify";
import { AdminFooter } from "../../footer/adminFooter";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { useForm, Controller } from 'react-hook-form';
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import CKeditor from '../../CkEditor';
import { Loader, urlToFile } from "../../../assets";
import { AddCSS, EditCSS, GetAllCSSANDPMSById, } from "../../../redux/action";

const AddCSSAndPMS = () => {
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
            "content": "",
            "isPublished": false,
            "isDrafted": true,
            featuredImage: image
        },
    });

    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    const cssAndPms = useSelector((state) => state.cssAndPms);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        if (id !== 'new') {
            dispatch(GetAllCSSANDPMSById(id, onError))
        }
    }, [id])
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
    console.log("cssAndPms", cssAndPms)
    useEffect(() => {
        if (id !== 'new') {
            if (cssAndPms.cssAndPmsByID) {
                let data = cssAndPms.cssAndPmsByID
                setImagSrc(data.featuredImage)
                reset(cssAndPms.cssAndPmsByID)
                urlToFile(data.featuredImage)
                    .then(file => {

                        // let file_ = e.target.files[0];
                        // console.log(file_,"sdsdsdsd", file)
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
        }
    }, [id, cssAndPms.cssAndPmsByID])

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('description', data.description);
        formData.append('buttonText', data.buttonText);
        formData.append('buttonUrl', data.buttonUrl);
        formData.append('featuredImage', image);
        formData.append('isPublished', data.isPublished);
        formData.append('isDrafted', !data.isPublished);
        if (id !== 'new') {
            if (editObj) {
                formData.append('id', editObj.id);
            }
            dispatch(EditCSS(formData, handleGoBack, onError))
        } else {
            dispatch(AddCSS(formData, handleGoBack, onError));
        }
    };
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
            {cssAndPms.loading === true
                &&
                <>
                <div className="spinner-admin">  <Loader /></div></>
            }
            <div className="content-wrapper">
                <div className="container-fluid flex-grow-1 container-p-x container-p-y">
                    <div className="card overflow-hidden">
                        <h5 className="card-header">{id !== "new" ? 'Edit CSS And PMS ' : `Add CSS And PMS`}</h5>


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
                                                {"Content"}
                                            </FormLabel>
                                            <br />
                                            <Controller
                                                name="content"
                                                control={control}
                                                render={({ field }) =>
                                                    <CKeditor
                                                        {...field}
                                                        {...register('content', {
                                                            required: 'content is required',

                                                        })}
                                                        name="content"
                                                        onChange={(data) => {

                                                            setValue('content', data)
                                                        }}

                                                        editorLoaded={editorLoaded}
                                                    />}
                                            />

                                            {errors.description && <p>{errors.description.message}</p>}
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
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Is Published"}
                                            </FormLabel>
                                            <br />
                                            <Form.Check
                                                {...register('isPublished', {
                                                    required: false,

                                                })}

                                                name={"isPublished"}
                                                type="switch"
                                                id="isPublished"
                                            />

                                            {errors.isPublished && <p>{errors.isPublished.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                {cssAndPms.addLoading === true
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
export default withAuth(AddCSSAndPMS);

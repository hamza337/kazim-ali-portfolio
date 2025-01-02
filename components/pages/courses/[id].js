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
import { AddService, EditService, GetAllCategories, GetAllServicesById } from "../../../redux/action";
import { Loader, urlToFile } from "../../../assets";


const AddCourse = () => {
    const [image, setImage] = useState(null)
    const [imgSrc, setImagSrc] = useState(null)
    const [editorLoaded, setEditorLoaded] = useState(false);
    const {
        reset,
        control,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            "isNational": false,
            "title": "",
            "content": "",
            "courseAvailability": "",
            "courseModality": "",
            "courseFee": "",
            "description": "",
            "featuredImage": image,
            "isPublished": false,
            "isDrafted": true,

        },
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const service = useSelector((state) => state.service);

    const [editObj, setEditObj] = useState(null)
    const { id } = router.query;

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        if (id !== 'new') {
            dispatch(GetAllServicesById(id, onError))

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
    useEffect(() => {
        if (id !== 'new') {
            if (service.serviceByID) {
                let data = service.serviceByID
                setImagSrc(data.featuredImage)
                reset(service.serviceByID)

                urlToFile(data.featuredImage)
                    .then(file => {
                        // let file_ = e.target.files[0];
                        if (file) {
                            setImage(file)
                        }
                        // setImage(file)
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
    }, [id, service.serviceByID])

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('isNational', data.isNational);
        formData.append('title', data.title);
        formData.append('courseAvailability', data.courseAvailability);
        formData.append('courseFee', data.courseFee);
        formData.append('isPublished', data.isPublished);

        formData.append('isDrafted', !data.isPublished);
        formData.append('courseModality', data.courseModality);
        formData.append('courseModality', data.featuredImage);
        formData.append('featuredImage', image);
        formData.append('description', data.description);
        formData.append('content', data.content);
        if (id !== 'new') {
            if (editObj) {
                formData.append('id', editObj.id);
            }
            dispatch(EditService(formData, handleGoBack, onError))
        } else {
            dispatch(AddService(formData, handleGoBack, onError));
        }

    };
    const handleGoBack = () => {
        router.back();
    };

    useEffect(() => {
        dispatch(GetAllCategories(onError))
    }, [])
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

            {service.loading === true
                &&
                <>
                <div className="spinner-admin">  <Loader /></div></>
            }
            <div className="content-wrapper">

                <div className="container-fluid flex-grow-1 container-p-x container-p-y">

                    <div className="card overflow-hidden">
                        <h5 className="card-header">Add Course</h5>
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
                                                {"Is National"}
                                            </FormLabel>
                                            <br />
                                            <Form.Check
                                                {...register('isNational', {
                                                    required: false,

                                                })}
                                                name={"isNational"}
                                                type="switch"
                                                // label="Publish"
                                                id="isNational"
                                            />

                                            {errors.isNational && <p>{errors.isNational.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Course Fee"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="courseFee"
                                                type="number"
                                                {...register('courseFee', {
                                                    required: 'Course Fee is required',

                                                })} />
                                            {errors.courseFee && <p>{errors.courseFee.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Course Availabilty"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="courseAvailability"
                                                type="text"
                                                {...register('courseAvailability', {
                                                    required: 'course Availability is required',

                                                })} />
                                            {errors.courseAvailability && <p>{errors.courseAvailability.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Course Modality"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                id="courseModality"
                                                type="text"
                                                {...register('courseModality', {
                                                    required: 'course Modality is required',

                                                })} />
                                            {errors.courseModality && <p>{errors.courseModality.message}</p>}
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
                                                bsCustomPrefix="custom-input-add-img form-file-input"
                                                name="featuredImage"
                                                id="featuredImage"
                                                data-browse="UPLOAD"
                                                accept="image/*"

                                                {...register('featuredImage', {
                                                    required: true,
                                                    onChange: (e) => onChangeProfilePicture(e)
                                                })}
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
                                                {"Short Description"}
                                            </FormLabel>
                                            <br />
                                            <Controller
                                                name="description"
                                                control={control}
                                                render={({ field }) =>
                                                    <CKeditor
                                                        {...field}
                                                        {...register('description', {
                                                            required: 'Description is required',

                                                        })}
                                                        name="description"
                                                        onChange={(data) => {

                                                            setValue('description', data)
                                                        }}

                                                        editorLoaded={editorLoaded}
                                                    />}
                                            />

                                            {errors.description && <p>{errors.description.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>
                                {/* Description ends here */}
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
                                {/* Buttons */}
                                {service.addLoading ?
                                      <>
                                      <div className="spinner-admin">  <Loader /></div></>
                                    : <div className="button-group-new">
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
export default withAuth(AddCourse);

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
import { AddReview, EditReview, GetAllCategories, GetAllReviewsById, } from "../../../redux/action";

const AddStudentReview = () => {
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
            categoryId: '',
            title: '',
            description: '',
            isDrafted: true,
            isPublished: false,
            featuredImage: image
        },
    });

    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review);
    const category = useSelector((state) => state.category);
    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        if (id !== 'new') {
            dispatch(GetAllReviewsById(id, onError))
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
            if (review.reviewById) {
                let data = review.reviewById
                setImagSrc(data.featuredImage)
                reset(review.reviewById)
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
        }
    }, [id, review.reviewById])

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('categoryId', data.categoryId);
        formData.append('title', data.title);
        formData.append('content', 'wwww');
        formData.append('description', data.description);
        formData.append('isPublished', data.isPublished);
        formData.append('isDrafted', !data.isPublished);
        formData.append('featuredImage', image);
        if (id !== 'new') {
            if (editObj) {
                formData.append('id', editObj.id);
            }
            dispatch(EditReview(formData, handleGoBack, onError))
        } else {
            dispatch(AddReview(formData, handleGoBack, onError));
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
            {review.loading === true
                &&
                <>
                <div className="spinner-admin">  <Loader /></div></>
            }
            <div className="content-wrapper">
                <div className="container-fluid flex-grow-1 container-p-x container-p-y">
                    <div className="card overflow-hidden">
                        <h5 className="card-header">{id !== "new" ? 'Edit Student Review ' : `Add Student Reviews`}</h5>


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
                                                {"Category"}
                                            </FormLabel>
                                            <br />
                                            <FormControl
                                                as="select"
                                                style={{
                                                    borderColor: errors && errors.stateId ? "#a80000" : "",
                                                }}
                                                name="categoryId"
                                                {...register('categoryId', {
                                                    required: 'Category is required',

                                                })}
                                            >
                                                <option value="">{"Uncategorized"}</option>
                                                {category &&
                                                    category.allCategories &&
                                                    category.allCategories.map((state, index) => {
                                                        return (
                                                            <option value={state.id} key={index}>
                                                                {state.name}
                                                            </option>
                                                        );
                                                    })}
                                            </FormControl>
                                            {errors.categoryId && <p>{errors.categoryId.message}</p>}
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
                                            <Form.Check
                                                {...register('isPublished', {
                                                    required: false,

                                                })}
                                                name={"isPublished"}
                                                type="switch"
                                                label="Publish"
                                                id="isPublished"
                                            />

                                            {errors.isPublished && <p>{errors.isPublished.message}</p>}
                                        </FormGroup>
                                    </div>
                                </div>



                                {review.addLoading === true
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
export default withAuth(AddStudentReview);

import React, { useEffect } from "react";
import { useState } from "react";
import withAuth from "../../../../authentication/withAuth";
import { toast } from "react-toastify";
import { AdminFooter } from "../../../footer/adminFooter";
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {  FormGroup, FormLabel } from "react-bootstrap";
import CKeditor from '../../../CkEditor';
import { Loader,} from "../../../../assets";
import { EditLOOKUPS,  GetAllLOOKUPS } from "../../../../redux/action";
import { useRouter } from "next/router";

const Heading = () => {
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
            value: '',
        },
    });
    const dispatch = useDispatch();
    const cssAndPms = useSelector((state) => state.cssAndPms);
    const router = useRouter();
    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        dispatch(GetAllLOOKUPS(onError))

    }, [])
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
        if (cssAndPms.getLookUps) {
            let data = cssAndPms?.getLookUps ? cssAndPms.getLookUps : {}
            setEditObj(data)
            reset(data)
        }

    }, [cssAndPms.getLookUps])

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('value', data.value);
        formData.append('id', editObj.id);
        dispatch(EditLOOKUPS(formData, handleGoBack, onError))
    };
    const handleGoBack = () => {
        router.back();
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
                        <h5 className="card-header">{'Edit PMS Heading'}</h5>


                        <div className="card-body body-measure">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="row p-2">
                                    <div className="col-12 mt-2">
                                        <FormGroup>
                                            <FormLabel>
                                                {"Description"}
                                            </FormLabel>
                                            <br />
                                            
                                            <Controller
                                                name="value"
                                                control={control}
                                                className="description-data"
                                                render={({ field }) =>
                                                    <CKeditor
                                                        {...field}
                                                        {...register('value', {
                                                            required: 'Value is required',

                                                        })}
                                                        name="Value"
                                                        onChange={(data) => {
                                                            setValue('value', data)
                                                        }}

                                                        editorLoaded={editorLoaded}
                                                        style={{ minHeight: '400px' }}
                                                    />}
                                            />

                                            {errors.value && <p>{errors.value.message}</p>}
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
export default withAuth(Heading);

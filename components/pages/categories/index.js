import React, { useEffect } from "react";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import withAuth from "../../../authentication/withAuth";
import { MdSearch } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory, DeleteCategory, EditCategory, GetAllCategories } from "../../../redux/action";
import { Loader } from "../../../assets";
import { FormControl, FormGroup, Modal, FormLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
const currentYear = new Date().getFullYear();
const Categories = () => {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)
    const dispatch = useDispatch()


    const category = useSelector((state) => state.category);
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
        dispatch(GetAllCategories(onError))
    }, [])
    const deleteCategory = (item) => {
        dispatch(DeleteCategory(item.id, onError))
    }
    return (
        <div className="layout-page">

            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-6" href="#!">
                        <i className="bx bx-menu bx-md"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <MdSearch />
                            <input
                                type="text"
                                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                placeholder="Search..."
                                aria-label="Search..." />
                        </div>
                    </div>
                </div>
            </nav>
            <CategoryModal show={show}
                data={data}
                setData={setData}
                setShow={setShow} />
            {
                category.getLoading === true
                &&
                <>
                <div className="spinner-admin">  <Loader /></div></>
              
            }
            {
                category.getLoading === false
                &&
                <div className="content-wrapper">


                    <div className="container-fluid flex-grow-1 container-p-x container-p-y">

                        <div className="card">
                            <h5 className="card-header">Student Reviews Categories</h5>

                            <button
                                type="button"
                                className="btn btn-primary new-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#modalCenter"
                                onClick={() => {
                                    setShow(true);
                                    setData(null)
                                }}>
                                Add Category
                            </button>
                            <div className="table-responsive text-nowrap">
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Category Name</th>
                                            <th>Parent</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        {
                                            category.allCategories.map((item, index) => {

                                                return (
                                                    <tr key={index}>
                                                        <td>

                                                            <span>
                                                                {item.name}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            {item.parentName}
                                                        </td>

                                                        <td>
                                                            <span className={`badge bg-label-primary me-1`}>
                                                                <span className={`badge bg-label-primary`}>
                                                                    Published
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <Dropdown>
                                                                <DropdownTrigger>
                                                                    <Button
                                                                        color={'default'}
                                                                        variant={'light'}
                                                                        className="capitalize"
                                                                    >

                                                                        <TbDotsVertical />

                                                                    </Button>
                                                                </DropdownTrigger>
                                                                <DropdownMenu className='drop-down-menu' aria-label="Static Actions">

                                                                    <DropdownItem key="edit"
                                                                        onClick={() => {
                                                                            setShow(true)
                                                                            setData(item)
                                                                        }}
                                                                    >
                                                                        <MdOutlineModeEdit className='m-1' />
                                                                        Edit
                                                                    </DropdownItem>
                                                                    <DropdownItem key="delete" className="text-danger"
                                                                        onClick={() => { deleteCategory(item) }} color="danger">
                                                                        <MdOutlineDeleteOutline className='m-1' />
                                                                        Delete
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>

                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr className="my-12" />




                    </div>
                    <footer className="content-footer footer bg-footer-theme">
                        <div className="container-xxl">
                            <div
                                className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
                                <div className="text-body">
                                    ©{currentYear}
                                    <script>
                                        document.write(new Date().getFullYear());
                                    </script>
                                    , made by
                                    <a href="https://xodeactech.com" target="_blank" className="footer-link"> XODEAC</a>
                                </div>

                            </div>
                        </div>
                    </footer>


                    <div className="content-backdrop fade"></div>
                </div>
            }
        </div>
    )
};
export default withAuth(Categories);

function CategoryModal(props) {
    return (
        <Modal
            show={props.show}
            size={"md"}
            centered
            onHide={() => { props.setShow(false) }}>
            <Modal.Header closeButton>
                <h4 className="no-margin">{`Add Category`}</h4>
            </Modal.Header>
            <Modal.Body>
                <CategoryModalBody {...props} />
            </Modal.Body>
        </Modal >
    )
}

function CategoryModalBody(props) {
    const category = useSelector((state) => state.category);
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: props.data
    });

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        if (data.parentId === '') {
            data = { ...data, parentId: null }
        }
        if (props.data !== null) {
            dispatch(EditCategory(data, moveToNext, onError));
        } else {
            dispatch(AddCategory(data, moveToNext, onError));
        }
    };
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
    const moveToNext = () => {
        props.setShow(false)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >

            <div className="row p-2">
                <div className="col-12 mt-2">
                    <FormGroup>
                        <FormLabel>
                            {"Name"}
                        </FormLabel>
                        <br />
                        <FormControl
                            id="name"
                            type="name"
                            {...register('name', {
                                required: 'Name is required',

                            })} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </FormGroup>
                </div>
            </div>

            <div className="row mb-4 p-2">
                <div className="col-12 mt-2">
                    <FormGroup>
                        <FormLabel>
                            {"Parent"}
                        </FormLabel>
                        <br />
                        <FormControl
                            as="select"
                            style={{
                                borderColor:
                                    errors && errors.stateId ? "#a80000" : "",
                            }}
                            name="parentId"
                            {...register('parentId')}

                        >
                            <option value={''}>{"Uncategorized"}</option>
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
                        {errors.parentId && <p>{errors.parentId.message}</p>}
                    </FormGroup>
                </div>
            </div>
            {
                category.addLoading === true ?
                <>
                <div className="spinner-admin">  <Loader /></div></>
                    :
                    <div className="modal-footer">
                        <div className="button-group-new">
                            <button type="button" className="cancel-button"
                                onClick={() => {
                                    props.setData(null);
                                    props.setShow(false)
                                }}
                                data-bs-dismiss="modal">
                                Cancel
                            </button>
                            <button type="submit" className="submit-button btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
            }
        </form>
    )
}
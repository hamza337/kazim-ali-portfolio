import React, { useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import withAuth from "../../../../authentication/withAuth";
import { AdminFooter } from "../../../footer/adminFooter";
import { MdSearch } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCSS, GetAllCSS } from "../../../../redux/action";
import { Loader } from "../../../../assets";
import DOMPurify from "dompurify";
import { toast } from "react-toastify";

const AllCSSAndPMS = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const cssAndPms = useSelector((state) => state.cssAndPms);
    useEffect(() => {
        dispatch(GetAllCSS(onError))
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
    const deleteCss = (item) => {
        dispatch(DeleteCSS(item.id, onError))
    }
    return (

        <div className="layout-wrapper layout-content-navbar">
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
                {
                    cssAndPms.getLoading === true
                    &&
                    <>
                    <div className="spinner-admin">  <Loader /></div></>
                }
                {
                    cssAndPms.getLoading === false
                    &&

                    <div className="content-wrapper">
                        <div className="container-fluid flex-grow-1 container-p-x container-p-y">
                            <div className="card overflow-hidden">
                                <h5 className="card-header">CSS ANd PMS</h5>
                                <button
                                    type="button"
                                    className="btn btn-primary new-btn"
                                    onClick={() => { router.push(`/css-and-pms-essays/new`); }}>
                                    Add CSS And PMS
                                </button>
                                <div className="table-responsive text-nowrap">
                                    <table className="table">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Title</th>
                                                <th>Category</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-border-bottom-0">
                                            {
                                                cssAndPms.allCssAndPms.map((item, index) => {
                                                    const sanitizedDescription = DOMPurify.sanitize(item?.description || "");
                                                    return (
                                                        <tr key={index}
                                                            onClick={() => { router.push(`/css-and-pms-essays/details/${item.id}`) }}>
                                                            <td>
                                                                <span>
                                                                    {item.title}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                {item.categoryName}
                                                            </td>
                                                            <td>
                                                                <div className="table-description">
                                                                    <div
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: sanitizedDescription,
                                                                        }}
                                                                    />
                                                                </div>

                                                            </td>
                                                            <td>
                                                                <span className={`badge ${item.isPublished === true ? 'bg-label-primary' : 'bg-label-warning'} me-1`}>
                                                                    {item.isPublished === true ? 'Published' : "Draft"}
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
                                                                            onClick={() => router.push(`/css-and-pms-essays/${item.id}`)}>
                                                                            <MdOutlineModeEdit className='m-1' />
                                                                            Edit
                                                                        </DropdownItem>
                                                                        <DropdownItem key="delete" className="text-danger"
                                                                            onClick={() => deleteCss(item)}
                                                                            color="danger">
                                                                            <MdOutlineDeleteOutline className='m-1' />
                                                                            Delete
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </Dropdown>

                                                            </td>                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <hr className="my-12" />




                        </div>

                        <AdminFooter />

                        <div className="content-backdrop fade"></div>
                    </div>
                }
            </div>
        </div>

    );
};
export default withAuth(AllCSSAndPMS);

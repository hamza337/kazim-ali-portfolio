import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineGridOn } from "react-icons/md";
export function SideBar() {
    const router = useRouter()
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link href="#!" className="app-brand-link">

                    <span className="app-brand-text demo menu-text fw-bold ms-2">SyedKazimAli</span>
                </Link>

                <Link href="#!" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"></i>

                </Link>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">

                <li className="menu-item">
                    <Link
                        href="/student-reviews"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">Student Reviews</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link
                        href="/categories"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">Categroies</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link
                        href="/courses"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">Courses</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link
                        href="/css-and-pms-essays/list"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">CSS And PMS</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link
                        href="/news-letter"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">Newsletter</div>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link
                        href="/css-and-pms-essays/heading"
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">PMS Page Content</div>
                    </Link>
                </li>
                <li className="menu-item logout-item" >
                    <span
                        onClick={() => {
                            router.push("/");
                            localStorage.removeItem('user')
                        }}
                        className="menu-link">
                        <i className="menu-icon d-none tf-icons bx bx-grid"></i>
                        <MdOutlineGridOn className="menu-icon tf-icons" />
                        <div className="text-truncate" data-i18n="Kanban">Logout</div>
                    </span>
                </li>
            </ul>
        </aside>
    )
}
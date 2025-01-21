import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";
import { useRouter } from "next/router";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Syed Kazim Ali",
  email: "contact@syedkazimali.info",
  emailRef: "mailto:contact@syedkazimali.info",
};

const HeaderHorizontal = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const router = useRouter()
  const [navbar, setNavbar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown((prev) => (prev === itemName ? null : itemName));
  };
  

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className={`horizontal-menu ${navbar ? "fixed-header" : ""}`}>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "edina_tm_sidebar  menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
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
          {/* End .logo */}

          <div className="menu">
            <ul className="anchor_nav" ref={dropdownRef}>
              {sidebarContent.map((val, i) => (
                // <li key={i} className="position-relative">
                <li
                  key={i}
                  className={`menu-item ${val.subItems ? "has-dropdown" : ""} ${
                    activeDropdown === val.itemName ? "open" : ""
                  }`}
                >
                  <div 
                    className="list_inner"
                    onClick={(e) => {
                      if (val.subItems) {
                        e.preventDefault();
                        toggleDropdown(val.itemName);
                      } else if (val.link) {
                        router.push(val.itemRoute);
                      }
                    }}
                  >
                    <a
                      href={val.link ? val.itemRoute : "#"}
                      className={val.activeClass}
                      onClick={val.link ? () => router.push(val.itemRoute) : undefined}
                    >
                      <Image
                        width={18}
                        height={18}
                        className="svg custom"
                        src={`/img/svg/${val.icon}.svg`}
                        alt="icon"
                      />
                      {val.itemName}
                      {val.subItems && (
                        <span className={`dropdown-arrow ${activeDropdown === val.itemName ? "rotate" : ""}`}>
                          ▼
                        </span>
                      )}
                    </a>
                    {val.subItems && activeDropdown === val.itemName && (
                      <ul className="custom-dropdown-menu">
                        {val.subItems.map((subItems, index) => (
                          <li key={index} className="custom-dropdown-item">
                            <Link href={subItems.itemRoute}>
                              {subItems.itemName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>


          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/about/kazim-50x50.jpg)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </div>
  );
};

export default HeaderHorizontal;

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
  MDBBadge,
  MDBModalFooter,
  MDBRow,
  MDBInput,
  MDBTabPane,
  MDBModalBody,
  MDBContainer,
  MDBModal,
  MDBNav,
  MDBTabContent,
  MDBLink,
} from "mdbreact";
import "./Header.css";
import SmallCart from "../components/SmallCart";
import SlideNav from "../components/SlideNav";
import TreeViweProducts from "../components/TreeViweProducts";
import LoginModal from "../components/LoginRegisterModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  

  const bgColor = "blue darken-3";
  const bgColorHex = "#1565c0";
  const x = (
    <MDBDropdown>
      <MDBDropdownToggle nav className="text-white">
        <span className="d-none d-lg-inline"> 0 تومان</span>
        <MDBBadge color="danger" className="mr-3 ml-1">
          4
        </MDBBadge>
        <MDBIcon icon="shopping-cart " style={{ fontSize: "1.5rem" }} />
      </MDBDropdownToggle>
      <MDBDropdownMenu right>
        <MDBDropdownItem>
          <SmallCart />
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavLink to="/shoppingcart">تکمیل صبد خرید</MDBNavLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
  const [width, setWidth] = useState("0rem");

  const close = () => {
    console.log("fuck");
    setWidth("0rem");
  };
  const open = () => {
    setWidth("20rem");
  };
  return (
    <>
      <section>
        <div
          className="d-flex flex-row"
          style={{ backgroundColor: bgColorHex, marginBottom: "1px" }}
        >
          <SlideNav close={close} width={width}>
            <TreeViweProducts />
          </SlideNav>

          <div className="px-sm-3 px-0  py-2 ">
            <MDBNavLink className="text-white" to="/aboutus">
              تماس با ما
            </MDBNavLink>
          </div>
          <div className="px-sm-3 px-0  py-2 ">
            <MDBNavLink className="text-white" to="/education">
              راهنمای خرید
            </MDBNavLink>
          </div>
          <div className="px-sm-3 px-0  py-2 ">
            <MDBNavLink className="text-white" to="/why">
              چرا سانلند شاپ
            </MDBNavLink>
          </div>
        </div>
      </section>

      <section>
        <div
          className="d-flex  justify-content-around "
          style={{
            backgroundColor: bgColorHex,
            marginBottom: "1px",
            height: "6rem",
          }}
        >
          <div className="d-none d-sm-block">
            <a>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                className="rounded-circle z-depth-0 my-auto h-100"
                alt=""
              />
            </a>
          </div>

          <div className="input-group md-form form-sm form-1 pl-0 mr-1 w-50">
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-prepend ">
              <span className="input-group-text blue " id="basic-text1">
                <MDBIcon icon="search" className="text-grey" />
              </span>
            </div>
          </div>

          <div className=" my-auto d-none d-lg-inline">{x}</div>
          <div className='row align-items-center'>
          <LoginModal />
          
           <MDBLink to='/register' className='text-white p-2 '>
              ثبت نام
           </MDBLink>
          </div>
          </div>
      </section>

      <section>
        <MDBNavbar color={bgColor} dark expand="lg">
          <MDBNavbarBrand>
            <strong className="white-text">سانلند شاپ</strong>
          </MDBNavbarBrand>
          <div className=" d-lg-none white-text">
            <span
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={open}
            >
              &#9776; دسته بندی ها
            </span>
          </div>
          <div className=" d-lg-none">{x}</div>
          <MDBNavbarToggler onClick={toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="mx-1" active>
                <MDBNavLink to="/">صفحه اصلی</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mx-1">
                <MDBNavLink to="/products">محصولات</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mx-1">
                <MDBNavLink to="/education">آموزش</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mx-1">
                <MDBNavLink to="/blog">بلاگ</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mx-1">
                <MDBNavLink to="/aboutus">درباره ما</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mx-1">
                <MDBNavLink to="/gallery">گالری تصاویر</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <div className="text-white ml-5">
              <a>فروش ویژه</a>
            </div>
          </MDBCollapse>
        </MDBNavbar>
      </section>
    </>
  );
};

export default Header;

import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import React, { useState } from "react";
import { registerUser,loginUser } from "../services/userService";
import { toast } from "react-toastify";

const LoginModal = () => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passRegister, setPassRegister] = useState("");
  const [confPassRegister, setConfPassRegister] = useState("");
  const [fullNameRegister, setFullNameRegister] = useState("");
  const [img, setImg] = useState();
  
  const [emailLogin, setEmailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");

  const [modal, setModal] = useState(false);
  const [activeItem, setactiveItem] = useState("1");

  const toggle = (nr) => () => {
    setModal(!modal);
  };

  const toggleTab = (nr) => () => {
    setactiveItem(nr);
  };

  const register = () => {
    if (passRegister === confPassRegister) {
      const fd = new FormData();
      fd.append("fullname", fullNameRegister);
      fd.append("email", emailRegister);
      fd.append("password", passRegister);
      fd.append("imageUrl", img, img.name);
      registerUser(fd)
        .then((res) => {
          toast.success("ثبت نام با موفقیت انجام شد.", {
            position: "top-right",
            closeOnClick: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no match");
    }
  };
 

  const login = () => {
    let user = {
      email: emailLogin,
      password: passLogin,
    };
    loginUser(user)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      // localStorage.setItem("user", res.data.user);
      // const user=localStorage.getItem('user')
      // console.log(user);
      toast.success("ورود با موفقیت انجام شد.", {
        position: "top-right",
        closeOnClick: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleChangeUploadImage = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <>
      <div className="text-white ml-0">
        <MDBBtn flat onClick={toggle(1)} className="text-white p-2">
          ورود
        </MDBBtn>
        <MDBModal
          className="form-cascading mt-5"
          isOpen={modal}
          toggle={toggle(1)}
        >
          <MDBNav
            tabs
            className="md-tabs nav-justified tabs-2 light-blue darken-3"
            style={{ margin: "-1.5rem 1rem 0 1rem" }}
          >
            <MDBNavItem>
              <MDBNavLink
                className={activeItem === 1 ? "active" : ""}
                to="#"
                onClick={toggleTab("1")}
              >
                <MDBIcon icon="user" className="ml-2" />
                ورود
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className={activeItem === 2 ? "active" : ""}
                to="#"
                onClick={toggleTab("2")}
              >
                <MDBIcon icon="user-plus" className="ml-2" />
                ثبت نام
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <MDBTabContent activeItem={activeItem}>
            <MDBTabPane tabId="1">
              <MDBModalBody className="mx-3">
                <form className=" mx-3 grey-text">
                  <MDBInput
                    label="ایمیل  "
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                  />
                  <MDBInput
                    label="رمز عبور    "
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={passLogin}
                    onChange={(e) => setPassLogin(e.target.value)}
                  />
                </form>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center mx-3">
                <MDBBtn className="mb-4" color="info" onClick={login}>
                  ورود
                  <MDBIcon icon="sign-in-alt" className="mr-2" />
                </MDBBtn>
                <MDBRow
                  className="w-100 justify-content-start pt-4"
                  style={{ borderTop: "1px solid #e9ecef" }}
                >
                  <div id="options">
                    <p className="font-small grey-text">
                      فراموش کردن{" "}
                      <span className="blue-text ml-1">رمزعبور?</span>
                    </p>
                  </div>
                </MDBRow>
              </MDBModalFooter>
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <MDBModalBody className="mx-3">
                <form className=" mx-3 grey-text ">
                  <MDBInput
                    label="نام و نام خانوادگی "
                    icon="user"
                    group
                    type="text"
                    validate
                    value={fullNameRegister}
                    onChange={(e) => setFullNameRegister(e.target.value)}
                  />
                  <MDBInput
                    label="ایمیل "
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={emailRegister}
                    onChange={(e) => setEmailRegister(e.target.value)}
                  />
                  <MDBInput
                    label="رمز عبور "
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={passRegister}
                    onChange={(e) => setPassRegister(e.target.value)}
                  />
                  <MDBInput
                    label="تاییدیه رمز عبور "
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={confPassRegister}
                    onChange={(e) => setConfPassRegister(e.target.value)}
                  />
                  <input type="file" onChange={handleChangeUploadImage} />
                </form>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center mx-3">
                <MDBBtn className="mb-4" color="info" onClick={register}>
                  ثبت نام
                  <MDBIcon icon="sign-in-alt" className="mr-2" />
                </MDBBtn>
                <MDBRow
                  className="w-100 justify-content-start pt-4"
                  style={{ borderTop: "1px solid #e9ecef" }}
                ></MDBRow>
              </MDBModalFooter>
            </MDBTabPane>
          </MDBTabContent>
        </MDBModal>
      </div>
    </>
  );
};

export default LoginModal;

import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
import "./SlideNav.css";

const SlideNav = ({close,width,children}) => {

  return (
    <>
      <div style={{ width: width}} class="sidenav  py-5">
        <MDBBtn class="closebtn primary-color" onClick={close}>
          &times;
        </MDBBtn>
        {children}
      </div>
    </>
  );
};

export default SlideNav;

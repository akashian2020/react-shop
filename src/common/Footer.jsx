import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import React from "react";

const Footer = () => {
  return (
    <MDBFooter
      color="stylish-color-dark"
      className="page-footer font-small px-5 pb-3 pt-5 mt-4"
    >
      <MDBContainer fluid className="  text-right">
        <MDBRow>
          <MDBCol md="4" className='border-right border-white'>
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="3" lg="4" xl="3" className=" border-right border-white">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className=" border-right border-white">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3" className=" border-right border-white">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
    </MDBFooter>
  );
};

export default Footer;

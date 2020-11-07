import { MDBCard, MDBStickyContent } from "mdbreact";
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import InterestedIn from "../components/InterestedIn";
import LargCardSpecialOffer from "../components/LargCardSpecialOffer";
import LastVideo from "../components/LastVideo";
import LatestProducts from "../components/LatestProducts";
import SmallFeature from "../components/SmallFeature";
import SpecialOffer from "../components/SpecialOffer";
import TreeViweProducts from "../components/TreeViweProducts";
// import Sidebar1 from "../components/Sidebar";
import NewProduct from "../components/NewProduct";
import SmallCardSpecialProduct from "../common/SmallCardSpecialProduct";

const Home = () => {
  return (
    <>
      {/* <Sidebar1 /> */}
      <div className="row d-flex mt-3 w-100 pr-3">
        <div className="d-none d-lg-block col-xl-3 col-lg-4 ">
          <MDBCard className=" p-4">
            <TreeViweProducts />
            <hr />
            <LastVideo />
            <hr />
            <SmallFeature />
            <hr />
            <NewProduct />
          </MDBCard>
        </div>

        <div className="col-12 col-xl-9 col-lg-8 ">
          <MDBCard className=" p-3 ">
            <Carousel />
            <hr />
            {/* <div className="d-lg-none w-100 row p-0">
              <div className="col-sm-6">
                <TreeViweProducts />
              </div>
              <div className="col-sm-6 bg-danger d-none d-sm-block">
                <hr />
                <LastVideo />
              </div>
            </div> */}
            <SpecialOffer />
            <hr />
            <LargCardSpecialOffer />
            <div class="row mt-4 pt-1">
              <div class="col-lg-4 col-md-12 mb-3 ">
                <SmallCardSpecialProduct />
              </div>
              <div class="col-lg-4 col-md-12 mb-4">
                <SmallCardSpecialProduct />
              </div>
              <div class="col-lg-4 col-md-12 mb-4">
                <SmallCardSpecialProduct />
              </div>
            </div>
            <hr />
            <div className='row d-lg-none'>
              <LastVideo />
              <hr />
              <NewProduct />
            </div>
            <LatestProducts />
            <hr />
            <InterestedIn />
            <hr />
            {/* <WhyUse /> */}
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export default Home;

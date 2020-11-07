import {
  MDBBtn,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBLightbox,
  MDBMask,
  MDBSticky,
  MDBStickyContent,
  MDBView,
} from "mdbreact";
import React from "react";
import TabDetails from "../components/TabDetails";
import "./ProductDetails.css";

const ProductDetails = () => {
  const images = [
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg",
      alt: "My Image 1",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg",
      alt: "My Image 2",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
      alt: "My Image 3",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg",
      alt: "My Image 4",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
      alt: "My Image 5",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg",
      alt: "My Image 6",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
      alt: "My Image 7",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg",
      alt: "My Image 8",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg",
      alt: "My Image 9",
    },
  ];
  const scrollContainerStyle = {
    width: "100%",
    maxHeight: "25rem",
    direction: "ltr",
  };

  return (
    <>
      <div className=" container">
        <MDBCard className=" p-4">
          <div className="row w-100 px-3">
            <div className="d-none d-sm-block col-3 col-lg-2 col-xl-2 ">
              {/* <MDBContainer> */}
              <div
                className=" scrollbar scrollbar-primary  mt-5 mx-auto"
                style={scrollContainerStyle}
              >
                <MDBLightbox sm="12" images={images} />
              </div>
              {/* </MDBContainer> */}
            </div>

            <div className="d-none d-sm-block col-9 col-lg-6 col-xl-6  p-0 ">
              <div className="d-flex h-100 justify-content-center align-items-center">
                <MDBView waves>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                    className="img-fluid z-depth-5"
                    alt=""
                  />
                </MDBView>
              </div>
            </div>

            <div className="col-12 d-sm-none my-5">
              <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={true}
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(136)-mini.jpg"
                          alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                          alt="Second slide"
                        />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                          alt="Third slide"
                        />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
            </div>

            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center flex-column text-center">
              {/* <MDBCardTitle className="card-title">
              <strong>Billy Coleman</strong>
            </MDBCardTitle>

            <p className="font-weight-bold blue-text">Wev developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{" "}
            </MDBCardText>
            <p className="grey-text">Choose your color</p>

            <div className="row text-center text-md-left">
              <div className="col-md-4 col-12 ">
                <div className="form-group">
                  <input
                    className="form-check-input"
                    name="group100"
                    type="radio"
                    id="radio100"
                    checked="checked"
                  />

                  <label
                    for="radio100"
                    className="form-check-label dark-grey-text"
                  >
                    Blue
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <input
                    className="form-check-input"
                    name="group100"
                    type="radio"
                    id="radio101"
                  />

                  <label
                    for="radio101"
                    className="form-check-label dark-grey-text"
                  >
                    Orange
                  </label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <input
                    className="form-check-input"
                    name="group100"
                    type="radio"
                    id="radio102"
                  />

                  <label
                    for="radio102"
                    className="form-check-label dark-grey-text"
                  >
                    Red
                  </label>
                </div>
              </div>
            </div>
             */}
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>iPad PRO </strong>
              </h2>

              <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">
                bestseller
              </span>

              <span className="badge badge-success product mb-4 ml-2">
                SALE
              </span>

              <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span className="red-text font-weight-bold">
                  <strong>$1449</strong>
                </span>

                <span className="grey-text">
                  <small>
                    <s>$1789</s>
                  </small>
                </span>
              </h3>

              <p className="ml-xl-0 ml-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente nesciunt atque nemo neque ut officiis nostrum incidunt
                maiores, magni optio et sunt suscipit iusto nisi totam quis,
                nobis mollitia necessitatibus.
              </p>

              <p className="ml-xl-0 ml-4">
                <strong>Storage: </strong>64GB
              </p>

              <p className="ml-xl-0 ml-4">
                <strong>Size: </strong>9.6-inch
              </p>

              <p className="ml-xl-0 ml-4">
                <strong>Resolution: </strong>2048 x 1536
              </p>

              <p className="ml-xl-0 ml-4">
                <strong>Availability: </strong>In stock
              </p>

              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <MDBBtn color="unique">Button</MDBBtn>
                </div>
                <div className="px-5">
                  <MDBInput
                    style={{ direction: "ltr", width: "5rem" }}
                    type="number"
                    label="تعداد"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <TabDetails />
        </MDBCard>
      </div>
    </>
  );
};

export default ProductDetails;

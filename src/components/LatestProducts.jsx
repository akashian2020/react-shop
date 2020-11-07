import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBTooltip, MDBCardFooter, MDBCardText, MDBCardTitle, MDBCardImage } from "mdbreact";

const LatestProducts = () => {
  return (
    // <MDBCard className="my-5 pb-5">
    //   <MDBCardBody className="text-center">
    //     <h2 className="h1-responsive font-weight-bold text-center my-5">
    //       Recent posts
    //     </h2>
    //     <p className="text-center w-responsive mx-auto mb-5">
    //       Duis aute irure dolor in reprehenderit in voluptate velit esse
    //       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    //       cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //       anim id est laborum.
    //     </p>
    //     <MDBRow>
    //       <MDBCol lg="3" md="6" sm='12' className="mb-lg-0 mb-4">
    //         <MDBView hover className="rounded z-depth-2 mb-4" waves>
    //           <img
    //             className="img-fluid"
    //             src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
    //             alt=""
    //           />
    //           <MDBMask overlay="white-slight" />
    //         </MDBView>
    //         <a href="#!" className="pink-text">
    //           <h6 className="font-weight-bold mb-3">
    //             <MDBIcon icon="map" className="pr-2" />
    //             Adventure
    //           </h6>
    //         </a>
    //         <h4 className="font-weight-bold mb-3">
    //           <strong>Title of the news</strong>
    //         </h4>
    //         <p>
    //           by <a href="#!" className="font-weight-bold">Billy Forester</a>,
    //           15/07/2018
    //         </p>
    //         <p className="dark-grey-text">
    //           Nam libero tempore, cum soluta nobis est eligendi optio cumque
    //           nihil impedit quo minus id quod maxime placeat facere possimus
    //           voluptas.
    //         </p>
    //         <MDBBtn color="pink" rounded size="md">
    //           Read more
    //         </MDBBtn>
    //       </MDBCol>
    //       <MDBCol lg="3" md="6" sm='12' className="mb-lg-0 mb-4">
    //         <MDBView hover className="rounded z-depth-2 mb-4" waves>
    //           <img
    //             className="img-fluid"
    //             src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
    //             alt=""
    //           />
    //           <MDBMask overlay="white-slight" />
    //         </MDBView>
    //         <a href="#!" className="deep-orange-text">
    //           <h6 className="font-weight-bold mb-3">
    //             <MDBIcon icon="graduation-cap" className="pr-2" />
    //             Education
    //           </h6>
    //         </a>
    //         <h4 className="font-weight-bold mb-3">
    //           <strong>Title of the news</strong>
    //         </h4>
    //         <p>
    //           by <a href="#!" className="font-weight-bold">Billy Forester</a>,
    //           13/07/2018
    //         </p>
    //         <p className="dark-grey-text">
    //           At vero eos et accusamus et iusto odio dignissimos ducimus qui
    //           blanditiis voluptatum deleniti atque corrupti quos dolores.
    //         </p>
    //         <MDBBtn color="deep-orange" rounded size="md">
    //           Read more
    //         </MDBBtn>
    //       </MDBCol>
    //       <MDBCol lg="3" md="6" sm='12' className="mb-lg-0 mb-4">
    //         <MDBView hover className="rounded z-depth-2 mb-4" waves>
    //           <img
    //             className="img-fluid"
    //             src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
    //             alt=""
    //           />
    //           <MDBMask overlay="white-slight" />
    //         </MDBView>
    //         <a href="#!" className="blue-text">
    //           <h6 className="font-weight-bold mb-3">
    //             <MDBIcon icon="fire" className="pr-2" />
    //             Culture
    //           </h6>
    //         </a>
    //         <h4 className="font-weight-bold mb-3">
    //           <strong>Title of the news</strong>
    //         </h4>
    //         <p>
    //           by <a href="#!" className="font-weight-bold">Billy Forester</a>,
    //           11/07/2018
    //         </p>
    //         <p className="dark-grey-text">
    //           Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
    //           aut fugit, sed quia consequuntur magni dolores eos qui ratione.
    //         </p>
    //         <MDBBtn color="info" rounded size="md">
    //           Read more
    //         </MDBBtn>
    //       </MDBCol>
    //       <MDBCol lg="3" md="6" sm='12' className="mb-lg-0 mb-4">
    //         <MDBView hover className="rounded z-depth-2 mb-4" waves>
    //           <img
    //             className="img-fluid"
    //             src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
    //             alt=""
    //           />
    //           <MDBMask overlay="white-slight" />
    //         </MDBView>
    //         <a href="#!" className="blue-text">
    //           <h6 className="font-weight-bold mb-3">
    //             <MDBIcon icon="fire" className="pr-2" />
    //             Culture
    //           </h6>
    //         </a>
    //         <h4 className="font-weight-bold mb-3">
    //           <strong>Title of the news</strong>
    //         </h4>
    //         <p>
    //           by <a href="#!" className="font-weight-bold">Billy Forester</a>,
    //           11/07/2018
    //         </p>
    //         <p className="dark-grey-text">
    //           Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
    //           aut fugit, sed quia consequuntur magni dolores eos qui ratione.
    //         </p>
    //         <MDBBtn color="info" rounded size="md">
    //           Read more
    //         </MDBBtn>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBCardBody>
    // </MDBCard>
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol xs='12'  md='6' lg='3' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Camera</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>GoPro</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>1439$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xs='12'  md='6' lg='3' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Photography</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Camera</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>1160$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xs='12'  md='6' lg='3' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>2160$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xs='12'  md='6' lg='3' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>2160$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default LatestProducts;
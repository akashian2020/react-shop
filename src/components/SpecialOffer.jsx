import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTooltip,
} from "mdbreact";
import React from "react";

const SpecialOffer = () => {
  return (
    // <div style={{direction: 'ltr'}} className='mx-5 my-4'>
    // <h1 className='text-right'><a>پیشنهادات ویژه</a></h1>
    //   <MDBCarousel
    //     activeItem={1}
    //     length={3}
    //     slide={true}
    //     showControls={true}
    //     showIndicators={true}
    //     multiItem
    //   >
    //     <MDBCarouselInner>
    //       <MDBRow>
    //         <MDBCarouselItem itemId="1">
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //         </MDBCarouselItem>
    //         <MDBCarouselItem itemId="2">
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //         </MDBCarouselItem>
    //         <MDBCarouselItem itemId="3">
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //           <MDBCol md="4">
    //             <MDBCard className="mb-2">
    //               <MDBCardImage
    //                 className="img-fluid"
    //                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
    //               />
    //               <MDBCardBody>
    //                 <MDBCardTitle>MDBCard title</MDBCardTitle>
    //                 <MDBCardText>
    //                   Some quick example text to build on the card title and
    //                   make up the bulk of the card's content.
    //                 </MDBCardText>
    //                 <MDBBtn color="primary">MDBBtn</MDBBtn>
    //               </MDBCardBody>
    //             </MDBCard>
    //           </MDBCol>
    //         </MDBCarouselItem>
    //       </MDBRow>
    //     </MDBCarouselInner>
    //   </MDBCarousel>
    // </div>
    
    <section style={{direction: 'ltr'}} className='text-center my-4'>
    
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId='1'>
              <MDBCol xs='12'  md='6' lg='3'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Leather boots</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Jeans</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Slim jeans</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBCol xs='12'  md='6' lg='3'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(30).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Leather boots</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(37).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Jeans</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Slim jeans</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' lg='3' className='clearfix d-none d-md-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(35).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBCol xs='12'  md='6' xl='3' className='clearfix my-5 d-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shoes</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Leather boots</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>69$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' xl='3' className='clearfix my-5 d-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage
                    cascade
                    top
                    src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(33).jpg'
                    alt='sample photo'
                  />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Jeans</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Slim jeans</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>99$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' xl='3' className='clearfix my-5 d-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol xs='12'  md='6' xl='3' className='clearfix my-5 d-block'>
                <MDBCard narrow ecommerce className='mb-2'>
                  <MDBCardImage cascade top src='https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg' alt='sample photo' />
                  <MDBCardBody cascade>
                    <a href='#!' className='text-muted'>
                      <h5>Shorts</h5>
                    </a>
                    <MDBCardTitle>
                      <strong>
                        <a href='#!'>Denim shorts</a>
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</MDBCardText>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>49$</span>
                      <span className='float-right'>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-eye mr-3' />
                          <span>Quick Look</span>
                        </MDBTooltip>
                        <MDBTooltip domElement placement='top'>
                          <i className='grey-text fa fa-heart' />
                          <span>Add to Whishlist</span>
                        </MDBTooltip>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default SpecialOffer;

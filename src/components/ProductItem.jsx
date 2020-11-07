import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn, MDBNavLink} from
"mdbreact";

const ProductItem = () => {
  return (
    <div className="col-6 col-sm-4  col-xl-3 p-2 ">
    <MDBCard className="m-2"  cascade ecommerce wide>
      <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
        waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          Shoes
        </MDBCardTitle>
        <MDBCardTitle>
          <MDBNavLink to='/products/1'><strong>Product name</strong></MDBNavLink>
        </MDBCardTitle>
        <ul className="rating">
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon icon="star" />
          </li>
          <li>
            <MDBIcon className="far" icon="star" />
          </li>
        </ul>
        <MDBCardText>
          Temporibus 
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">49$</span>
          <span className="float-right">
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon icon="shopping-cart"/>
              </MDBBtn>
              <div>Add to Cart</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon icon="share-alt"/>
              </MDBBtn>
              <div>Share</div>
            </MDBTooltip>
            <MDBTooltip placement="top">
              <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                <MDBIcon icon="heart" className="red-text"/>
              </MDBBtn>
              <div>Added to Wishlist</div>
            </MDBTooltip>
          </span>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

export default ProductItem;
import React from "react";

const SmallCardSpecialProduct = () => {
  return (
    <>
      <div className="view zoom z-depth-1 photo ">
        <img
          src="https://mdbootstrap.com/img/Photos/Others/product3.jpg"
          className="img-fluid"
          alt="sample image"
        />

        <div className="mask rgba-stylish-strong">
          <div className="white-text center-element text-center w-75">
            <div className="">
              <a>
                <span className="badge badge-info">NEW</span>
              </a>

              <h2 className="card-title font-weight-bold pt-2">
                <strong>This is news title</strong>
              </h2>

              <p className="">Lorem ipsum dolor sit amet, consectetur. </p>

              <a className="btn btn-info btn-sm btn-rounded"> Read more</a>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default SmallCardSpecialProduct;

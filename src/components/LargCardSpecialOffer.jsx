import React from "react";

const LargCardSpecialOffer = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="view z-depth-1">
          <img
            src="https://mdbootstrap.com/img/Photos/Others/ecommerce5.jpg"
            className="img-fluid"
            alt="sample image"
          />

          <div className="mask rgba-stylish-slight">
            <div className="dark-grey-text text-right pt-lg-5 pt-md-1 mr-5 pr-md-4 pr-0">
              <div>
                <a>
                  <span className="badge badge-primary">SALE</span>
                </a>

                <h2 className="card-title font-weight-bold pt-md-3 pt-1">
                  <strong>Sale from 20% to 50% on every tablet!</strong>
                </h2>

                <p className="pb-lg-3 pb-md-1 clearfix d-none d-md-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>

                <a className="btn mr-0 btn-primary btn-rounded clearfix d-none d-md-inline-block">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargCardSpecialOffer;

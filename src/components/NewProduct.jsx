import React from "react";

const NewProduct = () => {
  return (
    <div className=" p-4">
      <h5 className="text-center font-weight-bold dark-grey-text">
        <strong>New Products</strong>
      </h5>

      <hr />

      <div className='row w-100'>
        <div className="col-md-4 col-lg-12 row mt-5 py-2 mb-4 hoverable align-items-center">
          <div className="col-12 col-lg-6">
            <a>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                className="img-fluid"
              />
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <a className="pt-5">
              <strong>iPad</strong>
            </a>

            <ul className="rating inline-ul">
              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star grey-text"></i>
              </li>
            </ul>

            <h6 className="h6-responsive font-weight-bold dark-grey-text">
              <strong>$849</strong>
            </h6>
          </div>
        </div>

        <div className="col-md-4 col-lg-12 row mt-2 py-2 mb-4 hoverable align-items-center">
          <div className="col-12 col-lg-6">
            <a>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/10.jpg"
                className="img-fluid"
              />
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <a>
              <strong>Headphones</strong>
            </a>

            <ul className="rating inline-ul">
              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>
            </ul>

            <h6 className="h6-responsive font-weight-bold dark-grey-text">
              <strong>$49</strong>{" "}
              <span className="grey-text">
                <small>
                  <s>$89</s>
                </small>
              </span>
            </h6>
          </div>
        </div>

        <div className="col-md-4 col-lg-12 row mt-2 py-2 pb-1 hoverable align-items-center">
          <div className="col-12 col-lg-6">
            <a>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/3.jpg"
                className="img-fluid"
              />
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <a>
              <strong>iMac 27"</strong>
            </a>

            <ul className="rating inline-ul">
              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>

              <li>
                <i className="fas fa-star blue-text"></i>
              </li>
            </ul>

            <h6 className="h6-responsive font-weight-bold dark-grey-text">
              <strong>$1449</strong>{" "}
              <span className="grey-text">
                <small>
                  <s>$2189</s>
                </small>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;

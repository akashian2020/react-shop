import {
  MDBCard,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBPageItem,
  MDBPageNav,
  MDBPagination,
  MDBRow,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions,
  MDBView,
} from "mdbreact";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <>
      <div className="row w-100 pt-3 px-0 m-0">
        <div className="col-sm-6 col-xl-4 text-right">
          <a className="btn blue darken-3 btn-sm">
            <i className="fas fa-th mr-2" aria-hidden="true"></i>
            <strong> Grid</strong>
          </a>

          <a className="btn blue darken-3 btn-sm">
            <i className="fas fa-th-list mr-2" aria-hidden="true"></i>
            <strong>List</strong>
          </a>
        </div>
        <div className="col-sm-6 col-xl-4 w-100 px-0 pt-2 m-0">
          <form className="form-inline  mb-3 mx-4">
            <div className="w-100 mx-auto row align-items-center">
              <input
                className="form-control form-control-sm ml-3"
                type="text"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "80%" }}
              />
              <MDBIcon icon="search" />
            </div>
          </form>
        </div>
        <div className="col-10 col-sm-7 col-md-8 col-lg-6 col-xl-4 d-flex px-0 m-0 text-right">
          <div className="col-7 text-left">مرتب سازی براساس</div>
          <div className="col-5 ">
            <select className="browser-default custom-select">
              <option value="1">جدیدترین</option>
              <option value="2">قدیمی ترین</option>
              <option value="3">گران ترین</option>
              <option value="4">ارزان ترین</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-100 row pr-3">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <hr />
      <MDBRow className="mx-auto my-4">
        <MDBCol>
          <MDBPagination circle>
            <MDBPageItem disabled>
              <MDBPageNav className="page-link">
                <span>First</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav className="page-link">
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">4</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">5</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">&raquo;</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav className="page-link">Last</MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default ProductList;

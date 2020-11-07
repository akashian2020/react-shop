import { MDBCard } from "mdbreact";
import React from "react";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <>
      <div className="row w-100 px-3 py-4">
        <div className="d-none d-md-block col-xl-3 col-md-4   mx-auto   mb-3 ">
          <MDBCard>
            <ProductFilter />
          </MDBCard>
        </div>
        <div className="col-xl-9 col-md-8">
          <MDBCard>
            <ProductList />
          </MDBCard>
        </div>
      </div>
    </>
  );
};

export default Products;

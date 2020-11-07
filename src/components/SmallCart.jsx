import React, { Component } from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBInput,
  MDBBtn,
  MDBContainer,
} from "mdbreact";

class SmallCart extends Component {
  state = {
    data: [
      {
        src:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
        title: "iPhone",
        subTitle: "Apple",
      },
      {
        src:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg",
        title: "Headphones",
        subTitle: "Sony",
      },
      {
        src:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg",
        title: "iPad Pro",
        subTitle: "Apple",
      },
    ],
    columns: [
      {
        label: <strong>img</strong>,
        field: "img",
      },
      {
        label: <strong>Product</strong>,
        field: "product",
      },
      {
        label: "",
        field: "button",
      },
    ],
  };

  render() {
    const rows = [];
    const { columns, data } = this.state;

    data.map((row) => {
      return rows.push({
        img: <img src={row.src} alt="" className="img-fluid z-depth-0" />,
        product: [
          <h5 className="mt-3" key={new Date().getDate + 1}>
            <strong>{row.title}</strong>
          </h5>,
          <p key={new Date().getDate} className="text-muted">
            {row.subTitle}
          </p>,
        ],
        button: (
          <MDBTooltip placement="top">
            <MDBBtn color="primary" size="sm">
              X
            </MDBBtn>
            <div>Remove item</div>
          </MDBTooltip>
        ),
      });
    });

    return (
      <MDBContainer style={{ direction: "ltr" }}>
        <MDBRow className="my-2" center>
          <MDBCard className="w-100">
            <MDBCardBody>
              <MDBTable className="product-table">
                <MDBTableHead
                  className="font-weight-bold"
                  color="mdb-color lighten-5"
                  columns={columns}
                />
                <MDBTableBody rows={rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SmallCart;

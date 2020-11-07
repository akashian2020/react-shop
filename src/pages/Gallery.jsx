import {
  MDBCard,
  MDBContainer,
  MDBGallery,
  MDBGalleryList,
  MDBLightbox,
} from "mdbreact";
import React from "react";

const Gallery = () => {
  const presentation = [
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg",
      description: "| Lorem Ipsum Dolor Sit Amet",
    },
  ];

  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pb-5">
        <h2 className="h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5">
          My projects
        </h2>
        <p className="text-center text-uppercase font-weight-bold">
          All about my work
        </p>
        <p className="section-description mt-5 pt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur accusamus veniam. At ab
          ea a molestiae corrupti numquam quo beatae minima ratione magni
          accusantium repellat eveniet quia vitae.
        </p>
        <MDBLightbox md="3" images={presentation} noMargins />
      </MDBCard>
    </MDBContainer>
  );
};

export default Gallery;

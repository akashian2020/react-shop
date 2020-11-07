import React from "react";
import { MDBMedia } from "mdbreact";

const LastVideo = () => {
  return (
      <MDBMedia list className="mt-3 pl-4">
      <h3>اخرین ویدیوها</h3>
        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia
              object
              src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg"
              alt="Generic placeholder image"
              className='img-fluid z-depth-1 rounded-circle'
            />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>List-based media object</MDBMedia>
            {/* Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. */}
          </MDBMedia>
        </MDBMedia>

        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia
              object
              src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg"
              alt="Generic placeholder image"
              className='img-fluid z-depth-1 rounded-circle'
            />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>List-based media object</MDBMedia>
            {/* Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. */}
          </MDBMedia>
        </MDBMedia>

        <MDBMedia tag="li">
          <MDBMedia left href="#">
            <MDBMedia
              object
              src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg"
              alt="Generic placeholder image"
              className='img-fluid z-depth-1 rounded-circle'
            />
          </MDBMedia>
          <MDBMedia  >
            <MDBMedia >List-based media object</MDBMedia>
            {/* Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. */}
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>
  );
};

export default LastVideo;

import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem
} from 'mdbreact';

const TreeViweProducts =()=> {
  
    return (
      <MDBContainer header='Animated' style={{direction:"rtl",textAlign:'right'}} className='p-0 m-0'>
        <MDBCol >
          <MDBTreeview
            theme='colorful'
            header='Folders'
            className='border-secondary w-100 '
            getValue={value => console.log(value)}
          >
            <MDBTreeviewList icon='envelope-open' title='Mail' far>
              <MDBTreeviewItem icon='address-book' title='Contact' far />
              <MDBTreeviewItem icon='bell' title='Offer' far />
              <MDBTreeviewList icon='calendar' title='Calendar' far>
                <MDBTreeviewItem icon='clock' title='Deadlines' far />
                <MDBTreeviewItem icon='users' title='Meetings' />
                <MDBTreeviewItem icon='basketball-ball' title='Workouts' />
                <MDBTreeviewItem icon='mug-hot' title='Events' />
              </MDBTreeviewList>
            </MDBTreeviewList>
            <MDBTreeviewList title='Inbox' far>
              <MDBTreeviewItem title='Admin' far />
              <MDBTreeviewItem title='Corporate' far />
              <MDBTreeviewItem title='Finance' far />
              <MDBTreeviewItem title='Other' far />
            </MDBTreeviewList>
            <MDBTreeviewList icon='gem' title='Favourites' far>
              <MDBTreeviewItem icon='pepper-hot' title='Restaurants' />
              <MDBTreeviewItem icon='eye' title='Places' far />
              <MDBTreeviewItem icon='gamepad' title='Games' />
              <MDBTreeviewItem icon='cocktail' title='Cocktails' />
              <MDBTreeviewItem icon='pizza-slice' title='Food' />
            </MDBTreeviewList>
            <MDBTreeviewItem icon='comment' title='Notes' far />
            <MDBTreeviewItem icon='cog' title='Settings' />
            <MDBTreeviewItem icon='desktop' title='Devices' />
            <MDBTreeviewItem icon='trash-alt' title='Deleted items' />
          </MDBTreeview>
        </MDBCol>
      </MDBContainer>
    );
  
}

export default TreeViweProducts;
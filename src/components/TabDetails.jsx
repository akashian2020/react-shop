import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

class TabDetails extends Component {
  state = {
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggleOuterTabs = (tab) => (e) => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab,
      });
    }
  };

  toggleInnerPills = (tab) => (e) => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab,
      });
    }
  };
  

  render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" color="primary">
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItemOuterTabs === "1"}
              onClick={this.toggleOuterTabs("1")}
              role="tab"
            >
              <MDBIcon icon="user" /> مشخصات
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItemOuterTabs === "2"}
              onClick={this.toggleOuterTabs("2")}
              role="tab"
            >
              <MDBIcon icon="heart" /> نظرات کاربران
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItemOuterTabs === "3"}
              onClick={this.toggleOuterTabs("3")}
              role="tab"
            >
              <MDBIcon icon="heart" /> نقد و بررسی
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItemOuterTabs === "4"}
              onClick={this.toggleOuterTabs("4")}
              role="tab"
            >
              <MDBIcon icon="heart" /> ثبت نظر
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card mb-5"
          activeItem={this.state.activeItemOuterTabs}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            1
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            2
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            fuckme
          </MDBTabPane>
          <MDBTabPane tabId="4" role="tabpanel">
            fuckme
          </MDBTabPane>
        
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabDetails;

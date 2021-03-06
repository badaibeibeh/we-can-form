import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
  MDBJumbotron, MDBInput, MDBAnimation
} from "mdbreact";

export default class Hobby extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>6. What’s your <u>hobby</u> ?</h3>
                <MDBInput size="lg" />
                <MDBBtn
                  type="button"
                  color="info"
                >
                  Next
                </MDBBtn>
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

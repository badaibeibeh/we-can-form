import React, { Component } from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn,
  MDBJumbotron, MDBInput, MDBAnimation,
  MDBProgress, MDBIcon
} from "mdbreact";
import Modal from './Modal';

export default class Interest extends Component {

  state = {
    modal: false
  }

  showModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBAnimation reveal type="fadeInLeft">
              <MDBJumbotron>
                <h3>7. What’s something you’re really <u>interest</u> right now?</h3>
                <MDBInput size="lg" />
                <MDBBtn
                  type="button"
                  color="indigo"
                  onClick={this.showModal}
                >
                  <MDBIcon far icon="paper-plane" />  Submit
                </MDBBtn>
              </MDBJumbotron>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <Modal modal={this.state.modal} toggle={this.showModal}/>
        <MDBProgress material preloader />
      </MDBContainer>
    )
  }
}

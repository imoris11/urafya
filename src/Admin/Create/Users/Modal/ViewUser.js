import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Picture from '../../../../assets/images/cardi_b.jpg';
  
const ViewUserModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">View User's Information </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                        <div className="mycard card border-left-success shadow py-2">
                            <img src={Picture} className="card-img-top"/>
                        </div>
                        </div>
            <div className="col-xl-9 col-md-6">
                <p>
                    <b className="text-primary">Fullname:</b> Diamond Rachel Rihanna
                    <br></br>
                    <b className="text-primary">Position:</b> Doctor
                    <br></br>
                    <b className="text-primary">Gender:</b> Female
                    <br></br>
                    <b className="text-primary">Date of Birth:</b> 26/02/1992
                    <br></br>
                    <b className="text-primary">Email:</b> drih288@gmail.com
                    <br></br>
                    <b className="text-primary">Phone Number:</b> +25479123478
                    <br></br>
                    <b className="text-primary">National ID Number:</b> 12345678
                    <br></br>
                    <b className="text-primary">Address:</b> 26 Oakland Road, Free Avenue, Nairobi, Kenya
                    <br></br>
                    <b className="text-primary">Date Registered:</b> 24th June, 2019
                    <br></br>
                </p>
                        

            </div>
            
            </div>
      </Modal.Body>
      <Modal.Footer>
             <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
export default ViewUserModal;
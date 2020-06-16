import React from "react";
import Modal from "react-bootstrap/Modal";

const ViewUserModal = (props) => {
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
              <img
                src={props.user.biodata.general.imageUri}
                className="card-img-top"
                alt="user profile"
              />
            </div>
          </div>
          <div className="col-xl-9 col-md-6">
            <p>
              <b className="text-primary">Fullname:</b>{" "}
              {props.user.biodata.general.firstName}{" "}
              {props.user.biodata.general.lastName}
              <br></br>
              <b className="text-primary">Position:</b> {props.user.role}
              <br></br>
              <b className="text-primary">Gender:</b> {props.user.gender}
              <br></br>
              <b className="text-primary">Date of Birth:</b>{" "}
              {props.user.biodata.general.dob}
              <br></br>
              <b className="text-primary">Email:</b> {props.user.email}
              <br></br>
              <b className="text-primary">Phone Number:</b>{" "}
              {props.user.phoneNumber}
              <br></br>
              <b className="text-primary">National ID Number:</b>{" "}
              {props.user.nationalId}
              <br></br>
              <b className="text-primary">Address:</b>{" "}
              {props.user.biodata.general.address}
              <br></br>
              <b className="text-primary">Date Registered:</b>{" "}
              {props.user.dateRegistered}
              <br></br>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={props.onHide}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ViewUserModal;

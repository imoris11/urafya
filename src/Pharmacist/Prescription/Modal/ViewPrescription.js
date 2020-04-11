import React  from "react";
import Modal from "react-bootstrap/Modal";
import PrescriptionPicture from "../../../assets/images/cardi_b.jpg";
  
const ViewPrescriptionModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">View Prescription Information </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="mycard card border-left-success shadow py-2">
                        <img src={PrescriptionPicture} className="card-img-top"/>
                    </div>
                    </div>
                <div className="col-xl-9 col-md-6">
                    <p>
                        <b className="text-primary">Name:</b> Paracetamol
                        <br></br>
                        <b className="text-primary">Type:</b> Oral Drugs
                        <br></br>
                        <b className="text-primary">Presentation:</b> 500 mg tab
                        <br></br>
                        <b className="text-primary">Price:</b> Ksh 1,000.00
                        <br></br>
                        <b className="text-primary">Description;</b>For Headaches
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
export default ViewPrescriptionModal;
import React  from "react";
import Modal from "react-bootstrap/Modal";
import SymptomPicture from "../../../../assets/images/shoulder.jpeg";
  
const ViewSymptomModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">View Symptom Information </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="mycard card border-left-success shadow py-2">
                        <img src={SymptomPicture} className="card-img-top"/>
                    </div>
                    </div>
                <div className="col-xl-9 col-md-6">
                    <p>
                        <b className="text-primary">Name:</b> Sharp Pain
                        <br></br>
                        <b className="text-primary">Body Part:</b> Left Shoulder
                            <br></br>
                        <b className="text-primary">Description:</b> Sharp Pain that is too painful too move the shoulder
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
export default ViewSymptomModal;
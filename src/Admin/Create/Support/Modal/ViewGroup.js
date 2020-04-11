import React  from "react";
import Modal from "react-bootstrap/Modal";
  
const ViewGroupModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">View Group Information </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                      <i className="fas fa-comments"></i>
                    </div>
                  <div className="col-xl-9 col-md-6">
                      <p>
                          <b className="text-primary">Name:</b> AA
                            <br></br>
                          <b className="text-primary">Admin:</b> Doctor - Diamond Rihanna
                            <br></br>
                          <b className="text-primary">Description:</b> For Alcoholics
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
export default ViewGroupModal;
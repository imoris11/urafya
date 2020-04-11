import React  from "react";
import Modal from "react-bootstrap/Modal";
import Picture from '../../../../../assets/images/cardi_b.jpg';
  
const ViewCommentModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <h5 className="modal-title">View Comments </h5>
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
            <p> Comments</p>
             Add Comment
        </div>
       </div>
      </Modal.Body>
      <Modal.Footer>
             <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
export default ViewCommentModal;
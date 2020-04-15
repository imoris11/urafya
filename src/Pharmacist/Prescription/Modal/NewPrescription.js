import React, {Component}  from "react";
import Modal from "react-bootstrap/Modal";
  
export class NewPrescriptionModal extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            type: '',
            presentation:'',
            description: '',
            price:'',
            image: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };



    render() {
      

        return (
            <Modal
                {...this.props}
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
                    <div className="modal-body" id="orderDetails">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <form className="" method="POST" action=">" id="regform" name="regform" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pr-50">
                                                <label for="pname">Name:</label>
                                                <input type="text" className="form-control" id="pname" name="pname" placeholder="e.g. Paracetamol" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pl-50">
                                                <label for="ptype">Type</label>
                                                <select className="form-control" name="type" id="type" value={this.state.type} onChange={this.handleChange}>
                                                    <option className="pl-20" selected>--Select--</option>
                                                    <option value="Oral Drugs">Oral Drugs</option>
                                                    <option value="Injectable Drugs">Injectable Drugs</option>
                                                    <option value="Infusion Fluids">Infusion Fluids</option>
                                                    <option value="Vaccines, Immunoglobulins and Antisera">Vaccines, Immunoglobulins and Antisera</option>
                                                    <option value="Drugs for external use and antiseptics">Drugs for external use and antiseptics</option>
                                                    <option value="Disinfectants">Disinfectants</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pr-50">
                                                <label for="ppres">Presentation:</label>
                                                <input type="text" className="form-control" id="presentation" name="presentation" placeholder="e.g. 500 mg tab" required value={this.state.presentation} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pl-50">
                                                <label for="pdesc">Description</label>
                                                <textarea rows="3" type="text" className="form-control" name="description" id="description" placeholder="" required value={this.state.description} onChange={this.handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pr-50">
                                                <label for="pprice">Price:</label>
                                                <input type="text" className="form-control" id="price" name="price" placeholder="" required value={this.state.price} onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-row">
                                            <div className="col-md-12 mb-15 pl-50">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        Select Image<input type="file" className="upload" name="image" id="image" value={this.state.image} onChange={this.handleChange}/>
                                                    </div>
                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                    <br />
                                    <div className="d-flex">
                                        <button type="submit" className="btn btn-primary mybtn" id="btnreg" name="btnreg"><i className="fas fa-fw fa-save"></i> Add Prescription</button>
                                    </div>
                    
                                    <input type="hidden" name="MM_insert" value="regform" />
        
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default NewPrescriptionModal;
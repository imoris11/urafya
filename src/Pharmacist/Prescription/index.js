import React from "react";
import Pagination from "../../components/organisms/pagination";
import ShowSearch from "../../components/organisms/show_search";
import Button from "../../components/atoms/Button";
import NewPrescriptionModal from './Modal/NewPrescription';
import ViewPrescriptionModal from './Modal/ViewPrescription';


 export default function Prescription(props)  {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Prescription</h1>
          <Button             
            onClick={() => setModalShow(true)}
            title="  New Prescription"
            showIcon={true}
            icon={"fas fa-medkit fa-sm text-white-50"}
            />  
            <NewPrescriptionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />        
          
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Manage Prescription
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <ShowSearch />

              <table
                className="table"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <th className="text-dark-100">Name</th>
                  <th className="text-dark-100">Type</th>
                  <th className="text-dark-100">Presentation</th>
                  <th className="text-dark-100">Price</th>
                  <th className="text-dark-100">Status</th>
                  <th className="text-dark-100">Actions</th>
                </thead>
                <tbody>
                  <tr className="odd gradeX">
                    <td>
                      <div
                        className="btn btn-link circle action-button ml-15 mr-10"
                        onClick={() => setModalShow2(true)}
                      >
                        <i className="fa fa-eye"></i>
                      </div>
                      <ViewPrescriptionModal
                        show={modalShow2}
                        onHide={() => setModalShow2(false)}
                        />
                      {" "}
                      Paracetamol
                    </td>

                    <td>Tablet</td>
                    <td>500 mg tab</td>
                    <td>24/06/2019 17:16</td>
                    <td>Approved</td>
                    <td className="pa-0">
                      <form method="post" action="" name="buy" id="buy">
                        <button
                          type="submit"
                          className="btn btn-danger circle action-button"
                        >
                          <i className="fa fa-trash"></i> Remove
                        </button>
                        <input
                          name="buyalbum"
                          type="hidden"
                          id="buyalbum"
                          value=""
                        />
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    );
  }


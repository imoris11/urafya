import React from "react";
import Pagination from "../../../components/organisms/pagination";
import Button from '../../../components/atoms/Button';
import ShowSearch from '../../../components/organisms/show_search';
import NewHelplineModal from './Modal/NewHelpline';

export default function Emergency(props)  {
  
  const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Emergency Helplines</h1>
          <Button             
                    onClick={() => setModalShow(true)}
                    title="New Helpline"
                    showIcon={true}
                    icon={"fas fa-comments fa-sm text-white-50"}
                  />  
                  <NewHelplineModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />      
         
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Manage Helpline
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
                  <th className="text-dark-100">Phone Number</th>
                  <th className="text-dark-100">USSD/Text Number</th>
                  <th className="text-dark-100">Actions</th>
                </thead>
                <tbody>
                  <tr className="odd gradeX">
                    <td>Police </td>
                    <td>999</td>
                    <td>1121</td>
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


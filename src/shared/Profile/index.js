import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/images/cardi_b.jpg";
import Button from '../../components/atoms/Button';
import EditUserModal from './Modal/EditUser';
import ChangePasswordModal from './Modal/ChangePassword';

export default function Profile(props) {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Profile</h1>
                  <Button             
                    onClick={() => setModalShow(true)}
                    title="Edit Personal Information"
                    showIcon={true}
                    icon={"fas fa-pencil-alt fa-sm text-white-50"}
                  />  
                  <EditUserModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />                         
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Profile
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-3 col-md-6 mb-4">
                        <div className="mycard card border-left-success shadow py-2">
                          <img src={Picture} className="card-img-top" />
                        </div>
                      </div>
                      <div className="col-xl-9 col-md-6">
                        <p>
                          <b className="text-primary">Fullname:</b> Diamond
                          Rachel Rihanna
                          <br></br>
                          <b className="text-primary">Position:</b> Doctor
                          <br></br>
                          <b className="text-primary">Gender:</b> Female
                          <br></br>
                          <b className="text-primary">Date of Birth:</b>{" "}
                          26/02/1992
                          <br></br>
                          <b className="text-primary">Email:</b>{" "}
                          drih288@gmail.com
                          <br></br>
                          <b className="text-primary">Phone Number:</b>{" "}
                          +25479123478
                          <br></br>
                          <b className="text-primary">
                            National ID Number:
                          </b>{" "}
                          12345678
                          <br></br>
                          <b className="text-primary">Address:</b> 26 Oakland
                          Road, Free Avenue, Nairobi, Kenya
                          <br></br>
                          <b className="text-primary">Date Registered:</b> 24th
                          June, 2019
                          <br></br>
                        </p>

                        <Button             
                            onClick={() => setModalShow2(true)}
                            title="Change Password"
                            showIcon={true}
                            icon={"fas fa-key fa-sm text-white-50"}
                          />  
                          <ChangePasswordModal
                          show={modalShow2}
                          onHide={() => setModalShow2(false)}
                          />    
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }


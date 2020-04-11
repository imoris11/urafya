import React from "react";
import { Link } from "react-router-dom";
import Button from '../../components/atoms/Button';
import EditAboutModal from './Modal/EditAbout';


export default function About(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
      
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">About UR AFYA</h1>
                <Button             
                    onClick={() => setModalShow(true)}
                    title="Add About"
                    showIcon={true}
                    icon={"fas fa-pencil-alt fa-sm text-white-50"}
                  />  
                  <EditAboutModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />                     
                </div>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      General Information
                    </h6>
                  </div>
                  <div className="card-body">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              About Us
                            </button>
                          </h5>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            This solution is a web and mobile application to
                            help improve healthcare in Kenya. The web
                            application is accessible to Doctors, Pharmacist and
                            Healthy Grocery Sellers who will attend to patient
                            needs and deliveries. The mobile application is
                            solely accessible to only potential patients who
                            prefer to use their mobile devices than physically
                            going to a hospital. This app ill help reduce
                            healthcare problems such as time, slow payment
                            methods, inaccessibility to patient file and much
                            more.
                            <div
                             onClick={() => setModalShow(true)}
                              className="mybtncurve btn btn-primary shadow-sm"
                            >
                              <i className="fas fa-pencil-alt fa-sm text-white-50"></i>{" "}
                              Edit About Information
                            </div>
                           <EditAboutModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />  
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Terms & Conditions
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          <div
                             onClick={() => setModalShow(true)}
                              className="mybtncurve btn btn-primary shadow-sm"
                            >
                              <i className="fas fa-pencil-alt fa-sm text-white-50"></i>{" "}
                               Edit Terms & Condition
                            </div>
                           <EditAboutModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />  
                            
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingThree">
                          <h5 class="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Help & Support
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                           <div
                             onClick={() => setModalShow(true)}
                              className="mybtncurve btn btn-primary shadow-sm"
                            >
                              <i className="fas fa-pencil-alt fa-sm text-white-50"></i>{" "}
                               Edit Help & Support
                            </div>
                           <EditAboutModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />  
                            
                          </div>
                        </div>
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

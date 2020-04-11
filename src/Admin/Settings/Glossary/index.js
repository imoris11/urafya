import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import Button from '../../../components/atoms/Button';
import NewGlossaryModal from './Modal/NewGlossary';
import EditGlossaryModal from './Modal/EditGlossary';

export default function Glossary(props)  {
  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Glossary</h1>
                  <Button             
                    onClick={() => setModalShow(true)}
                    title="New Medical Term"
                    showIcon={true}
                    icon={"fas fa-comments fa-sm text-white-50"}
                  />  
                  <NewGlossaryModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />         
                 
                </div>

                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Manage Glossary
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
                          <th className="text-dark-100">Description</th>
                          <th className="text-dark-100">Actions</th>
                        </thead>
                        <tbody>
                          <tr className="odd gradeX">
                            <td>
                              <div
                                className="btn btn-link circle action-button ml-15 mr-10"
                                onClick={() => setModalShow2(true)}
                              >
                                <i className="fa fa-pencil-alt"></i>
                              </div>
                              <EditGlossaryModal
                                show={modalShow2}
                                onHide={() => setModalShow2(false)}
                                />{" "}
                              ACTH (Adrenocorticotropic hormone){" "}
                            </td>
                            <td>
                              Hormone produced by the pituitary gland. It
                              stimulates adrenal glands to secrete the hormones
                              they produce, including cortisone and cortisol.
                            </td>
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
            </div>
          </div>
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
      </div>
    );
  }


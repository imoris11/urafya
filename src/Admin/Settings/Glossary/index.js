import React, { Component } from "react";
import Pagination from "../../../components/organisms/pagination";
import { Link } from "react-router-dom";
import ShowSearch from "../../../components/organisms/show_search";
import Button from "../../../components/atoms/Button";
import NewGlossaryModal from "./Modal/NewGlossary";
import EditGlossaryModal from "./Modal/EditGlossary";
import { connect } from "react-redux";
import selectors from "./redux/selectors";
import { fetchGlossary, deleteWord } from "./redux/actions";
import PropTypes from "prop-types";

export class Glossary extends Component {
  state = {
    modalShow2: false,
    modalShow: false,
    word: {},
  };

  static propTypes = {
    fetchGlossary: PropTypes.func.isRequired,
    deleteWord: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorLoading: PropTypes.bool.isRequired,
    words: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { words } = this.props;
    if (words.length > 0) return;
    this.props.fetchGlossary();
  }
  render() {
    const { modalShow, modalShow2 } = this.state;
    const { isLoading, words } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Glossary</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="New Medical Term"
                    showIcon={true}
                    icon={"fas fa-comments fa-sm text-white-50"}
                  />
                  <NewGlossaryModal
                    show={modalShow}
                    onHide={() => this.setState({ modalShow: false })}
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
                      {isLoading && (
                        <p className="text-info text-center">Loading</p>
                      )}
                      <table
                        className="table table-striped"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead className="thead-light">
                          <tr>
                            <th className="text-dark-100">Name</th>
                            <th className="text-dark-100">Description</th>
                            <th className="text-dark-100">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {words.map((word) => (
                            <tr key={word._id} className="odd gradeX">
                              <td>
                                <div
                                  className="btn btn-link circle action-button ml-15 mr-10"
                                  onClick={() =>
                                    this.setState({ modalShow2: true, word })
                                  }
                                >
                                  <i className="fa fa-pencil-alt"></i>
                                </div>

                                {word.name}
                              </td>
                              <td>{word.description}</td>
                              <td className="pa-0">
                                <button
                                  onClick={() =>
                                    this.props.deleteWord(word._id)
                                  }
                                  className="btn btn-danger circle action-button"
                                >
                                  <i className="fa fa-trash"></i> Remove
                                </button>
                              </td>
                            </tr>
                          ))}
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
        <EditGlossaryModal
          show={modalShow2}
          word={this.state.word}
          onHide={() => this.setState({ modalShow2: false })}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGlossary: () => dispatch(fetchGlossary()),
    deleteWord: (id) => dispatch(deleteWord(id)),
  };
};
export default connect(selectors, mapDispatchToProps)(Glossary);

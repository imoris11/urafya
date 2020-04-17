import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atoms/Button";
import EditAboutModal from "./Modal/EditAbout";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { fetchAbout } from "./redux/actions";
import { connect } from "react-redux";
import selectors from "./redux/selectors";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <h5 className="mb-0" onClick={decoratedOnClick}>
      <button className="btn btn-link">{children}</button>
    </h5>
  );
}

export class About extends Component {
  state = {
    modalShow: false,
  };
  static propTypes = {
    fetchAbout: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    about: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    const { modalShow } = this.state;
    const { about, isLoading } = this.props;
    return (
      <div id="page-top">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">About UR AFYA</h1>
                  <Button
                    onClick={() => this.setState({ modalShow: true })}
                    title="Edit About"
                    showIcon={true}
                    icon={"fas fa-pencil-alt fa-sm text-white-50"}
                  />
                </div>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      General Information
                    </h6>
                    {isLoading && (
                      <p className="text-info text-center">Loading</p>
                    )}
                  </div>

                  <div className="card-body">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="0">About Us</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>{about.aboutUs}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="1">
                            {" "}
                            Terms & Conditions
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>{about.termsAndCondition}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <CustomToggle eventKey="2">
                            {" "}
                            Help & Support
                          </CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>{about.helpAndSupport}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
        <EditAboutModal
          show={modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAbout: () => dispatch(fetchAbout()),
  };
};
export default connect(selectors, mapDispatchToProps)(About);

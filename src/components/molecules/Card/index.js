import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
  };

  render() {
    const { title, icon, count } = this.props;

    return (
      <div className="col-xl-3 col-md-6 col-sm-6 mb-4">
        <div className="mycard card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {title}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {count}
                </div>
              </div>
              <div className="col-auto">
                <i className={icon}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

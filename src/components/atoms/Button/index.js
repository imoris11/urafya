import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    showIcon: PropTypes.bool,
  };

  static defaultProps = {
    showIcon: false,
  };

  render() {
    const { icon, showIcon, onClick, title } = this.props;
    return (
      <div onClick={onClick} className="mybtncurve btn btn-primary shadow-sm">
        {showIcon && <i className={icon}></i>}
        {title}
      </div>
    );
  }
}

export default Button;

import React from "react";
import PropTypes from "prop-types";

export const FlatButton = ({ onClick, className, icon, title }) => (
  <button onClick={onClick} className={className}>
    {icon && <i className={icon}></i>} {title}
  </button>
);

FlatButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
};

FlatButton.defaultProps = {
  icon: "",
};

export default FlatButton;

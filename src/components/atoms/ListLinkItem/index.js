import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LinkListItem extends Component {
  static propTypes = {
    linkText: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    const { icon, linkText, link } = this.props;
    return (
      <li className="nav-item">
        <Link className="nav-link" to={link}>
          <i className={icon}></i>
          <span>{linkText}</span>
        </Link>
      </li>
    );
  }
}

export default LinkListItem;

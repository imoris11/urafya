import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LinkListItem from "../../components/atoms/ListLinkItem";
import { connect } from "react-redux";
import { LOG_OUT } from "../../Authenication/redux/actions";

class Sidebar extends Component {
  logout = () => {
    localStorage.removeItem("user");
    this.props.dispatch({ type: LOG_OUT });
    window.location.href = "/";
  };

  render() {
    return (
      <div id="page-top" style={{ backgroundColor: "#3db190" }}>
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to="/"
              style={{ background: "#fff", color: "#595b68" }}
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <span className="">
                  <img src={Logo} className="img-fluid mylogoicon" />
                </span>
              </div>
              <div className="sidebar-brand-text mx-3">UR AFYA</div>
            </Link>

            <hr className="sidebar-divider my-0" />
            <LinkListItem link="/" linkText="Home" icon="fas fa-fw fa-home" />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Create</div>

            <LinkListItem
              link="/prescription"
              linkText="Prescriptions"
              icon="fas fa-fw fa-users"
            />

            <LinkListItem
              link="/doctor/prescription"
              linkText="Doctors's Prescriptions"
              icon="fas fa-fw fa-users"
            />

            <LinkListItem
              link="/payment"
              linkText="Payment"
              icon="fas fa-fw fa-credit-card"
            />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Settings</div>
            <LinkListItem
              link="/about"
              linkText="About UR AFYA"
              icon="fas fa-fw fa-cogs"
            />

            <LinkListItem
              link="/profile"
              linkText="Profile"
              icon="fas fa-fw fa-user"
            />

            <li className="nav-item">
              <Link onClick={this.logout} className="nav-link" to="/">
                <i className="fas fa-fw fa-user-lock"></i>
                <span>Logout</span>
              </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
              <button
                className="rounded-circle border-0"
                id="sidebarToggle"
              ></button>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect()(Sidebar);

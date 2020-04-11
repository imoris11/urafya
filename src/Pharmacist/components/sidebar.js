import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div id="page-top"  style={{backgroundColor:'#3db190'}}>
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

            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                <i className="fas fa-fw fa-home"></i>
                <span>Home</span>
              </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Create</div>

            <li className="nav-item">
              <Link className="nav-link" to="/pharmacist/prescription">
                <i className="fas fa-fw fa-users"></i>
                <span>Prescriptions</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pharmacist/doctor/prescription">
                <i className="fas fa-fw fa-users"></i>
                <span>Doctor's Prescriptions</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pharmacist/payment">
                <i className="fas fa-fw fa-credit-card"></i>
                <span>Payment</span>
              </Link>
            </li>

           
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Settings</div>

            <li className="nav-item">
              <Link className="nav-link" to="/pharmacist/about">
                <i className="fas fa-fw fa-cogs"></i>
                <span>About UR AFYA</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pharmacist/profile">
                <i className="fas fa-fw fa-user"></i>
                <span>Profile</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
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
export default Sidebar;

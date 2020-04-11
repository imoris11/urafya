import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LinkListItem from "../../components/atoms/ListLinkItem";

class Sidebar extends Component {
  render() {
    return (
      <div id="page-top" style={{backgroundColor:'#3db190'}}>
        <div id="wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to="ahome.html"
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

            <LinkListItem
              linkText="Consultants"
              link="/doctor/consultants"
              icon="fas fa-fw fa-users"
            />

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/support">
                <i className="fas fa-fw fa-comments"></i>
                <span>My Support Groups</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/payment">
                <i className="fas fa-fw fa-credit-card"></i>
                <span>Payment</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/emergency">
                <i className="fas fa-fw fa-phone"></i>
                <span>Emergency Helpline</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/taxiservices">
                <i className="fas fa-fw fa-ambulance"></i>
                <span>Taxi Services</span>
              </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Settings</div>

            <LinkListItem
              linkText="Glossary"
              link="/doctor/glossary"
              icon="fas fa-fw fa-book"
            />

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/about">
                <i className="fas fa-fw fa-cogs"></i>
                <span>About UR AFYA</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/doctor/profile">
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

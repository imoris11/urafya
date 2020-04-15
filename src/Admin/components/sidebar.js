import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LinkListItem from "../../components/atoms/ListLinkItem";
import { LOG_OUT } from "../../Authenication/redux/actions";
import { connect } from "react-redux";

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
            <LinkListItem linkText="Home" link="/" icon="fas fa-fw fa-home" />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Create</div>

            <LinkListItem
              linkText="Users"
              link="/users"
              icon="fas fa-fw fa-users"
            />

            <LinkListItem
              linkText="Support Groups"
              link="/support"
              icon="fas fa-fw fa-comments"
            />
            <LinkListItem
              linkText="Payments"
              link="/payment"
              icon="fas fa-fw fa-credit-card"
            />
            <LinkListItem
              linkText="Emergency Helpline"
              link="/emergency"
              icon="fas fa-fw fa-phone"
            />
            <LinkListItem
              linkText="Taxi Services"
              link="/taxiservices"
              icon="fas fa-fw fa-ambulance"
            />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">View Store</div>

            <LinkListItem
              linkText="Prescription"
              link="/prescription"
              icon="fas fa-fw fa-briefcase-medical"
            />

            <LinkListItem
              linkText="Grocery"
              link="/grocery"
              icon="fas fa-fw fa-shopping-cart"
            />

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Settings</div>

            <LinkListItem
              linkText="Glossary"
              link="/glossary"
              icon="fas fa-fw fa-book"
            />

            <LinkListItem
              linkText="About UR AFYA"
              link="/about"
              icon="fas fa-fw fa-cogs"
            />

            <LinkListItem
              linkText="Profile"
              link="/profile"
              icon="fas fa-fw fa-user"
            />

            <li className="nav-item">
              <Link onClick={this.logout} className="nav-link" to="#">
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

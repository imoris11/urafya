import React, { Component } from "react";
import Sidebar from "../sidebar";
import UserNav from "../../../components/organisms/UserNav";
import Footer from "../../../components/organisms/footer";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Header extends Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <UserNav />
            <div id="content">{this.props.children}</div>
            <Footer />
          </div>
        </div>
        <Link className="scroll-to-top rounded" to="/page-top">
          <i className="fas fa-angle-up"></i>
        </Link>
        <ToastContainer />
      </div>
    );
  }
}

export default Header;

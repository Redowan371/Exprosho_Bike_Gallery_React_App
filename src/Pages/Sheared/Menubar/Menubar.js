import "./Menubar.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import defaultPic from "../../../images/guest.png";

const Menubar = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="transparent"
          variant="dark"
          className="px-3 logo-bg"
        >
          <Navbar.Brand>
            <Link to="/home" className="logo">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="link-item" to="/home">
                Home
              </Link>
              <Link className="link-item" to="/about">
                About
              </Link>
              <Link className="link-item" to="/products">
                Products
              </Link>
              {user?.email && (
                <Link className="link-item" to="/dashboard">
                  Dashboard
                </Link>
              )}
              {user?.email ? (
                <button className="log-btn" onClick={logOut}>
                  Log Out
                </button>
              ) : (
                <Link className="link-item" to="/login">
                  Login
                </Link>
              )}
              {user?.email ? (
                <div className="login-information">
                  {user.photoURL ? (
                    <img title={user.displayName} src={user.photoURL} alt="" />
                  ) : (
                    <img title={user.displayName} src={defaultPic} alt="" />
                  )}
                </div>
              ) : (
                <small>{""}</small>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Menubar;

//  {user?.email ? (
//         <Button onClick={logOut} color="inherit">
//           Log Out
//         </Button>
//       ) : (
//         <Link to="/login">
//           <Button color="inherit">Login</Button>
//         </Link>
//       )}

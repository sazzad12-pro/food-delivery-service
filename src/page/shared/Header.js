import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import { AuthContext } from "../../UseContext/UseContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // singout
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto home">
              <Link
                to="/"
                className="me-5 text-decoration-none fw-bold text-dark"
              >
                Home
              </Link>
              <Link
                className="text-decoration-none fw-bold text-dark"
                to="blog"
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <Link
                    to="/order"
                    className="text-decoration-none me-3 fw-bold text-dark "
                  >
                    My Service
                  </Link>
                  <Link
                    to="/review"
                    className="text-decoration-none me-3 fw-bold text-dark "
                  >
                    Review
                  </Link>
                  <Link
                    onClick={handleLogOut}
                    className="text-decoration-none fw-bold text-dark"
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-decoration-none fw-bold text-dark"
                >
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

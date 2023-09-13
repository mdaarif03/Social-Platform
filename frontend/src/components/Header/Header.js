import React, { useEffect } from "react";
import {
  Form,
  // Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../actions/userAction";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(Logout());
  };

  useEffect(() => {}, [userInfo]);

  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Write Note</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  onChange={(e)=>setSearch(e.target.value)}
                />
              </Form> */}
              {userInfo && (
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    exact="true"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Form>
              )}
            </Nav>
            <Nav>
              {userInfo ? (
                <>
                  <Nav.Link href="/mynotes">My Notes</Nav.Link>
                  <NavDropdown
                    title={`${userInfo.name}`}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/profile">
                      My Profile
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

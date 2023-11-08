import { useEffect, useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  // const router = useRouter();
  //const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const [userId, setUserId] = useState("");
  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <header className="guilt-free-header">
      <Container>
        <Row>
          <Col>
            <Navbar expand="lg" collapseOnSelect className="navBar">
              <Link href={""}>
                <Navbar.Brand>
                  <img src="/images/header/Group1092.png" />
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle
                aria-controls="navbarSupportedContent"
                onClick={toggleOffCanvas}
              />

              <Offcanvas
                show={show}
                onHide={handleClose}
                responsive="lg"
                className="mobile-menu"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <img src="/images/header/Group1092.png" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Navbar expand="lg" className="">
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link2">The Promise</Nav.Link>
                        <Nav.Link href="#link3">Food For</Nav.Link>
                        <Nav.Link href="#link4">Spotlight</Nav.Link>
                        <Nav.Link href="#link5">Who We Are</Nav.Link>
                        <div className="guilt-free-header--contact-btn">
                          <Link href="">
                            <button className="guilt-free-button guilt-free-header--rich-us guilt-free--transparent">
                              REACH US
                            </button>
                          </Link>
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </Offcanvas.Body>
              </Offcanvas>

            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

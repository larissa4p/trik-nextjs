import Container from "react-bootstrap/Container";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Brand from "../../../public/images/brand.png";
import styles from "../../styles/Navbar.module.css";

const nav = () => {
  return (
    <>
      {/* DESKTOP */}
      <Navbar
        className={`${styles} d-none d-md-block d-lg-block`}
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              className={styles.brandd}
              src={Brand}
              width="200px"
              height="30px"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex justify-content-end"
          >
            <Nav>
              <Nav.Link className="p-2" href="#features">
                WE ARE TRIK
              </Nav.Link>
              <Nav.Link className="p-2 " href="#features">
                WHAT WE DO
              </Nav.Link>
              <Nav.Link className="p-2 pe-5" href="#features">
                OUR PARTNERS
              </Nav.Link>
              <Button
                className={`${styles.btn_color} `}
                variant="btn btn-outline-secondary text-light rounded-0"
              >
                LET'S TALK
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* MOBILE */}
      <Navbar
        className={`${styles} d-sm-none`}
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              className={styles.brandd}
              src={Brand}
              width="200px"
              height="30px"
              alt=""
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ps-5 ms-5">
              <Nav.Link className="text-light" href="#features">
                WE ARE TRIK
              </Nav.Link>
              <Nav.Link className="text-light" href="#features">
                WHAT WE DO
              </Nav.Link>
              <Nav.Link className="pe-5 text-light" href="#features">
                OUR PARTNERS
              </Nav.Link>
            </Nav>
            <Button
              className={`${styles.btn_color} w-100`}
              variant="btn btn-outline-secondary text-light rounded-0"
            >
              LET'S TALK
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;

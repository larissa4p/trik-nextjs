import Container from "react-bootstrap/Container";
import Image from "next/image";
import LinkedIn from "../../../public/images/LinkedIn.png";
import Twitter from "../../../public/images/Twitter.png";
import Instagram from "../../../public/images/Instagram.png";
import YouTube from "../../../public/images/YouTube.png";
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
        className={`d-sm-none`}
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
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.teste}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="fs-4 px-4 pt-5 mt-5">
              <Nav.Link className={`${styles.bdr_color} text-light pb-4`} href="#features">
                WE ARE TRIK
              </Nav.Link>
              <Nav.Link className={`${styles.bdr_color} text-light pb-4`} href="#features">
                WHAT WE DO
              </Nav.Link>
              <Nav.Link className={`${styles.bdr_color} text-light pb-4`} href="#features">
                OUR PARTNERS
              </Nav.Link>
            </Nav>
            <Button
              className={`${styles.btn_color} m-4`}
              variant="btn btn-outline-secondary text-light rounded-0"
            >
              LET'S TALK
            </Button>
            <div className="d-flex p-4">
              <Nav.Link>
                <Image src={LinkedIn} alt="Icon-linkedin" />
              </Nav.Link>
              <Nav.Link className="px-1">
                <Image src={Twitter} alt="Icon-Twitter" />
              </Nav.Link>
              <Nav.Link className="px-1">
                <Image src={Instagram} alt="Icon-Instagram" />
              </Nav.Link>
              <Nav.Link className="px-1">
                <Image src={YouTube} alt="Icon-YouTube" />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;

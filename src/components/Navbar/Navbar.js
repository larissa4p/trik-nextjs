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
      <Navbar
        className={`${styles} d-none d-sm-block`}
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
          <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
            <Nav>
              <Nav.Link className="p-2" href="#features">WE ARE TRIK</Nav.Link>
              <Nav.Link className="p-2 " href="#features">WHAT WE DO</Nav.Link>
              <Nav.Link className="p-2 pe-5" href="#features">OUR PARTNERS</Nav.Link>
              <Button className={`${styles.btn_color} `} variant="btn btn-outline-secondary text-light rounded-0">
                LET'S TALK
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default nav;

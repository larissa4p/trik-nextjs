import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../../../public/images/LinkedIn.png";
import Twitter from "../../../public/images/Twitter.png";
import Instagram from "../../../public/images/Instagram.png";
import YouTube from "../../../public/images/YouTube.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <section className={styles.bckcolor}>
      <div className={styles.bck}>
        <Container>
          <Row className="py-5">
            <Col md="8" className="offset-md-1">
              <h3 className="fw-bold fs-1">WE ARE TRIK.</h3>
              <p className="fw-semibold">
                It's not magic, but it is <b>SUPER</b>natural!
              </p>
            </Col>
            <Col md="3">
              <div>
                <span className="text-secondary">Support</span>
                <p>
                  <b>hi@trik.digital</b>
                </p>
              </div>
              <div>
                <span className="text-secondary">Phone & Whatsapp</span>
                <p>
                  <b>55 + 619 9929 9999</b>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="offset-md-1">
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md="4" className="offset-md-1">
              <p>©2022 TriK Digital. All rights reserved.</p>
            </Col>
            <Col md="4" className="ps-5">
              <div>
                <Link href="##" className="pe-2">
                  <Image src={LinkedIn} alt="Icon-linkedin" />
                </Link>
                <Link href="/" className="p-2">
                  <Image src={Twitter} alt="Icon-Twitter" />
                </Link>
                <Link href="/" className="p-2">
                  <Image src={Instagram} alt="Icon-Instagram" />
                </Link>
                <Link href="/" className="p-2">
                  <Image src={YouTube} alt="Icon-YouTube" />
                </Link>
              </div>
            </Col>
            <Col md="3" className="">
              <p>Made with🤍by DevSquad</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

import styles from "../../styles/WeAreTrik.module.css";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../../../public/images/LinkedIn.png";
import Twitter from "../../../public/images/Twitter.png";
import Instagram from "../../../public/images/Instagram.png";
import YouTube from "../../../public/images/YouTube.png";
import Chevron from "../../../public/images/Chevron.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeAreTrik() {
  return (
    <section className={`${styles.bck} pt-5`}>
      <Container>
        <Row>
          <Col
            md="5"
            className={`${styles.divdiv} pt-5 d-none d-md-block d-lg-block d-flex flex-column justify-content-center offset-md-1`}
          >
            <h1 className={`${styles.size} fw-bold text-start`}>
              WE ARE <br /> TRIK.
            </h1>
            <p className="fs-4 fw-light">G R O W T H . DIGITAL . AGENCY</p>
          </Col>
          {/* MOBILE */}
          <Col
            sm="5"
            className={`${styles.divdiv}d-block d-sm-none d-flex flex-column justify-content-center offset-md-1`}
          >
            <h1 className={`${styles.size} ps-5 fw-bold text-start`}>
              WE ARE TRIK.
            </h1>
            <p className="fs-6 ps-4 py-3 fw-light">G R O W T H . DIGITAL . AGENCY</p>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="d-flex justify-content-between pe-4 pb-4">
            <div>
              <Link href="/" className="pe-2">
                <Image src={LinkedIn} alt="Icon-linkedin"/>
              </Link>
              <Link href="/" className="p-2">
                <Image src={Twitter} alt="Icon-Twitter"/>
              </Link>
              <Link href="/" className="p-2">
                <Image src={Instagram} alt="Icon-Instagram"/>
              </Link>
              <Link href="/" className="p-2">
                <Image src={YouTube} alt="Icon-YouTube"/>
              </Link>
            </div>
            <div>
              Scroll page <Image src={Chevron} alt="Icon-Chevron"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

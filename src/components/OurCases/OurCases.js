import styles from "../../styles/OurCases.module.css";
import Image from "next/image";
import Img01 from "../../../public/images/frame.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OurCases() {
  return (
    <section className={styles.bckcolor}>
      <Container className="py-5">
        <Row>
          <Col md="7">
            <Image className="img-fluid" src={Img01} alt="image-frame" />
          </Col>
          <Col md="5" className="pt-5">
            <span className={`${styles.tColor} fs-6 fw-bold`}>OUR CASES</span>
            <p className={`${styles.tspace} fs-1 fw-bold pt-4 pb-4`}>Bank of Brazil Media Growth</p>
            <p className="pb-2">
              A successful case, focused on growth and boosting the digital
              presence of the official Bank of Brazil in the digital world.
            </p>
            <Button variant=" btn-outline-secondary text-light rounded-0">Read more</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

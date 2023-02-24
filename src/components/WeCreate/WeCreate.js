import styles from "../../styles/WeCreate.module.css";
import Image from "next/image";
import Img01 from "../../../public/images/icon-plus.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeCreate() {
  return (
    <section className={`${styles.bckcolor} pt-5`}>
      <Container>
        <Row>
          <Col md="11" className="offset-md-1">
            <h3>WE CREATE BIG THINGS WITH</h3>
          </Col>
          <Col md="6" className="offset-md-5 py-5">
            <div className="d-flex justify-content-between">
              <p>DIGITAL MARKETING</p>
              <span><Image src={Img01} alt="Icon"/></span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <p>GROWTH HACKING</p>
              <span><Image src={Img01} alt="Icon"/></span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <p>SOCIAL MEDIA</p>
              <span><Image src={Img01} alt="Icon"/></span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <p>SEO</p>
              <span><Image src={Img01} alt="Icon"/></span>
            </div>
            <hr/>
            <div className="d-flex justify-content-between">
              <p>AD SENSE</p>
              <span><Image src={Img01} alt="Icon"/></span>
            </div>
            <hr/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
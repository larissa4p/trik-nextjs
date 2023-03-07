import styles from "../../styles/Form.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/line.png"
import Img2 from "../../../public/images/Mail.png"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WantForm() {
  return (
    <section id="form" className={`${styles.bckcolor} py-5`}>
      <Container>
        <Row>
          <Col md="5" className="offset-md-1">
            <h3 className="fs-3 fw-bold">Want to boost <br/> your purpose, product or business?</h3>
            <p className="fs-1 fw-bolder mb-0">Let's talk.</p>
            <Image className={`${styles.wImg} img-fluid w-50`} src={Img1} alt="icon"/>
          </Col>
          <Col md="6">
            <Form>
              <Form.Group className="mb-3" controlId="WantFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="WantFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="WantFormMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="Message" />
              </Form.Group>
              <Button variant=" btn-outline-secondary text-light rounded-0 w-100" type="submit">
                <Image className="img-fluid" src={Img2} alt="icon"/> Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WantForm;

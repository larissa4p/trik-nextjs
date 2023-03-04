import styles from "../../styles/Potentialize.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Potentialize() {
  return (
    <section className={styles.bck}>
      <Container className="pt-5">
        <Row className={`d-flex justify-content-center py-5`}>
          {/* DESKTOP */}
          <Col md="5" className="d-none d-md-block d-lg-block offset-md-1">
            <div>
              <h2 className="fw-bold">POTENTIALIZE</h2>
              <h2 className="fw-bold">
                <span className="fs-5 pe-1">AND</span>
                BOOST
              </h2>
              <h2 className={`${styles.circle} ${styles.pos} d-inline-block fw-bold`}>PURPOSES</h2>
              <h2 className={`${styles.wave} ${styles.pos} fw-bold`}><span className="fs-5 pe-1">AND</span>
              BUSINESS.</h2>
              <p className="pt-2">#weareresult.</p>
            </div>
          </Col>
          {/* MOBILE */}
          <Col sm="5" className="ps-5 pb-3 d-block d-sm-none offset-md-1">
            <div>
              <h2 className={`${styles.circle} ${styles.pos} d-inline-block fw-bold`}>POTENTIALIZE</h2>
              <h2 className={`${styles.wave} ${styles.pos} fw-bold`}>
                <span className="fs-5 pe-1">AND</span>
                BOOST
              </h2>
              <div className={styles.span}></div>
              <h2 className="fw-bold">PURPOSES</h2>
              <span className={styles.span2}></span>
              <h2 className="fw-bold"><span className="fs-5 pe-1">AND</span>
              BUSINESS.</h2>
              <p className="pt-2">#weareresult.</p>
            </div>
          </Col>
          <Col md="6" className="text-start px-5">
            <p>
              We were born with the clear objective of enhancing and boosting
              purposes and businesses in the digital world.
            </p>
            <p>
              We are the result of a DNA full of history, success and results!
              Reflection of a vast experience in technological projects 101%
              focused on empathy and commitment. Our technological knowledge
              always puts us one step ahead of the problems, pains and goals to
              be achieved.
            </p>
            <p>
              Our solid foundation is based on commitment to innovation, data
              orientation, concern and obligation to centralize the user in
              decision-making and, above all, we have technology as our greatest
              driving force.
            </p>
            <p>
              We believe that we can transform the world and that anything is
              possible, all it takes is effort and dedication. We have courage,
              dedication, discipline and excellence to transform and be the
              difference.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

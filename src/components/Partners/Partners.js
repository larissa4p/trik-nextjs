import styles from "../../styles/Partners.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
// import Img01 from "../../../public/images/Google.png";
// import Img02 from "../../../public/images/Microsoft.png";
// import Img03 from "../../../public/images/Amazon.png";
// import Img04 from "../../../public/images/Salesforce.png";
import BB from "../../../public/images/banco-do-brasil.png";
import DV from "../../../public/images/devsquad.png";
import Img05 from "../../../public/images/group2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section id="partners" className={styles.bckcolor}>
        {/* DESKTOP */}
        <Container className="d-none d-md-block d-lg-block text-light pb-5">
          <Row>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h3>MORE THAN CUSTOMERS, OUR PARTNERS.</h3>
              <p>
                Some of our partners who believe and trust in the results we
                deliver
              </p>
            </Col>
          </Row>
          <Row>
            <Slider {...settings} className="p-3">
              <Col className="p-3 ">
                <Image className="img-fluid" src={BB} alt="Icon" />
              </Col>
              <Col className="p-3 ">
                <Image className="img-fluid" src={DV} alt="Icon" />
              </Col>
              <Col className="p-3 ">
                <Image className="img-fluid" src={BB} alt="Icon" />
              </Col>
              <Col className="p-3 ">
                <Image className="img-fluid" src={DV} alt="Icon" />
              </Col>
            </Slider>
          </Row>
        </Container>
        {/* MOBILE */}
        <Container className="d-block d-sm-none text-light py-5 ">
          <Row className="px-4 text-center">
            <Col>
              <h3>
                MORE THAN CUSTOMERS, <br />
                OUR PARTNERS.
              </h3>
              <p>
                Some of our partners who believe and trust in the results we
                deliver
              </p>
            </Col>
          </Row>
          <Row>
            <Slider {...settings} className="p-3">
              <Col className="p-3">
                <Image className="img-fluid" src={BB} alt="Icon" />
              </Col>
              <Col className="p-3">
                <Image className="img-fluid" src={DV} alt="Icon" />
              </Col>
            </Slider>
          </Row>
          <div className="text-center">
            <Image src={Img05} alt="Icon" />
          </div>
        </Container>
      </section>
    );
  }
}

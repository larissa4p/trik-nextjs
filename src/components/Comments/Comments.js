import styles from "../../styles/Comments.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Img01 from "../../../public/images/avatar1.png";
import Img02 from "../../../public/images/avatar2.png";
import Img03 from "../../../public/images/avatar3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
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
      <section className={styles.bckcolor}>
        <Container className="text-light pb-5">
          <Row>
            <Slider {...settings} className="p-3 px-3">
              <Col md="3" className="py-5">
                <p className="pt-1 fw-bold">
                  “It's amazing to work with Trick, there's no challenge they
                  can't overcome”
                </p>
                <div className="d-flex">
                  <div className="pe-1">
                    <Image className="img-fluid" src={Img01} alt="Icon" />
                  </div>
                  <div className="px-3">
                    <p>
                      <b>Chris Michael</b> <br />
                      <span className="text-secondary">CEO - LepsenHolden Technology</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="py-5 px-3">
                <p className="pt-1 fw-bold">
                  “TriK accelerated our goals and digital visibility through
                  post-launch”
                </p>
                <div className="d-flex">
                  <div className="pe-1">
                    <Image className="img-fluid" src={Img02} alt="Icon" />
                  </div>
                  <div className="px-3">
                    <p>
                      <b>Monike Soul</b> <br />
                      <span className="text-secondary">Sr. Engineer - Be Happy</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3" className="py-5 px-3">
                <p className="pt-1 fw-bold">
                  “If you’re not building on TriK you’re wasting time and vital
                  resources”
                </p>
                <div className="d-flex">
                  <div className="pe-1">
                    <Image className="img-fluid" src={Img03} alt="Icon" />
                  </div>
                  <div className="px-3">
                    <p>
                      <b>Ettore Clay</b> <br />
                      <span className="text-secondary">Brand Analyst - CryptoTech</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Slider>
          </Row>
        </Container>
      </section>
    );
  }
}

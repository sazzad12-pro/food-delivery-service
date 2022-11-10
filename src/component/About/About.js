import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../image/cooking.jpg";

const About = () => {
  return (
    <div className="mt-3 mb-5">
      <div className="text-center">
        <h1 className="text-dark fw-bold ">Our story</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className="fw-bold text-white">
                We Are Locally Crafted Food
              </h1>
              <p>
                In our kitchen with people who are important to you,
                conversations that bring you closer to each other. Traditional
                dishes with local products of highest quality. including
                succulent Veal Chops Siciliano, spicy Lobster Fra Diavolo,
                tender Chicken Contadina.
              </p>
            </Col>
            <Col lg={6}>
              <img className="img-fluid" src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

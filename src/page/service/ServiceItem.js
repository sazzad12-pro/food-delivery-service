import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactReadMoreReadLess from "react-read-more-read-less";

const ServiceItem = ({ service }) => {
  const { name, description, price, image } = service;
  return (
    <div className="card-container">
      <Card style={{ maxWidth: "540px" }}>
        <Row>
          <Col md={4}>
            <img className="img-fluid h-100 w-100" src={image} alt="" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <ReactReadMoreReadLess
                  charLimit={100}
                  readMoreText={"Read more ▼"}
                  readLessText={"Read less ▲"}
                >
                  {description}
                </ReactReadMoreReadLess>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ServiceItem;

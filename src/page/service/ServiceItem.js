import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceItem = ({ service }) => {
  const { name, description, price, image, _id } = service;
  return (
    <div className="card-container">
      <Card style={{ maxWidth: "540px" }}>
        <Row>
          <Col md={4}>
            <PhotoProvider>
              <PhotoView src={image}>
                <img className="img-fluid h-100 w-100" src={image} alt="" />
              </PhotoView>
            </PhotoProvider>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description?.length > 100 ? (
                  <>
                    {description.slice(0, 100) + "..."}{" "}
                    <Link to={`/deliveryDetails/${_id}`}>Read More</Link>{" "}
                  </>
                ) : (
                  description
                )}
              </Card.Text>
              <Card.Title>${price}</Card.Title>
            </Card.Body>

            <Link to={`/deliveryDetails/${_id}`}>
              <Button className="w-50 detail">Details</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ServiceItem;

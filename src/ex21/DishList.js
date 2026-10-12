import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody } from 'reactstrap';
import { dishes } from '../data/dishes.js';

export default function DishList() {
  return (
    <Container>
      <div className="text-center">Home</div>
      <Row>
        {dishes.map((dish) => (
          <Col md="6" key={dish.id}>
            <Card>
              <CardImg top src={`/${dish.image}`} alt={dish.name} />
              <CardBody>
                <Link to={`/ex21/dishes/${dish.id}`}>{dish.name}</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

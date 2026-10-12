import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { dishes } from '../data/dishes.js';

export default function DishDetail() {
  const { dishId } = useParams();
  const dish = /^\d+$/.test(dishId)
    ? dishes.find((item) => item.id === Number(dishId))
    : undefined;

  if (!dish) return <div>Dish not found.</div>;

  return (
    <Container>
      <Card className="dish-detail">
        <CardImg top src={`/${dish.image}`} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h2">{dish.name}</CardTitle>
          <p>ID: {dish.id}</p>
          <p>Category: {dish.category}</p>
          <p>Label: {dish.label}</p>
          <p>Price: {dish.price}</p>
          <p>Featured: {String(dish.featured)}</p>
          <p>{dish.description}</p>
        </CardBody>
      </Card>
    </Container>
  );
}

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Item.css";

export const Item = ({ product }) => {
  const { name, img, description, price, id } = product;

  return (
    
    <Card className="col-12 col-md-6 col-lg-4 col-xl-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title>${price}</Card.Title>
        <Link to={`/item/${id}`} className="link">
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

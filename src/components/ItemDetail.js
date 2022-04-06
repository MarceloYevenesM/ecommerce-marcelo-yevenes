import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import "../styles/Item.css";
import { useCartContext } from "../context/cartContext";
import { Button, Card } from "react-bootstrap";

export const ItemDetail = ({ product }) => {
  const { name, img, description, price, totalStock, id, category } = product;
  const [showStockOptions, setShowStockOptions] = useState(true);
  const { addItem } = useCartContext();

  const onAdd = (selectedAmount) => {
    if (showStockOptions) {
      addItem(product, selectedAmount);
      setShowStockOptions(false);
    }
  };

  return (
    
    <Card className="col-12 col-md-6 col-lg-4 col-xl-5 marginCard">
      <Card.Title>Detalle de {name}</Card.Title>
      <Card.Subtitle>Categoria: {category}</Card.Subtitle>
      <br />
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title>${price}</Card.Title>
        <Card.Text>Stock disponible: {totalStock}</Card.Text>
        {showStockOptions ? (
          <ItemCount
            initialAmount={1}
            totalStock={totalStock}
            productId={id}
            onAdd={onAdd}
          />
        ) : (
          <Link to="/cart" className="link">
            <Button variant="secondary" className="addCart">Finalizar compra</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};


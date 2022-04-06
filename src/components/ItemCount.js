import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/ItemCount.css";

export const ItemCount = ({ initialAmount, totalStock, onAdd }) => {
  const [quantity, setQuantity] = useState(initialAmount);

  return (
    <div className="container">
      <div className="row margin">
        <Button
          className="col-12 col-sm-3 productQuantityButton margin"
          variant="dark"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </Button>

        <input
          className="col-12 col-sm-6 productQuantityInput margin"
          value={quantity}
          onChange={setQuantity}
          disabled
        ></input>

        <Button
          variant="dark"
          className="col-12 col-sm-3 productQuantityButton margin"
          onClick={() => {
            if (quantity < totalStock) {
              setQuantity(quantity + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      <Button
        className="col-12 col-sm-6"
        variant="secondary"
        onClick={() => {
          quantity <= totalStock
            ? onAdd(quantity)
            : alertify.error("No hay stock");
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

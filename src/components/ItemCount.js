import { useState } from "react";
import "../itemCount.css";

export const ItemCount = ({ initialAmount, totalStock }) => {
  const [quantity, setQuantity] = useState(initialAmount);

  return (
    <div>
      <div>
        <button
          className="productQuantityButton"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>
        <input className="productQuantityInput" value={quantity}></input>
        <button
          className="productQuantityButton"
          onClick={() => {
            if (quantity < totalStock) {
              setQuantity(quantity + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <button className="addCart">Agregar al carrito</button>
    </div>
  );
};

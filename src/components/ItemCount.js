import { useState } from "react";
import "../itemCount.css";

export const ItemCount = ({ initialAmount, totalStock, onAdd }) => {
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
        <input
          className="productQuantityInput"
          value={quantity}
          onChange={setQuantity}
        ></input>
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
      <button
        className="addCart"
        onClick={() => {
          quantity <= totalStock
            ? onAdd(quantity)
            : console.log("No hay stock");
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

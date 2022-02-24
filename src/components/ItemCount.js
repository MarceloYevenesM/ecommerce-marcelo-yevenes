import { useState } from "react";

export const ItemCount = ({ name, initialAmount, totalStock }) => {

  const [quantity, setQuantity] = useState(initialAmount);
  const [] = useState();


  return (
    <div className="card">
      <label>{name}</label>
      <div>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <input value={quantity}></input>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};

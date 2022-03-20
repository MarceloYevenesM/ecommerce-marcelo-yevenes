import { useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import "../styles/Item.css";

export const ItemDetail = ({ product }) => {
  const { name, img, description, price, totalStock, id, category } = product;
  const [showStockOptions, setShowStockOptions] = useState(true);

  const onAdd = (selectedAmount) => {
    if (showStockOptions) {
      console.log("Cantidad:", selectedAmount);
      setShowStockOptions(false);
    }
  };

  return (
    <div className="product-card">
      <h2>Detalle de {name}</h2>
      <p>
        <i>Categoria: {category}</i>
      </p>
      <img className="product-img" src={img} alt="img" />
      <p>{description}</p>
      <h3>${price}</h3>
      <p>Stock disponible: {totalStock}</p>
      {showStockOptions ? (
        <ItemCount
          initialAmount={1}
          totalStock={totalStock}
          productId={id}
          onAdd={onAdd}
        />
      ) : (
        <Link to="/cart" className="link">
          <button className="addCart">Finalizar compra</button>
        </Link>
      )}
    </div>
  );
};

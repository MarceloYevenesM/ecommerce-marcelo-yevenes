import "../item.css";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
  const { name, img, description, price, totalStock, id, category } = product;
  const onAdd = (selectedAmount) => {
    console.log("Cantidad:", selectedAmount);
  };

  return (
    <div className="product-card">
      <h2>Detalle de {name}</h2>
      <i>Categoria: {category}</i>
      <img className="product-img" src={img} alt="img" />
      <p>{description}</p>
      <h3>${price}</h3>
      <p>Stock disponible: {totalStock}</p>
      <ItemCount
        initialAmount={1}
        totalStock={totalStock}
        productId={id}
        onAdd={onAdd}
      />
    </div>
  );
};

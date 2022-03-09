import "../item.css";

export const ItemDetail = ({ product }) => {
  const { name, img, description, price, totalStock} = product;

  return (
    <div className="product-card">
      <h2>Detalle de {name}</h2>
      <p>Stock disponible: {totalStock}</p>
      <img className="product-img" src={img} alt="img" />
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
};

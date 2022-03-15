import { Link } from "react-router-dom";
import "../item.css";

export const Item = ({ product }) => {
  const { name, img, description, price, id } = product;

  return (
    <div className="product-card">
      <h2>{name}</h2>

      <img className="product-img" src={img} alt="img" />
      <p>{description}</p>
      <h3>${price}</h3>
      <br />
      <Link to={`/item/${id}`} className="link">
        <button>Ver detalle del producto</button>
      </Link>
    </div>
  );
};

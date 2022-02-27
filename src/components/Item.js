import "../item.css";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {
  const {name, img, description, price, totalStock} = product;
  return <div className="product-card">
    <h2>{name}</h2>

    <img className="product-img" src={img} alt="img" />
    <p>{description}</p>
    <h3>${price}</h3>
    <ItemCount initialAmount={1} totalStock={totalStock} />
     
  </div>;
};

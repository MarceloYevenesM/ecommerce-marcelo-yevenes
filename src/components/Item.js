import { useState } from "react/cjs/react.development";
import "../item.css";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {
  const {name, img, description, price, totalStock, id} = product;

  

  const onAdd = (selectedAmount)=>{
    console.log('Cantidad:',selectedAmount);
  }


  return <div className="product-card">
    <h2>{name}</h2>

    <img className="product-img" src={img} alt="img" />
    <p>{description}</p>
    <h3>${price}</h3>
    <br/>
    <button>Ver detalle del producto</button>
    <ItemCount initialAmount={1} totalStock={totalStock} productId={id} onAdd={onAdd}/>
     
  </div>;
};

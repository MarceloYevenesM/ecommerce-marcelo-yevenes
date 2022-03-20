import { useCartContext } from "../context/cartContext";

const ItemCart = ({ item }) => {
  const { removeitem } = useCartContext();
  

  return (
    <>
      <div className="alignmentDetails">
        <img src={item.img} alt="imagen producto"></img>
        <div className="informationProduct">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <div className="informationProduct">
          <h3>Cantidad</h3>
          <label>{item.productQuantity}</label>
        </div>
        <div className="informationProduct">
          <h3>Precio total</h3>
          <label>${item.price * item.productQuantity}</label>
        </div>
        <div className="clean">
          <button onClick={()=>{
            removeitem(item.id);
          }}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;

import { useCartContext } from "../context/cartContext";
import "../styles/CartWidget.css";
import carrito from "../assets/carrito-de-compras.png";

//TODO: cambiar nombre variable carrito
const CartWidget = () => {
  const { itemsInTheCart } = useCartContext();
  return (
    <div className="cartWidget">
      <img className="carrito" src={carrito} alt="carrito" />
      {itemsInTheCart() === 0 ? (
        <></>
      ) : (
        <label>{itemsInTheCart()}</label>
      )}
    </div>
  );
};

export default CartWidget;

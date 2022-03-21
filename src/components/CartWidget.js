import "../styles/CartWidget.css";
import carrito from "../assets/carrito-de-compras.png";
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
  const { itemsInTheCart } = useCartContext();
  return (
    <div className="cartWidget">
      <img className="carrito" src={carrito} alt="carrito" />
      {itemsInTheCart() === 0 ? (
        <label></label>
      ) : (
        <label>{itemsInTheCart()}</label>
      )}
    </div>
  );
};

export default CartWidget;

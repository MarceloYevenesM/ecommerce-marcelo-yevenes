import { useCartContext } from "../context/cartContext";
import "../styles/CartWidget.css";
import shoppingCart from "../assets/carrito-de-compras.png";


const CartWidget = () => {
  const { itemsInTheCart } = useCartContext();
  return (
    <div className="cartWidget">
      <img className="shoppingCart" src={shoppingCart} alt="carrito" />
      {itemsInTheCart() === 0 ? <></> : <label>{itemsInTheCart()}</label>}
    </div>
  );
};

export default CartWidget;

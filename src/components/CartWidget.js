import "../styles/CartWidget.css";
import carrito from "../assets/carrito-de-compras.png";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <img className="carrito" src={carrito} alt="carrito" />
      <label>0</label>
    </div>
  );
};

export default CartWidget;

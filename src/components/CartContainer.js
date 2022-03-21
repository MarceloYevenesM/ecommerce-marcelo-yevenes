import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import ItemCart from "./ItemCart";
import "../styles/CartItem.css";
import alertify from "alertifyjs";

const CartContainer = () => {
  const { cartList, clear } = useCartContext();

  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      {cartList.length > 0 ? (
        cartList.map((item) => <ItemCart item={item} key={item.id} />)
      ) : (
        <center>
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="link">
            <button>Ir a la Tienda</button>
          </Link>
        </center>
      )}
      <div className="clean deleteAll">
        <button
          onClick={() => {
            cartList.length === 0
              ? alertify.warning("No hay elementos que eliminar")
              : clear();
          }}
        >
          Eliminar todo
        </button>
      </div>
    </div>
  );
};

export default CartContainer;

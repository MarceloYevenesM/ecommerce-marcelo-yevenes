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
        <h2>No hay productos en el carrito</h2>
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

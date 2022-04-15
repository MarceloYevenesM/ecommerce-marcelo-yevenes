import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const CartContentList = ({ idOrden, cartList, totalPrice }) => {
  return (
    <>
      <h1>Carrito de compras</h1>
      {idOrden ? (
        <>
          <h3>
            Compra finalizada con exito, su código de compra es el: {idOrden}
          </h3>
          <Link to="/" className="link">
            <Button variant="secondary">Ir a la Tienda</Button>
          </Link>
        </>
      ) : cartList.length > 0 ? (
        <>
          {cartList.map((item) => (
            <ItemCart item={item} key={item.id} />
          ))}
          <h4>Precio total: ${totalPrice()}</h4>
        </>
      ) : (
        <center>
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="link">
            <Button variant="secondary">Ir a la Tienda</Button>
          </Link>
        </center>
      )}
    </>
  );
};

export default CartContentList;

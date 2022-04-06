import { Button } from "react-bootstrap";
import { useCartContext } from "../context/cartContext";

const ItemCart = ({ item }) => {
  const { removeitem } = useCartContext();

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <img src={item.img} alt="imagen producto" className="img-fluid"></img>
        </div>
        <div className="col-12 col-md-4">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <div className="col-12 col-md-2">
          <h3>Cantidad</h3>
          <label>{item.productQuantity}</label>
        </div>
        <div className="col-12 col-md-2">
          <h3>Precio total</h3>
          <label>${item.price * item.productQuantity}</label>
        </div>
        <div className="col-12 col-md-2">
          <Button
            className="col-12 col-md-12 col-lg-8"
            variant="danger"
            onClick={() => {
              removeitem(item.id);
            }}
          >
            Eliminar
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default ItemCart;

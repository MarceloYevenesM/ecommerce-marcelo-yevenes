import { Link } from "react-router-dom";
import { useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { useCartContext } from "../context/cartContext";
import ItemCart from "./ItemCart";
import "../styles/CartItem.css";
import alertify from "alertifyjs";
import Loader from "./Loader";
import { Button } from "react-bootstrap";

const CartContainer = () => {
  const { cartList, clear, totalPrice } = useCartContext();
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [idOrden, setIdOrden] = useState(true);

  return (
    <div className="cart container">
      <h1>Carrito de compras</h1>
      {loading ? (
        <Loader />
      ) : isPurchaseCompleted ? (
        <>
          <h3>
            Compra finalizada con exito, su código de compra es el: {idOrden}
          </h3>
          <Link to="/" className="link">
            <Button variant="secondary">Ir a la Tienda</Button>
          </Link>
        </>
      ) : cartList.length > 0 ? (
        cartList.map((item) => <ItemCart item={item} key={item.id} />)
      ) : (
        <center>
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="link">
            <Button variant="secondary">Ir a la Tienda</Button>
          </Link>
        </center>
      )}

      <div>
        <div className="deleteAll finish">
          <Button
            variant="primary"
            onClick={() => {
              if (cartList.length === 0) {
                alertify.warning("No hay elementos en el carro");
                return;
              }

              setLoading(true);

              const finish = {
                buyer: {
                  name: "Marcelo",
                  phone: "973738451",
                  email: "marcelo.yevenes@gmail.com",
                },
                items: cartList.map((item) => ({
                  id: item.id,
                  title: item.name,
                  price: item.price * item.productQuantity,
                })),
                total: totalPrice(),
                state: true,
                date: Timestamp.fromDate(new Date()),
              };

              const db = getFirestore();
              const queryCollection = collection(db, "buyOrder");
              addDoc(queryCollection, finish)
                .then(async (resp) => {
                  const dbAux = getFirestore();
                  const queryCollection = await collection(dbAux, "products");
                  setIdOrden(resp.id);

                  const updateStock = query(
                    queryCollection,
                    where(
                      documentId(),
                      "in",
                      cartList.map((item) => item.id)
                    )
                  );

                  const batch = writeBatch(dbAux);

                  await getDocs(updateStock).then((resp) =>
                    resp.docs.forEach((res) =>
                      batch.update(res.ref, {
                        totalStock:
                          res.data().totalStock -
                          cartList.find((item) => item.id === res.id)
                            .productQuantity,
                      })
                    )
                  );

                  batch.commit();
                  clear();
                })
                .catch((err) => {
                  setLoading(false);
                  alertify.error("Algo fallo al al realizar la compra");
                })
                .finally(() => {
                  setLoading(false);
                  setIsPurchaseCompleted(true);
                  alertify.success("Compra finalizada con exito");
                });
            }}
          >
            Finalizar Compra
          </Button>
        </div>
        <div className="deleteAll clean">
          <Button
            variant="danger"
            onClick={() => {
              cartList.length === 0
                ? alertify.warning("No hay elementos que eliminar")
                : clear();
            }}
          >
            Eliminar todo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;

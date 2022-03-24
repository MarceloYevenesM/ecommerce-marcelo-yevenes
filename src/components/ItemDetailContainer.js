import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "products", id);

    getDoc(queryDb)
      .then((resp) =>
        setProduct({
          id: resp.id,
          ...resp.data(),
        })
      )
      .catch((res) => {
        throw console.error(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <center>{loading ? <Loader /> : <ItemDetail product={product} />} </center>
  );
};

export default ItemDetailContainer;

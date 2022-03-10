import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import result from "../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(
    (res) => {
      result
        .then((res) => {
          setProduct(res.find((element) => element.id === id));
        })
        .catch((res) => {
          throw console.error(res);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [id]
  );

  return (
    <center>{loading ? <Loader /> : <ItemDetail product={product} />} </center>
  );
};

export default ItemDetailContainer;

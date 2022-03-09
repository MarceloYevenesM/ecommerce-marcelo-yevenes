import { useEffect, useState } from "react";
import result from "../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect((res) => {
    result
      .then((res) => {
        setProduct(res.find((element) => element.id === 3));
      })
      .catch((res) => {
        throw console.error(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return <center>{loading ? <Loader /> : <ItemDetail product={product}/>} </center>;
};

export default ItemDetailContainer;

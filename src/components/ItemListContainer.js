import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import result from "../helpers/getFetch";
import ItemList from "./ItemList";

import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    result
      .then((res) => {
        setProducts(res);
      })
      .catch((res) => {
        throw console.error(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <center>{loading ? <Loader /> : <ItemList items={products} />}</center>
    </div>
  );
};

export default ItemListContainer;

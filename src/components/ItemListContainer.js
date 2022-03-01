import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import result from "../helpers/getFetch";
import { Item } from "./Item";
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
      <center>
        {loading ? (
          <Loader />
        ) : (
          products.map((product, i) => (
            <Item product={product} key={product.id} />
          ))
        )}
      </center>
    </div>
  );
};

export default ItemListContainer;

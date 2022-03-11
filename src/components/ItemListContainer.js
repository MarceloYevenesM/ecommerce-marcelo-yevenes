import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { result } from "../helpers/getFetch";
import ItemList from "./ItemList";

import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    result
      .then((res) => {
        if (categoryId) {
          setProducts(res.filter((product) => product.category === categoryId));
        } else {
          setProducts(res);
        }
      })
      .catch((res) => {
        throw console.error(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <center>{loading ? <Loader /> : <ItemList items={products} />}</center>
    </div>
  );
};

export default ItemListContainer;

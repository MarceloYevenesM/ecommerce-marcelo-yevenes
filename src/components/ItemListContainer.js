import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  getDocs,
  getFirestore,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";

import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryColection = collection(db, "products");

    if (categoryId) {
      const queyFilter = query(
        queryColection,
        where("category", "==", categoryId)
      );

      getDocs(queyFilter)
        .then((resp) =>
          setProducts(
            resp.docs.map((product) => ({
              id: product.id,
              ...product.data(),
            }))
          )
        )
        .catch((res) => {
          throw console.error(res);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(queryColection)
        .then((resp) =>
          setProducts(
            resp.docs.map((product) => ({
              id: product.id,
              ...product.data(),
            }))
          )
        )
        .catch((res) => {
          throw console.error(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="row">
        
            <ItemList items={products} />
          
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

import { Item } from "./Item";
import "../itemList.css";

const ItemList = ({ items }) => {
  return items.length !== 0 ? (
    items.map((product) => <Item product={product} key={product.id} />)
  ) : (
    <div className="p-error">
       <h1 className="error">No hay productos disponibles</h1>
    </div>
  );
};

export default ItemList;

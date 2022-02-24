import { ItemCount } from "./ItemCount";


const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount name="Agenda" initialAmount={1} totalStock={10} />
    </div>
  );
};

export default ItemListContainer;

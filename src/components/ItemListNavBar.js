import ItemNavBar from "./ItemNavBar";
import "../styles/NavBar.css";

const ItemListNavBar = ({ categorys }) => {
  return (
    <>
      {categorys.map((category, index) => (
        <ItemNavBar name={category.category} url={category.url} key={index} />
      ))}
    </>
  );
};

export default ItemListNavBar;

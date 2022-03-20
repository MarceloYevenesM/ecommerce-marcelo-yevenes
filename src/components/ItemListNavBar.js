import ItemNavBar from "./ItemNavBar";
import "../styles/NavBar.css";

const ItemListNavBar = ({ categorys }) => {
  return (
    <ul className="navLinks">
      {categorys.map((category, index) => (
        <ItemNavBar name={category.category} url={category.url} key={index} />
      ))}
    </ul>
    // <ItemNavBar />
  );
};

export default ItemListNavBar;

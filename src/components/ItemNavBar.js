import { NavLink } from "react-router-dom";

const ItemNavBar = ({name, url}) => {
  return (
    <NavLink to={url}>
      <li>
        <label className="name">{name}</label>
      </li>
    </NavLink>
  );
};

export default ItemNavBar;

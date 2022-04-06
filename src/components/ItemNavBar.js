import { NavLink } from "react-router-dom";

const ItemNavBar = ({ name, url }) => {
  return (
    <NavLink to={url}>
      <label className="name marginNav">{name}</label>
    </NavLink>
  );
};

export default ItemNavBar;

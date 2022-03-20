import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import ItemListNavBar from "./ItemListNavBar";
import Loader from "./Loader";
import { resultCategory } from "../helpers/getFetch";
import "../styles/NavBar.css";
import logo from "../assets/orbita.png";

const NavBar = () => {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    resultCategory
      .then((res) => {
        setCategorys(res);
      })
      .catch((res) => {
        throw console.error(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <header>
      <NavLink to="/">
        <div className="nameStore">
          <img className="logo" src={logo} alt="logo" />
          <label>Papeleria Galaktika</label>
        </div>
      </NavLink>

      <nav>
        <center>
          {loading ? <Loader /> : <ItemListNavBar categorys={categorys} />}
        </center>
      </nav>
      <NavLink to="/login">
        <button>Iniciar Sesión</button>
      </NavLink>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </header>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";
import "../NavBar.css";
import logo from "../orbita.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="nameStore">
          <img className="logo" src={logo} alt="logo" />
          <label>Papeleria Galaktika</label>
        </div>
      </NavLink>

      <nav>
        <ul className="navLinks">
          <NavLink to="/">
            <li>
              <label>Inicio</label>
            </li>
          </NavLink>
          <NavLink to="category/agendas">
            <li>
              <label>Agendas</label>
            </li>
          </NavLink>
          <NavLink to="category/lapices">
            <li>
              <label>Lapices</label>
            </li>
          </NavLink>
          <NavLink to="category/plumas">
            <li>
              <label>Plumas</label>
            </li>
          </NavLink>
          <NavLink to="category/otros">
            <li>
              <label>Otros</label>
            </li>
          </NavLink>
        </ul>
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

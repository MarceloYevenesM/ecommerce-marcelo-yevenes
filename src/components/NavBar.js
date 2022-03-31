import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import CartWidget from "./CartWidget";
import ItemListNavBar from "./ItemListNavBar";
import Loader from "./Loader";

import "../styles/NavBar.css";
import logo from "../assets/galaktika-logo.png";

const NavBar = () => {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryColection = collection(db, "category");

    getDocs(queryColection)
      .then((resp) =>
        setCategorys(
          resp.docs.map((category) => ({
            id: category.id,
            ...category.data(),
          }))
        )
      )
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

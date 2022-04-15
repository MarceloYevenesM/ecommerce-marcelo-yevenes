import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Container, Nav, Navbar } from "react-bootstrap";
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
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
      <Container>
        <NavLink to="/">
          <div className="nameStore">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loading ? <Loader /> : <ItemListNavBar categorys={categorys} />}
          </Nav>
          <Nav>
            <NavLink to="/cart" className="marginNav">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

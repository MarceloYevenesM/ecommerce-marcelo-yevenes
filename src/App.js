import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import CartContainer from "./components/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartContextProvider from "./context/cartContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenid@ a Papeleria Galaktika" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting="Bienvenid@ a Papeleria Galaktika" />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

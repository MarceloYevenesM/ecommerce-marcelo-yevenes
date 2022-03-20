import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
import { createContext, useState, useContext } from "react";

const cartContex = createContext([]);

export const useCartContext = () => useContext(cartContex);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, productQuantity) => {
    if (isInCart(item.id)) {
      setCartList([...cartList, { ...item, productQuantity }]);
      alertify.success("Elemento agregado correctamente al carro");
    } else {
      alertify.error("Este elemento ya se encuentra en el carrito");
    }
  };

  const removeitem = (itemId) => {
    const position = cartList.findIndex((item) => item.id === itemId);
    cartList.splice(position, 1);
    setCartList([...cartList]);
    alertify.success("Elemento eliminado correctamente");
  };

  const clear = () => {
    setCartList([]);
    alertify.success("Elementos eliminados correctamente");
  };

  const isInCart = (itemId) => {
    const result = cartList.findIndex((item) => item.id === itemId);
    return result === -1;
  };

  return (
    <cartContex.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        clear,
        removeitem,
      }}
    >
      {children}
    </cartContex.Provider>
  );
};

export default CartContextProvider;

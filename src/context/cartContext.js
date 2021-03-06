import { createContext, useState, useContext } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const cartContex = createContext([]);
export const useCartContext = () => useContext(cartContex);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, productQuantity) => {
    const cartPosition = isInCart(item.id);

    if (cartPosition === -1) {
      setCartList([...cartList, { ...item, productQuantity }]);
      alertify.success("Elemento agregado correctamente al carro");
    } else {
      const productQuantityTotal =
        cartList[cartPosition].productQuantity + productQuantity;

      if (productQuantityTotal > cartList[cartPosition].totalStock) {
        alertify.error("La cantidad supera al stock permitido en el carrito");
      } else {
        cartList[cartPosition] = {
          ...cartList[cartPosition],
          productQuantity: productQuantityTotal,
        };
        setCartList([...cartList]);
        alertify.success("Elemento agregado correctamente al carro");
      }
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
  };

  const isInCart = (itemId) => {
    const result = cartList.findIndex((item) => item.id === itemId);
    return result;
  };

  const itemsInTheCart = () => {
    let total = 0;
    cartList.forEach((item) => {
      total = total + item.productQuantity;
    });
    return total;
  };

  const totalPrice = () => {
    let total = 0;
    cartList.forEach((item) => {
      total = total + item.price * item.productQuantity;
    });

    return total;
  };

  return (
    <cartContex.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        clear,
        removeitem,
        itemsInTheCart,
        totalPrice,
      }}
    >
      {children}
    </cartContex.Provider>
  );
};

export default CartContextProvider;

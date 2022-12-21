import React, {useContext, createContext, useState} from 'react'

export const CartContext = createContext();

export function CartProvider({children}) {   

    const [carrito, setCarrito] = useState([]);
    const [producto, setProducto] = useState([]);

    const addItem = (item, quantity) => {
      if (isInCart(item.id)) {
        const product = carrito.find((el) => el.id == item.id);
        const nuevoCarrito = carrito.filter((el) => el.id != item.id);
        product.quantity = product.quantity + quantity;
        nuevoCarrito.push(product);
        setCarrito([...nuevoCarrito]);
      }else{
        setCarrito([...carrito, {...item, quantity}]);
      }
    }

    const clear = () => {
        setCarrito([]);
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
          const nuevoCarrito = carrito.filter((el) => el.id != itemId);
          setCarrito([...nuevoCarrito]);
        }
    }

    function isInCart(itemId) {
      return carrito.some((el) => el.id == itemId);
    }

  return (
    <CartContext.Provider value={{addItem, clear, removeItem, carrito}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
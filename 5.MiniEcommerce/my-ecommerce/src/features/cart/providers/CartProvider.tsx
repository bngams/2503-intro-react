import { Product } from "@/features/product/models/Product";
import React from "react";

export const CartContext = React.createContext({});

function CartProvider({children} : {children: React.ReactNode}) {
  const [cart, setCart] = React.useState<Product[]>([]);
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return(
    <CartContext.Provider value={{ cart, addToCart }}>
      {children} 
    </CartContext.Provider>
  );
}

export default CartProvider;
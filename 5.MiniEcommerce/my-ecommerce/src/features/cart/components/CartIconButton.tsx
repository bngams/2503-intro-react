import { ShoppingCart } from "lucide-react";
import { CartContext } from "../providers/CartProvider";
import { useContext } from "react";

function CartIconButton() {

  const cartContext = useContext(CartContext);

  return (
    <div className="flex items-center space-x-2">
      <ShoppingCart size={32} />
      <span className="text-[32px] font-bold">{cartContext.cart.length}</span>
    </div>
  );
  
}

export default CartIconButton;
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CartItemList from "../CartItemList/CartItemList";
import "./CartContainer.css";

const CartContainer = () => {

    const {cart, removeItem, addItem, totalPrice, clearCart} = useContext(CartContext);

    return (
        <div className="cartContainer">
            <div className="border-wrap">
                <h1 className="cartContainer__title">Cart</h1>
            </div>
                <CartItemList cart={cart} removeItem={removeItem} addItem={addItem} totalPrice={totalPrice} clearCart={clearCart} />
        </div>
    )
}

export default CartContainer;
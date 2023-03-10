import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Notifications } from "../../notifications/notificationService";
import CartItem from "../CartItem/CartItem";
import "./CartItemList.css";

const CartItemList = ({cart, removeItem, addItem, totalPrice, clearCart}) => {

    const navigate = useNavigate();
    const {setNotification} = useContext(Notifications);

    return (cart.length === 0) ? 
    <div className="cartItemList">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>To item list</button>
    </div>
    :
    <div className="cartItemList">
        <button className="cartItemList__clearBtn" onClick={() => {
            clearCart();
            setNotification("success", "Cart empty");
            }}>Clear cart</button>
        {cart.map(card => {
            return (
                <CartItem key={card.id} {...card} handleOnRemove={removeItem} handleOnAdd={addItem} />
            )
        })}
        <div className="cartItemList__subtotal">
            <h3>Subtotal:</h3>
            <span>${totalPrice}</span>
        </div>
        <button onClick={() => navigate("/checkout")}>Procede to checkout</button>
    </div>  
}

export default CartItemList;
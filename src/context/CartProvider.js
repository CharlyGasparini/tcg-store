import { createContext, useContext, useState } from "react"
import { Notifications } from "../notifications/notificationService";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const {setNotification} = useContext(Notifications);
    const [cart, setCart] = useState([]);
    console.log(cart);

    const isInCart = (id) => cart.some(card => id === card.id);
    
    const addItem = (cardToAdd) => {
        if(!isInCart(cardToAdd.id)){
            setCart(prev => [...prev, cardToAdd]);
        } else {
            setCart(cart.map(card => {
                if(card.id === cardToAdd.id){
                    let quantity = card.quantity += cardToAdd.quantity;
                    return {quantity, ...card}
                } else {
                    return card
                }
            }));         
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(card => card.id !== id)); 
        setNotification("error", "Se ha eliminado el producto del carrito")
    }

    const clearCart = () => {
        setCart([]);
        setNotification("error", "Se vació el carrito");
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        
        cart.forEach(card => {
            totalQuantity += card.quantity;
        })

        return totalQuantity;
    }

    const getTotalPrice = () => {
        let totalPrice = 0;

        cart.forEach(card => {
            totalPrice += (card.price * card.quantity);
        })

        return totalPrice;
    }

    const totalQuantity = getTotalQuantity();
    const totalPrice = getTotalPrice();

    return (
        <CartContext.Provider value = {{isInCart, addItem, removeItem, clearCart, totalQuantity, totalPrice, cart}}>
            {children}
        </CartContext.Provider>
    )
}
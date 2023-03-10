import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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
        setCart(prev => prev.filter(card => card.id !== id));
    }

    const clearCart = () => {
        setCart([]);
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
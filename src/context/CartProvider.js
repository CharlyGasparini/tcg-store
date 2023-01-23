import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

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

    const removeItem = (cardToRemove) => {
        setCart(cart.filter(card => card.id !== cardToRemove.id)); 
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

    const totalQuantity = getTotalQuantity();

    return (
        <CartContext.Provider value = {{isInCart, addItem, removeItem, clearCart, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
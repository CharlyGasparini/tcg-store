import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutTable from "../CheckoutTable/CheckoutTable";
import "./Checkout.css";


const Checkout = () => {

    const {cart, totalPrice} = useContext(CartContext);

    return (
        <div className="checkout">
            <div className="border-wrap">
                <h1 className="checkout__title">Checkout</h1>
            </div>
            <div className="checkout-body">
                <CheckoutForm />
                <CheckoutTable cart={cart} totalPrice={totalPrice}/>
            </div>
        </div>
    )
}

export default Checkout;
import { useState } from "react";
import "./CheckoutForm.css";

const ShippingAddress = () => {
    return (
        <>

        </>
    )
}

const CheckoutForm = () => {

    const [shipping, setShipping] = useState(false);


    return(
        <form className="form">
            
            <h2>Shipping information</h2>
            <input type="text" id="form__name" placeholder="Name"/>
            <input type="tel" id="form__name" placeholder="Phone"/>
            <input type="email" id="form__name" placeholder="E-mail"/>
            <input type="email" id="form__name" placeholder="Address"/>
            <input type="email" id="form__name" placeholder="City"/>
            <button className="form__btn" >Place your order</button>
        </form>
    )
}

export default CheckoutForm;
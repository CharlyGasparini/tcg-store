import "./CheckoutForm.css";

const CheckoutForm = ( {handleSubmit, setters} ) => {

    const [setName, setLastName, setPhone, setEmail, setAddress, setCity] = setters;

    return(
        <form className="form" onSubmit={handleSubmit}>       
            <h2>Shipping information</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
            <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
            <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} required />
            <button type="submit" className="form__btn" >Place your order</button>
        </form>
    )
}

export default CheckoutForm;
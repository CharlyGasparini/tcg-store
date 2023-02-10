import { useNavigate } from "react-router-dom";
import "./CheckoutConfirm.css";

const CheckoutConfirm = ({id}) => {
    const navigate = useNavigate();

    return (
        <div className="checkoutConfirm">
            <h1>Your order was successfully processed</h1>
            <h2>Your purchase ID is <span style={{color:"var(--redFire)"}}>{id}</span></h2>
            <button onClick={() => navigate("/")}>To item list</button>
        </div>
    )
}

export default CheckoutConfirm;
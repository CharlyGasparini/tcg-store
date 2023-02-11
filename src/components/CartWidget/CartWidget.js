import { useNavigate } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = ({totalQuantity}) => {

    const navigate = useNavigate();

    return (
        <div className="cartWidget" onClick={() => navigate("/cart")}>
            <i className="fa-solid fa-cart-shopping"></i>
            {totalQuantity !== 0 && <span className="cartWidget__amount">{totalQuantity}</span>}
        </div>
    )
}

export default CartWidget;
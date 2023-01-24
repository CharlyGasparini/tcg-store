import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({id, name, smallImg, price, quantity, supertype, handleOnRemove}) => {

    return (
        <div className="cartItem">
            <div className="cartItem__body">
                <img src={smallImg} alt={name} />
                <div className="cartItem__data">
                    <div>
                        <div className="cartItem__name">{name} ({id})</div>
                        <div className="cartItem__category">{supertype}</div>
                    </div>
                    <div className="cartItem__quantity">
                        <span>Quantity: {quantity}</span>
                        <span>${price*quantity}</span>   
                    </div>
                    <div className="cartItem__footer">
                        <Link onClick={() => handleOnRemove(id)}>Remove</Link>
                        <Link to={`/detail/${id}`}>To detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
import "./CartItem.css";
import { Link } from "react-router-dom";
import { Notifications } from "../../notifications/notificationService";
import { useContext } from "react";

const CartItem = ({id, set, name, smallImg, price, quantity, supertype, handleOnRemove}) => {

    const {setNotification} = useContext(Notifications);

    return (
        <div className="cartItem">
            <div className="cartItem__body">
                <img src={smallImg} alt={name} />
                <div className="cartItem__data">
                    <div>
                        <div className="cartItem__name">{name} ({set})</div>
                        <div className="cartItem__category">{supertype}</div>
                    </div>
                    <div className="cartItem__quantity">
                        <span>Quantity: {quantity}</span>
                        <span>${price*quantity}</span>   
                    </div>
                    <div className="cartItem__footer">
                        <Link onClick={() => {
                            handleOnRemove(id);
                            setNotification("success", `${quantity} item removed from the cart`);
                            }}>Remove</Link>
                        <Link to={`/detail/${id}`}>To detail</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
import "./CartWidget.css";

const CartWidget = ({totalQuantity}) => {
    return (
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cartWidget__amount">{totalQuantity}</span>
        </div>
    )
}

export default CartWidget;
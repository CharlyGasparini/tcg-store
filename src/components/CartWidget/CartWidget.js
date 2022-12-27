import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cartWidget__amount">12</span>
        </div>
    )
}

export default CartWidget;
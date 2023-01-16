import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        (count > 1) && setCount(prev => prev - 1);
    }

    const increment = () => {
        (count < stock) && setCount(prev => prev + 1);
    }

    return (
        <div className="itemCount">
            <div className="itemCount__counter">
                <span className="itemCount__control" onClick={decrement}>-</span>
                <span>{count}</span>
                <span className="itemCount__control" onClick={increment}>+</span>
            </div>
            <button className="itemCount__btn" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="itemList">
            {products.map(card => <Item card={card}/>)}
        </div>
    )
}

export default ItemList;
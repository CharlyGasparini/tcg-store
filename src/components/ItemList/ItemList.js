import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="itemList">
            {products.map(card => <Item card={card} key={card.id}/>)}
        </div>
    )
}

export default ItemList;
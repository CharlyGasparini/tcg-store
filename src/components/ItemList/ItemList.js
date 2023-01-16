import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return (
        <div className="itemList">
            {products.map(card => <Item name={card.name} imgSmall={card.images.small} id={card.id} key={card.id} price={card.price}/>)}
        </div>
    )
}

export default ItemList;
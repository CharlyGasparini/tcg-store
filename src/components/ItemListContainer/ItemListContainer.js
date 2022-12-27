import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemListContainer">
            <img src="./images/pokemon-banner.png"/>
            <h1 className="itemListContainer__greeting">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;
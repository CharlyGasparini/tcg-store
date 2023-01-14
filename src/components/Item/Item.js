import Button from "../Button/Button";
import "./Item.css";

const Item = ({card}) => {
    return (
        <div className="card">
            <img src={card.images.small} alt={card.name}/>
            <div className="card__body">
                <h4 className="card__title">{card.name}</h4>
                <div className="card__price">${card.price}</div>
                <Button>
                    Ver detalle del producto
                </Button>
            </div>
        </div>
    )
}

export default Item;
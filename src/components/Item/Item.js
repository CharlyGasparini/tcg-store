import Button from "../Button/Button";
import "./Item.css";

const Item = ({card}) => {
    return (
        <div className="card" key={card.id}>
            <img src={card.pictureUrl} alt={card.title}/>
            <div className="card__body">
                <h4 className="card__title">{card.title}</h4>
                <div className="card__price">${card.price}</div>
                <Button>
                    Ver detalle del producto
                </Button>
            </div>
        </div>
    )
}

export default Item;
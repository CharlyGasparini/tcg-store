import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({name, imgSmall, id, price}) => {

    const navigate = useNavigate();

    return (
        <article className="card">
            <img src={imgSmall} alt={name}/>
            <div className="card__body">
                <h4 className="card__title">{name}</h4>
                <div className="card__expansion">{id}</div>
                <div className="card__price">${price}</div>
                <button className="card__btn" onClick={() => navigate(`/detail/${id}`)}>Ver detalle</button>
            </div>
        </article>
    )
}

export default Item;
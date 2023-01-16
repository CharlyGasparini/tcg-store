import { getLogos } from "../../energyLogos";
import "./ItemDetailWeakRes.css";


const ItemDetailWeakRes = ({...card}) => {
    return (
        <div className="itemDetailOthers__weakRes">
            <div className="weakRes">
                <h4>Weakness</h4>
                {getLogos(card.weaknesses)}
            </div>
            <div className="weakRes">
                <h4>Resistance</h4>
                {getLogos(card.resistances)}
            </div>
            <div className="weakRes">
                <h4>Retreat Cost</h4>
                <span>
                    {getLogos(card.retreatCost)}
                </span>
            </div>
        </div>
    )
}

export default ItemDetailWeakRes;
import { getLogo } from "../../energyLogos";
import "./ItemDetailWeakRes.css";


const ItemDetailWeakRes = ({...card}) => {
    return (
        <div className="itemDetailOthers__weakRes">
            <div className="weakRes">
                <h4>Weakness</h4>
                <span>
                    {card.weaknesses.map(weak => {
                        return(
                            <>
                            {getLogo(weak.type)}
                            {weak.value}
                            </>
                        )
                    })}   
                </span>
            </div>
            <div className="weakRes">
                <h4>Resistance</h4>
                <span>
                    {card.resistances.map(res => {
                        return(
                            <>
                            {getLogo(res.type)}
                            {res.value}
                            </>
                        )
                    })}   
                </span>
            </div>
            <div className="weakRes">
                <h4>Retreat Cost</h4>
                <span>
                    {card.retreatCost.map(ret => {
                        return(
                            <>
                            {getLogo(ret)}
                            </>
                        )
                    })}   
                </span>
            </div>
        </div>
    )
}

export default ItemDetailWeakRes;
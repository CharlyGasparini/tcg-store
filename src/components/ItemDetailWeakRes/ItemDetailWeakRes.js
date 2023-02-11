import EnergyLogos from "../EnergyLogos";
import "./ItemDetailWeakRes.css";


const ItemDetailWeakRes = ({...card}) => {

    return (
        <div className="itemDetailOthers__weakRes">
            <div className="weakRes">
                <h4>Weakness</h4>
                <EnergyLogos types={card.weaknesses} />
                {card.weaknesses.map(weak => weak.value)}
            </div>
            <div className="weakRes">
                <h4>Resistance</h4>
                <EnergyLogos types={card.resistances} />
                {card.resistances.map(res => res.value)}
            </div>
            <div className="weakRes">
                <h4>Retreat Cost</h4>
                <span>
                    <EnergyLogos types={card.retreatCost} />
                </span>
            </div>
        </div>
    )
}

export default ItemDetailWeakRes;
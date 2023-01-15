import ItemDetailFormats from "../ItemDetailFormats/ItemDetailFormats";
import ItemDetailWeakRes from "../ItemDetailWeakRes/ItemDetailWeakRes";
import "./ItemDetailOthers.css"

const ItemDetailOthers = ({...card}) => {
    
    if(Object.keys(card).includes("weaknesses")){
        return (
            <div className="itemDetailOthers">
                <ItemDetailWeakRes weaknesses={card.weaknesses} resistances={card.resistances} retreatCost={card.retreatCost} />
                <ItemDetailFormats legalities={card.legalities} />
            </div>
        )
    } else{
        return (
            <div className="itemDetailOthers">
                <ItemDetailFormats legalities={card.legalities} />
            </div>
        )
    }
}

export default ItemDetailOthers;
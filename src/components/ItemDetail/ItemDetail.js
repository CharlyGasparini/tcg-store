import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailTitle from "../ItemDetailTitle/ItemDetailTitle";
import ItemDetailOthers from "../ItemDetailOthers/ItemDetailOthers";
import ItemDetailRules from "../ItemDetailRules/ItemDetailRules";
import ItemDetailAbilities from "../ItemDetailAbilities/ItemDetailAbilities";
import ItemDetailAttacks from "../ItemDetailAttacks/ItemDetailAttacks";

const ItemDetail = ({card}) => {

    if(card.supertype === "Pokémon"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={card.images.large} alt={card.name} />
                    <ItemCount initial={1} stock={4} onAdd={(count) => console.log("Se agregaron " + count + " productos")} />
                </div>
                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={card.name} supertype={card.supertype} subtypes={card.subtypes} types={card.types} hp={card.hp}/>
    
                    <ItemDetailRules rules={card.rules}/>
    
                    <ItemDetailAbilities abilities={card.abilities}/>
    
                    <ItemDetailAttacks attacks={card.attacks} />
    
                    <ItemDetailOthers legalities={card.legalities} weaknesses={card.weaknesses} resistances={card.resistances} retreatCost={card.retreatCost} />
                </div>
            </div>
        )
    }

    if(card.supertype === "Trainer"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={card.images.large} alt={card.name} />
                    <ItemCount initial={1} stock={4} onAdd={(count) => console.log("Se agregaron " + count + " productos")} />
                </div>
                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={card.name} supertype={card.supertype} subtypes={card.subtypes}/>
    
                    <ItemDetailRules rules={card.rules}/>
    
                    <ItemDetailOthers legalities={card.legalities} />
                </div>
            </div>
        )
    }

    if(card.supertype === "Energy"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={card.images.large} alt={card.name} />
                    <ItemCount initial={1} stock={4} onAdd={(count) => console.log("Se agregaron " + count + " productos")} />
                </div>
                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={card.name} supertype={card.supertype} subtypes={card.subtypes}/>
    
                    <ItemDetailRules rules={card.rules}/>
    
                    <ItemDetailOthers legalities={card.legalities} />
                </div>
            </div>
        )
    }
    

}

export default ItemDetail;
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailTitle from "../ItemDetailTitle/ItemDetailTitle";
import ItemDetailOthers from "../ItemDetailOthers/ItemDetailOthers";
import ItemDetailRules from "../ItemDetailRules/ItemDetailRules";
import ItemDetailAbilities from "../ItemDetailAbilities/ItemDetailAbilities";
import ItemDetailAttacks from "../ItemDetailAttacks/ItemDetailAttacks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({card}) => {

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const handleOnAdd = (quantity) => {
        setQuantity(parseInt(quantity));
        console.log(`Se agregaron ${quantity} elementos al carrito`);
    }

    document.title = `Pokémon Center | ${card.id}-${card.name}`;

    if(card.supertype === "Pokémon"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={card.images.large} alt={card.name} />
                    <div className="itemDetail__priceSet">
                        <span>Price: ${card.price}</span>
                        <span>Set: {card.id}</span>
                    </div>
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} style={{maxWidth:"70%", margin:"auto"}}>Terminar compra</button> ) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
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
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} />) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
                    
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
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} />) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
                    
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
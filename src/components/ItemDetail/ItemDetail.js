import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailTitle from "../ItemDetailTitle/ItemDetailTitle";
import ItemDetailOthers from "../ItemDetailOthers/ItemDetailOthers";
import ItemDetailRules from "../ItemDetailRules/ItemDetailRules";
import ItemDetailAbilities from "../ItemDetailAbilities/ItemDetailAbilities";
import ItemDetailAttacks from "../ItemDetailAttacks/ItemDetailAttacks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({id, name, images, supertype, subtypes, types, price, hp, rules, abilities, attacks, legalities, weaknesses, resistances, retreatCost}) => {

    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const handleOnAdd = (quantity) => {
        setQuantity(parseInt(quantity));
        console.log(`Se agregaron ${quantity} elementos al carrito`);
    }

    document.title = `Pokémon Center | ${id}-${name}`;

    if(supertype === "Pokémon"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={images.large} alt={name} />
                    <div className="itemDetail__priceSet">
                        <span>Price: ${price}</span>
                        <span>Set: {id}</span>
                    </div>
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} style={{maxWidth:"70%", margin:"auto"}}>Terminar compra</button> ) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
                </div>

                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={name} supertype={supertype} subtypes={subtypes} types={types} hp={hp}/>
    
                    <ItemDetailRules rules={rules}/>
    
                    <ItemDetailAbilities abilities={abilities}/>
    
                    <ItemDetailAttacks attacks={attacks} />
    
                    <ItemDetailOthers legalities={legalities} weaknesses={weaknesses} resistances={resistances} retreatCost={retreatCost} />
                </div>
            </div>
        )
    }

    if(supertype === "Trainer"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={images.large} alt={name} />
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} />) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
                    
                </div>

                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={name} supertype={supertype} subtypes={subtypes}/>
    
                    <ItemDetailRules rules={rules}/>
    
                    <ItemDetailOthers legalities={legalities} />
                </div>
            </div>
        )
    }

    if(supertype === "Energy"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={images.large} alt={name} />
                    {(quantity > 0) ? (<button onClick={() => navigate("/cart")} />) : (<ItemCount initial={1} stock={4} onAdd={handleOnAdd} />)}
                    
                </div>

                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={name} supertype={supertype} subtypes={subtypes}/>
    
                    <ItemDetailRules rules={rules}/>
    
                    <ItemDetailOthers legalities={legalities} />
                </div>
            </div>
        )
    }
    

}

export default ItemDetail;
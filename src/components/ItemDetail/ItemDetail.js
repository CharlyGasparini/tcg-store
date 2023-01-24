import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailTitle from "../ItemDetailTitle/ItemDetailTitle";
import ItemDetailOthers from "../ItemDetailOthers/ItemDetailOthers";
import ItemDetailRules from "../ItemDetailRules/ItemDetailRules";
import ItemDetailAbilities from "../ItemDetailAbilities/ItemDetailAbilities";
import ItemDetailAttacks from "../ItemDetailAttacks/ItemDetailAttacks";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({id, name, images, supertype, subtypes, types, price, hp, rules, abilities, attacks, legalities, weaknesses, resistances, retreatCost}) => {

    const {addItem, isInCart} = useContext(CartContext);
    const {small:smallImg, large:largeImg} = images;
    const navigate = useNavigate();

    const handleOnAdd = (quantity) => {
        addItem({id, name, smallImg, supertype, price, quantity});
    }

    document.title = `Pokémon Center | ${id}-${name}`;

    if(supertype === "Pokémon"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={largeImg} alt={name} />
                    <div className="itemDetail__priceSet">
                        <span>Price: ${price}</span>
                        <span>Set: {id}</span>
                    </div>
                    { isInCart(id) ? <button onClick={() => navigate("/cart")} style={{width:"70%", margin:"auto"}}>Go to cart</button> : <ItemCount  initial={1} stock={4} onAdd={handleOnAdd} /> }
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
    } else{
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={largeImg} alt={name} />
                    <div className="itemDetail__priceSet">
                        <span>Price: ${price}</span>
                        <span>Set: {id}</span>
                    </div>
                    { isInCart(id) ? <button onClick={() => navigate("/cart")} style={{width:"70%", margin:"30px auto"}}>Go to cart</button> : <ItemCount  initial={1} stock={4} onAdd={handleOnAdd} /> }
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
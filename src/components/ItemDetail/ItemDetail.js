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
import { Notifications } from "../../notifications/notificationService";

const ItemDetail = ({id, set, name, images, supertype, subtypes, types, price, hp, rules, abilities, attacks, legalities, weaknesses, resistances, retreatCost}) => {

    const {addItem, isInCart} = useContext(CartContext);
    const {setNotification} = useContext(Notifications);
    const {small:smallImg, large:largeImg} = images;
    const navigate = useNavigate();

    const handleOnAdd = (quantity) => {
        addItem({id, set, name, smallImg, supertype, price, quantity});
        setNotification("success", `Se ha agregado ${quantity} ${name} (${set}) al carrito`);
    }

    document.title = `Pokémon Center | ${set}-${name}`;

    if(supertype === "Pokémon"){
        return (
            <div className="itemDetail">
                <div className="itemDetail__col">
                    <img className="itemDetail__cardImg" src={largeImg} alt={name} />
                    <div className="itemDetail__priceSet">
                        <span>Price: ${price}</span>
                        <span>Set: {set}</span>
                    </div>
                    { isInCart(id) ? <button onClick={() => navigate("/cart")} style={{width:"70%", margin:"auto"}}>Go to cart</button> : <ItemCount  initial={1} stock={4} onAdd={handleOnAdd} /> }
                </div>

                <div className="itemDetail__data">
                    
                    <ItemDetailTitle name={name} supertype={supertype} subtypes={subtypes} types={types} hp={hp}/>
    
                    {rules !== undefined && <ItemDetailRules rules={rules}/>}
    
                    {abilities !== undefined && <ItemDetailAbilities abilities={abilities}/>}
    
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
                        <span>Set: {set}</span>
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
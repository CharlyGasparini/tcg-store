import { getLogos } from "../../energyLogos";
import "./ItemDetailTitle.css";

const ItemDetailTitle = ({...card}) => {

    if(card.supertype === "Pokémon"){
        return (
            <div className="itemDetail__title">
                <h1>{card.name}</h1>
                <div>
                    <span className="itemDetail__supertype">{card.supertype}</span>
                    <span className="itemDetail__subtype">{card.subtypes.join(" ")}</span>
                    <span className="itemDetail__hp">
                        HP
                        {card.hp}
                        {getLogos(card.types)}
                    </span>
                </div>
            </div>
        )
        
    } else if(card.supertype === "Trainer"){
        if(card.subtypes !== undefined){

            return (
                <div className="itemDetail__title">
                    <h1>{card.name}</h1>
                    <div>
                        <span className="itemDetail__supertype">{card.supertype}</span>
                        <span className="itemDetail__subtype">{card.subtypes.join(" ")}</span>
                        <span className="itemDetail__hp"></span>
                    </div>
                </div>
            )
            
        }else{

            return (
                <div className="itemDetail__title">
                    <h1>{card.name}</h1>
                    <div>
                        <span className="itemDetail__supertype">{card.supertype}</span>
                    </div>
                </div>
            )

        }

    } else if(card.supertype === "Energy"){
        return (
            <div className="itemDetail__title">
                <h1>{card.name}</h1>
                <div>
                    <span className="itemDetail__supertype">{card.supertype}</span>
                    <span className="itemDetail__subtype">{card.subtypes}</span>
                    <span className="itemDetail__hp"></span>
                </div>
            </div>
        )
    }
}

export default ItemDetailTitle;
import { getLogo } from "../../energyLogos";
import "./ItemDetailAttacks.css";

const ItemDetailAttacks = ({attacks}) => {
    
    return(
        <>
            {attacks.map(attack => {
                return(
                    <div className="itemDetailAttacks" key={attacks.indexOf(attack)}>
                        <div>
                            <span>
                                {attack.cost.map(type => getLogo(type))}
                            </span>
                            <h3>{attack.name}</h3>
                            <span>{attack.damage}</span>
                        </div>
                        <p>{attack.text}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ItemDetailAttacks;

{/* {card.attacks?.map(attack => {
    return (
        <div className="itemDetail__attacks" key={attack.name}>
            <div>
                <span>{attack.cost.map(type => {
                    return getLogo(type);
                })}</span>
                <h4>{attack.name}</h4>
                <span>{attack.damage}</span>
            </div>
            <p>{attack.text}</p>
        </div>
    )
})} */}
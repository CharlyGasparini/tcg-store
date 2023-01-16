import { getLogos } from "../../energyLogos";
import "./ItemDetailAttacks.css";

const ItemDetailAttacks = ({attacks}) => {
    
    return(
        <>
            {attacks.map(attack => {
                return(
                    <div className="itemDetailAttacks" key={attacks.indexOf(attack)}>
                        <div>
                            <span>
                                {getLogos(attack.cost)}
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
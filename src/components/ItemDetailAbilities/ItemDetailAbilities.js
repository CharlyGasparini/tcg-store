import "./ItemDetailAbilities.css";

const ItemDetailAbilities = ({abilities}) => {
    
    return(
        <>
            {abilities.map(ability => {
                return(
                    <div className="itemDetailAbilities" key={abilities.indexOf(ability)}>
                        <h4>{ability.type}</h4>
                        <h3>{ability.name}</h3>
                        <p>{ability.text}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ItemDetailAbilities;
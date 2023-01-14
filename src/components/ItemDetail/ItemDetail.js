import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({card}) => {

    console.log(renderAbilities)


    // if(card.abilities !== undefined){
    //     return (
    //             <div key={card.abilities.name}>
    //                 <h3>{card.abilities.type}</h3>
    //                 <h4>{card.abilities.name}</h4>
    //                 <p>{card.abilities.text}</p>
    //             </div> 
    //             )
    // }

    const renderAbilities = card.abilities.map(ability => {
        return (
        <div key={ability.name}>
            <h3>{ability.type}</h3>
            <h4>{ability.name}</h4>
            <p>{ability.text}</p>
        </div> 
        )
    })

    console.log(renderAbilities)

    return (
        <div className="itemDetail">
            <div className="itemDetail__col">
                <img className="itemDetail__cardImg" src={card.images.large} alt={card.name} />
                <ItemCount initial={1} stock={4} onAdd={(count) => console.log("Se agregaron " + count + " productos")} />
            </div>
            <div className="itemDetail__col">
                <h1 className="itemDetail__name">{card.name}</h1>
                <div>
                    <span className="itemDetail__subtype">{card.subtypes}</span>
                    <span className="itemDetail__hp">HP{card.hp}</span>
                </div>
            </div>
            <div>
                <h3>{card.abilities.type}</h3>
                <h4>{card.abilities.name}</h4>
                <p>{card.abilities.text}</p>
            </div> 
        </div>
    )
}

export default ItemDetail;

const EnergyLogos = ({types}) => {

    const energyLogos = {
        "Colorless": "../images/colorless-e.png", 
        "Darkness": "../images/darkness-e.png",
        "Dragon": "../images/dragon-e.png",
        "Fairy": "../images/fairy-e.png",
        "Fighting": "../images/fighting-e.png",
        "Fire": "../images/fire-e.png",
        "Grass": "../images/grass-e.png",
        "Lightning": "../images/lightning-e.png",
        "Metal": "../images/metal-e.png",
        "Psychic": "../images/psyquic-e.png",
        "Water": "../images/water-e.png"    
    }
    const arrayOfTypes = (types.some(type => typeof type === "string")) ? 
    types : (types.map(obj => obj.type));
    let count = 0;

    return (
        <>
            {arrayOfTypes.map((type => {
                count += 1;
                return (
                    <img src={energyLogos[type]} alt={type} style={{width:"30px"}} key={count} />
                )
            }))}
        </>
    )
}

export default EnergyLogos;
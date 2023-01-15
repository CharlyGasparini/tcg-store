const energyLogos = {
    "Colorless": "./images/colorless-e.png",
    "Darkness": "./images/darkness-e.png",
    "Dragon": "./images/dragon-e.png",
    "Fairy": "./images/fairy-e.png",
    "Fighting": "./images/fighting-e.png",
    "Fire": "./images/fire-e.png",
    "Grass": "./images/grass-e.png",
    "Lightning": "./images/lightning-e.png",
    "Metal": "./images/metal-e.png",
    "Psychic": "./images/psyquic-e.png",
    "Water": "./images/water-e.png"    
}

export const getLogo = (type) => {
    return (
        <img src={energyLogos[type]} alt={type} style={{width:"30px"}}/>
    )
}
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

export const getLogos = (types) => {
    
    let count = 0; 

    if(typeof types[0] === "string" || types instanceof String){

        return (
            types.map((type) => {
                count += 1;
                return (
                    <img src={energyLogos[type]} alt={type} style={{width:"30px"}} key={count}/>
                )
            })
        )
    } else{

        return (
            types.map((obj) => {
                count += 1;
                return (
                    <span key={count}>
                        <img src={energyLogos[obj.type]} alt={obj.type} style={{width:"30px"}} />
                        {obj.value}
                    </span>
                )
            })
        )

    }


    
}
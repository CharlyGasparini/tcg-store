import "./ItemDetailRules.css";

const ItemDetailRules = ({rules}) => {
    
    return(
        <>
            {rules.map(rule => {
                return (
                    <p className="itemDetailRules" key={rules.indexOf(rule)}>{rule}</p>
                )
            })}
        </>
    )
}

export default ItemDetailRules;
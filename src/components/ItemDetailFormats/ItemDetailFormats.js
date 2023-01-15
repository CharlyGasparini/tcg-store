import "./ItemDetailFormats.css";

const ItemDetailFormats = ({legalities}) => {

    return (
        <div className="itemDetailFormats">
            <div className="itemDetailFormats__form">
                <span>Standard</span>
                <span className={(legalities.standard) ? "legal" : "notLegal"}>{(legalities.standard) ? "Legal" : "Not Legal"}</span>
            </div>
            <div className="itemDetailFormats__form">
                <span>Expanded</span>
                <span className={(legalities.expanded) ? "legal" : "notLegal"}>{(legalities.expanded) ? "Legal" : "Not Legal"}</span>
            </div>
            <div className="itemDetailFormats__form">
                <span>Unlimited</span>
                <span className={(legalities.unlimited) ? "legal" : "notLegal"}>{(legalities.unlimited) ? "Legal" : "Not Legal"}</span>
            </div>
        </div>
    )
}

export default ItemDetailFormats;
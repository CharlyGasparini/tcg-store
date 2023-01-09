import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="#" className="navbar__brand">
                    <img src="./images/pokeball-logo.png"/>
                    <h2 className="navbar__title">Pokémon Center</h2>
                </a>
                <nav className="navbar__list">
                    <a href="#" className="navbar__listItem">Pokémon</a>
                    <a href="#" className="navbar__listItem">Energias</a>
                    <a href="#" className="navbar__listItem">Entrenadores</a>
                    <a href="#" className="navbar__listItem">Accesorios</a>
                </nav>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;
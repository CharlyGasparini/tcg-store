import { NavLink, useNavigate } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="container">
                <span onClick={() => navigate("/")} className="navbar__brand">
                    <img src="../images/pokeball-logo.png" alt="pokeball logo" />
                    <h2 className="navbar__title">Pokémon Center</h2>
                </span>
                <nav className="navbar__list">
                    <NavLink to={"/category/Pokémon"} className={({isActive}) => isActive ? "navbar__listItem-active" : "navbar__listItem"}>Pokémon</NavLink>
                    <NavLink to={"/category/Trainer"} className={({isActive}) => isActive ? "navbar__listItem-active" : "navbar__listItem"}>Trainer</NavLink>
                    <NavLink to={"/category/Energy"} className={({isActive}) => isActive ? "navbar__listItem-active" : "navbar__listItem"}>Energy</NavLink>
                </nav>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar;
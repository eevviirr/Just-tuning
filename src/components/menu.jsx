import React from "react";

import { Link } from "react-router-dom";
import "../UI/menu.css";

function Menu({ type }) {
    return (
        <div>
            <nav className={`menu ${type}`}>
                <Link to={"/"} className={`menu__item ${type}`}>
                    Главаня
                </Link>
                <Link to={"/about"} className={`menu__item ${type}`}>
                    О нас
                </Link>
                <Link to={"/contacts"} className={`menu__item ${type}`}>
                    Контакты
                </Link>
            </nav>
        </div>
    );
}
export default Menu;

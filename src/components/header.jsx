import React from "react";

import { Link } from "react-router-dom";
import logo from "../UI/image/svg/logotype.svg";
import "../UI/header.css";
import Search from "./search";
import OrderButton from "./orderButton";
import Menu from "./menu";

function Header({ value, setValue }) {
    return (
        <div className="header">
            <div className="container header__container">
                <Link to="/" className="logo--just-tuning">
                    <img src={logo} alt="Logo" />
                </Link>
                <Search color="black" value={value} setValue={setValue} />
                <Menu type="header" />
                <OrderButton value="Заказать звонок" type="button" />
            </div>
        </div>
    );
}
export default Header;

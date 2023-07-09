import React from "react";

import logo from "../UI/image/svg/logotypeWhite.svg";
import Menu from "./menu";
import Search from "./search";
import "../UI/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="logotype">
          <img src={logo} alt="logo" />
        </div>
        <Menu type="footer__menu" />
        <address className="address">
          <a href="#" className="menu__item address__menu__item">
            г. Москва МКАД 32-й км стр. 4
          </a>
          <a href="#" className="menu__item address__menu__item">
            +7 (495) 204-36-56
          </a>
          <a href="#" className="menu__item address__menu__item">
            +7 (495) 204-36-56
          </a>
        </address>
        <div className="socials">
          <Search color="white" />
          <span className="socials__text">Мы в социальных сетях:</span>
          <div className="socials__icon">
            <div className="social"></div>
            <div className="social"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

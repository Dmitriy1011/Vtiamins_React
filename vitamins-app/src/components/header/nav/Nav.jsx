import React from "react";
import "../../../scss/header.scss";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/" className="header__link">
              FAQ
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/" className="header__link">
              Оплата и доставка
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/" className="header__link">
              Возврат
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/" className="header__link">
              Исследования
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/" className="header__link">
              Личный кабинет
            </NavLink>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Nav;

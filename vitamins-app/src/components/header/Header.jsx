import React from "react";
import '../../scss/header.scss';
import Logo from './icons/Logo';
import Cart from "./icons/Cart";
import Nav from "./nav/Nav";

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <Logo />
                    <Nav />
                    <span className="header__phone">
                        8 8(800) 600-09-90
                    </span>
                    <div className="header__cart">
                        <Cart />
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;

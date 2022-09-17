import React from "react";
import logoSvg from '../../../assets/img/svg/logo.svg';

const Logo  = () => {
    return (
        <div>
            <img className="header__logo" src={logoSvg} alt="Логотип" />
        </div>
    )
} 

export default Logo;
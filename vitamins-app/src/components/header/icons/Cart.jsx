import React from "react";
import cartSvg from '../../../assets/img/svg/basket 1.svg';

const Cart  = () => {
    return (
        <div className="header__cart">
            <img className="header__cart-img" src={cartSvg} alt="Корзина" />
            <span className="header__cart-counter">1</span>
        </div>
    )
} 

export default Cart;
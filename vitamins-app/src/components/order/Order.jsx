import React from "react";
import '../../scss/order.scss';
import gingerImg from '../../assets/img/png/ginger-order.webp';
import nootriesImg from '../../assets/img/png/nootris.webp';
import virusImg from '../../assets/img/png/vorus.webp';

const Order = () => {
    return (
        <section className="order">
        <div className="container">
            <div className="order-container">
                <h2 className="order__title">
                    <span className="order__title-upper">
                        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                    </span>
                    <span className="order__title-lower">
                        СО СКИДКОЙ -15% ПЕРВЫМ!
                    </span>
                </h2>

                <div className="order__price">
                    <p className="order__price-cross">750₽</p>
                    <p className="order__price-actual">690₽</p>
                </div>

                <div className="order__content">
                    <div className="order__content-ginger">
                        <img className="order__content-ginger-img" src={gingerImg} alt="Содержит имбирь" />
                        <p className="order__content-ginger-text">
                            Содержит <span className="order__content-ginger-text-orange">имбирь</span>
                        </p>
                    </div>

                    <div className="order__content-delivery">
                        <img className="order__content-delivery-img" src={nootriesImg} alt="Доставка" />

                        <div className="order__content-delivery-text">
                            <p className="order__content-delivery-text-upper">+ Бесплатная доставка</p>
                            <p className="order__content-delivery-text-lower">Специальная цена</p>
                        </div>
                    </div>

                    <div className="order__content-virus">
                        <img className="order__content-virus-img" src={virusImg} alt="Нейтрализует вирусы" />
                        <p className="order__content-virus-text">
                            Нейтрализует <span className="order__content-virus-text-orange">вирусы</span>
                        </p>
                    </div>
                </div>

                <div className="order__lower-wrapper">
                    <button className="order__lower-wrapper-btn">Оформить заказ</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Order;
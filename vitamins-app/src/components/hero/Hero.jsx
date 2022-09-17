import React from "react";
import '../../scss/hero.scss';

const Hero = () => {
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div className="hero__content-top">
                            <h1 className="hero__content-top-title">
                                АКТИВИРУЙ ИММУНИТЕТ!
                            </h1>
                            <p className="hero__content-top-descr">
                                Всего пять секунд в день помогут укрепить иммунитет
                                и повысить защитные силы организма
                            </p>
                        </div>
                        <div className="hero__content-bottom">
                            <h2 className="hero__content-bottom-title">
                                NOOTRIS ПОМОГАЕТ
                            </h2>
                            <p className="hero__content-bottom-descr">
                                Вашему организму во время пандемии
                                и сезонных простуд
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero__empty"></div>
            </div>
        </div>
    </section>
    )
}

export default Hero;
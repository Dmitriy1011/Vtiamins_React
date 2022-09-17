import React from "react";
import '../../scss/background.scss';
import gradient_1 from '../../assets/img/svg/gradient-1.svg';
import gradient_2 from '../../assets/img/svg/gradient-2.svg';
import gradient_3 from '../../assets/img/svg/gradient-3.svg';
import gradient_4 from '../../assets/img/svg/gradient-4.svg';
import gradient_5 from '../../assets/img/svg/gradient-5.svg';
import gradient_6 from '../../assets/img/svg/gradient-6.svg';
import gradient_7 from '../../assets/img/svg/gradient-7.svg';
import gradient_8 from '../../assets/img/svg/gradient-8.svg';

const Background = () => {
    return (
        <div className="background">
            <div className="background__wrapper">
                <img className="background__wrapper-img img-1" src={gradient_1} alt="Вектор1" />
                <img className="background__wrapper-img img-2" src={gradient_2} alt="Вектор2" />
                <img className="background__wrapper-img img-3" src={gradient_3} alt="Вектор3" />
                <img className="background__wrapper-img img-4" src={gradient_4} alt="Вектор4" />
                <img className="background__wrapper-img img-5" src={gradient_5} alt="Вектор5" />
                <img className="background__wrapper-img img-6" src={gradient_6} alt="Вектор6" />
                <img className="background__wrapper-img img-7" src={gradient_7} alt="Вектор7" />
                <img className="background__wrapper-img img-8" src={gradient_8} alt="Вектор8" />
            </div>
        </div>
    )
}

export default Background;
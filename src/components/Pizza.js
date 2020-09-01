import React from 'react';
import { Col, } from 'react-bootstrap';

import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import Bacon from "../assets/Bacon.png";

export default function Customizer({ topping }) {
    const addRemoveToppingToDom = (toppingName) => {
        let copy = [...topping];
        let classToAdd = '';
        copy.map((val =>
            (val.name === toppingName && val.add === true) ? classToAdd = 'add' : null
        ));

        return classToAdd;
    }

    return (
        <Col xs={12} lg={6}>
            <img src={Base} alt="Pizza Base" />
            <img src={Cheese} className={`position-absolute ${addRemoveToppingToDom('cheese')}`} alt="Pizza Cheese" />
            <img className={`position-absolute ${addRemoveToppingToDom('olive')}`} src={Olive} alt="Pizza Olive" />
            <img src={Pineapple} className={`position-absolute ${addRemoveToppingToDom('pineapple')}`} alt="Pizza Pineapple" />
            <img src={Mushroom} className={`position-absolute ${addRemoveToppingToDom('mushroom')}`} alt="Pizza Mushroom" />
            <img src={Basil} className={`position-absolute ${addRemoveToppingToDom('basil')}`} alt="Pizza Basil" />
            <img src={Tomato} className={`position-absolute ${addRemoveToppingToDom('tomato')}`} alt="Pizza Tomato" />
            <img src={Bacon} className={`position-absolute ${addRemoveToppingToDom('bacon')}`} alt="Bacon" />
        </Col>

    )
}

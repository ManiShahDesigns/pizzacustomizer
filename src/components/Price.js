import React from 'react';
import { Row } from 'react-bootstrap';

export default function Customizer({ topping }) {

    const calcTotalPrice = () => {
        let copy = [...topping];
        let total = [];
        let price = 0;

        copy.map((val => {
            if (val.add === true) {
                total.push(val.price);
                price = total.reduce(function (a, b) {
                    return a + b;
                }, 0);
            }
            return price;
        }));

        return price;
    }

    return (
        <Row className="justify-content-center py-5 price">
            <h2>Total Price: $<span>{calcTotalPrice()}</span></h2>
        </Row>
    )
}

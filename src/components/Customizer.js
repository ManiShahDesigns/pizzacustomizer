import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Pizza from './Pizza';
import Price from './Price';
import Toppings from './Toppings';
import ResetBtn from './ResetBtn';


export default function Customizer({ topping, onChange, totalPrice, onReset }) {
    return (
        <Container className="py-5">
            <Row>
                <Pizza topping={topping} />
                <Toppings topping={topping} onChange={onChange} />
            </Row>

            <Row className="py-5">
                <ResetBtn onReset={onReset} />
                <Price topping={topping} totalPrice={totalPrice} />
            </Row>
        </Container >
    )
}

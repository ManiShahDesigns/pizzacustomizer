import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Pizza from './Pizza';
import Price from './Price';
import Toppings from './Toppings';

export default function Customizer({ topping, onChange }) {
    return (
        <Container className="py-5">
            <Row>
                <Pizza topping={topping} />
                <Toppings topping={topping} onChange={onChange} />
            </Row>

            <Price topping={topping} />
        </Container >
    )
}

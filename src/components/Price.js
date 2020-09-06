import React from 'react';
import { Row } from 'react-bootstrap';

export default function Price({ totalPrice }) {

    return (
        <Row className="justify-content-center py-5 price">
            <h2>Total Price: $<span>{totalPrice}</span></h2>
        </Row>
    )
}

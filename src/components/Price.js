import React from 'react';
import { Col } from 'react-bootstrap';

export default function Price({ totalPrice }) {

    return (
        <Col md={6} className="text-center price mt-5 mt-md-0">
            <h2>Total Price: $<span>{totalPrice}</span></h2>
        </Col>
    )
}

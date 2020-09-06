import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function Customizer({ onChange, topping }) {

    return (
        <Col xs={12} lg={6}>
            <Row className="checkbox__wrapper mt-5">
                {
                    topping.map((item, index) => {
                        return (<Form.Group as={Col} sm="6" controlId={item.name} key={index} >
                            <Form.Check onChange={() => onChange(item.name)} name={item.name} title={item.name} label={`${item.name} $${item.price}`} checked={item.add} />
                        </Form.Group>)
                    })
                }
            </Row>
        </Col>
    )
}

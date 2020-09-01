import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function Customizer({ topping, onChange }) {
    return (
        <Col xs={12} lg={6}>
            <Row className="py-5 py-lg-0">
                <Form.Group as={Col} sm="6" controlId="cheese">
                    <Form.Check onChange={() => onChange('cheese')} name="Cheese" label="Cheese $1.5" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="olives">
                    <Form.Check onChange={() => onChange('olive')} name="Olives" label="Olives $1" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="pineapple">
                    <Form.Check onChange={() => onChange('pineapple')} name="Pineapple" label="Pineapple $2" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="mushrooms">
                    <Form.Check onChange={() => onChange('mushroom')} name="Mushrooms" label="Mushrooms $1.5" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="basil">
                    <Form.Check onChange={() => onChange('basil')} name="Basil" label="Basil $1" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="tomatoes">
                    <Form.Check onChange={() => onChange('tomato')} name="Tomatoes" label="Tomatoes  $1.5" />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="bacon">
                    <Form.Check onChange={() => onChange('bacon')} name="Bacon" label="Bacon $2.5" />
                </Form.Group>
            </Row>
        </Col>
    )
}

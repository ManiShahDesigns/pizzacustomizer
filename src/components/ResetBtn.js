import React from 'react'
import { Button, Col } from 'react-bootstrap'

export default function ResetBtn({ onReset }) {
    return (
        <Col md={6} className="text-center">
            <Button onClick={onReset}>
                Reset
        </Button>
        </Col>
    )
}

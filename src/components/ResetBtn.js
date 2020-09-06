import React from 'react'
import { Button } from 'react-bootstrap'

export default function ResetBtn({ onReset }) {
    return (
        <Button onClick={onReset}>
            Reset
        </Button>
    )
}

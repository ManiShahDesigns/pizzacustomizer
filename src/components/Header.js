import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar className="nav">
            <Container fluid className="justify-content-center">
                <h2>
                    <Link to="/">
                        Pizza Customizer
                    </Link>
                </h2>
            </Container>
        </Navbar>
    )
}

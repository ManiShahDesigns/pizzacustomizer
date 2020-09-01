import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home d-flex text-center">
            <div className="home__wrapper">
                <h1 className="mb-5">
                    Make your pizza great again!
                </h1>

                <Button>
                    <Link to="/customizer">
                        Customize your pizza
                    </Link>
                </Button>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
const NavBar = ({ setSearch, search, rate, setRate, handleShow }) => {
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const handleRate = (value) => {
        setRate(value);
    };
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand style={{ color: "white" }}>
                        Tv Series
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                    </Navbar.Collapse>
                    <StarRatingComponent
                        name="rate"
                        className="reactstars"
                        starCount={10}
                        value={rate}
                        onStarClick={handleRate}
                    />
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="find your movie"
                    />
                    <Button onClick={handleShow}>add movie</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;

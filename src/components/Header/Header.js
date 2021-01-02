import './Header.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { fetchRecipes, showModalCreate } from '../../redux/actions';

import React from 'react';
import { connect } from 'react-redux';

const Header = ({ showModalCreate, fetchRecipes }) => {
    const handleShowModal = (event) => {
        event.preventDefault();

        showModalCreate(true);
    };

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            fixed="top"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.png"
                        className="d-inline-block align-top"
                    />{' '}
                    CRUD RECIPES
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home1</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href="#add"
                            className="btn btn-danger btn-add"
                            onClick={handleShowModal}
                        >
                            RECIPE ADD
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

const mapDispatchToProps = {
    showModalCreate,
    fetchRecipes,
};

export default connect(null, mapDispatchToProps)(Header);

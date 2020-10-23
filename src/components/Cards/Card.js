import './Card.scss';

import { Button, ButtonGroup, ButtonToolbar, Card } from 'react-bootstrap';

import React from 'react';

export default ({ post }) => {
    return (
        <Card>
            <Card.Img variant="top" src={`/images/${post}.jpg`} />
            <Card.Body>
                <Card.Title>Recipe Number-{post}</Card.Title>
                <Card.Subtitle>Price: ${post}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>

                <ButtonToolbar
                    className="flex-column"
                    aria-label="Toolbar with Button groups"
                >
                    <ButtonGroup
                        className="justify-content-between"
                        aria-label="View page Button group"
                    >
                        <Button
                            variant="light"
                            size="lg"
                            aria-label="Edit"
                            block
                        >
                            Edit
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup
                        className="justify-content-between"
                        aria-label="Edit page Button group"
                    >
                        <Button variant="danger" size="lg" aria-label="Delete">
                            Delete
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            aria-label="Upgrate"
                        >
                            Upgrate
                        </Button>
                        <Button
                            variant="light"
                            className="close"
                            size="lg"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    );
};

/* <div className="card col-3">
    <img className="card-img-top" src="..." alt="..." />
    <div className="card-body">
        <h4 className="card-title">Заголовок карточки {post}</h4>
        <h6 className="card-subtitle">Подзаголовок карточки</h6>
        <p className="card-text">Некоторый текст...</p>

        <button className="btn btn-light btn-block">Edit</button>

        <div
            className="btn-toolbar justify-content-between"
            role="group"
        >
            <button className="btn btn-light">Delete</button>
            <button className="btn btn-light">Upgrate</button>
            <button className="btn btn-light">Cancel</button>
        </div>
    </div>
</div> */

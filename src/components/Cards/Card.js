import './Card.scss';

import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    Collapse,
    Form,
} from 'react-bootstrap';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default ({ post }) => {
    const [isEdit, setIsEdit] = useState(false);
    let [item, setItem] = useState(
        {
            postId: post,
            postImg: `/images/${post}.jpg`,
            postTitle: `Recipe Number-${post}`,
            postPrice: post,
            postDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.${post}`,
        },
    );
    // console.log('item: ', item);

    const handleShowView = () => setIsEdit(false);
    const handleShowEdit = () => setIsEdit(true);

    const handlerChangeInput = (event) => {
        setItem({ ...item, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Card border="info">
            <Form onSubmit={handleSubmit}>
                <Card.Img variant="top" src={item.postImg} />

                <Card.Body>
                    <Collapse in={isEdit}>
                        <Form.Group controlId="postImg">
                            <Form.Control
                                type="text"
                                placeholder="Enter image url"
                                name="postImg"
                                defaultValue={item.postImg}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>
                    </Collapse>

                    <Collapse in={!isEdit}>
                        <Card.Title>{item.postTitle}</Card.Title>
                    </Collapse>
                    <Collapse in={isEdit}>
                        <Form.Group controlId="postTitle">
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="postTitle"
                                defaultValue={item.postTitle}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>
                    </Collapse>

                    <Collapse in={!isEdit}>
                        <Card.Subtitle>
                            Price: ${item.postPrice}
                        </Card.Subtitle>
                    </Collapse>
                    <Collapse in={isEdit}>
                        <Form.Group controlId="postPrice">
                            <Form.Control
                                type="number"
                                placeholder="Price"
                                name="postPrice"
                                defaultValue={item.postPrice}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>
                    </Collapse>

                    <Collapse in={!isEdit}>
                        <Card.Text>{item.postDescription}</Card.Text>
                    </Collapse>
                    <Collapse in={isEdit}>
                        <Form.Group controlId="postDescription">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Description"
                                name="postDescription"
                                defaultValue={item.postDescription}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>
                    </Collapse>

                    <ButtonToolbar
                        className="flex-column"
                        aria-label="Toolbar with Button groups"
                    >
                        <Collapse in={!isEdit}>
                            <ButtonGroup
                                className="justify-content-between"
                                aria-label="View page Button group"
                            >
                                <Button
                                    onClick={handleShowEdit}
                                    variant="light"
                                    size="lg"
                                    aria-label="Edit"
                                    block
                                >
                                    Edit
                                </Button>
                            </ButtonGroup>
                        </Collapse>

                        <Collapse in={isEdit}>
                            <ButtonGroup
                                className="justify-content-between"
                                aria-label="Edit page Button group"
                            >
                                <Button
                                    variant="danger"
                                    size="lg"
                                    aria-label="Delete"
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    size="lg"
                                    aria-label="Upgrate"
                                >
                                    Upgrate
                                </Button>
                                <Button
                                    onClick={handleShowView}
                                    variant="light"
                                    className="close"
                                    size="lg"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            </ButtonGroup>
                        </Collapse>
                    </ButtonToolbar>
                </Card.Body>
            </Form>
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

import { Button, Form, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { createPost, showModalCreate } from '../../redux/actions';

import { connect } from 'react-redux';

const AddCard = ({ stateShowModalCreate, showModalCreate, createPost, emptyCard }) => {
    const [show, setShow] = useState(stateShowModalCreate);
    let [item, setItem] = useState(emptyCard);

    useEffect(() => {
        setShow(stateShowModalCreate);
    }, [setShow, stateShowModalCreate]);

    const handleClose = () => {
        showModalCreate(false);
        setShow(false);
        setItem({ ...emptyCard });
    };

    const handlerChangeInput = (event) => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createPost(item);
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="postImg">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image url"
                                name="postImg"
                                value={item.postImg}
                                onChange={handlerChangeInput}
                            />
                            <Form.Text className="text-muted">
                                You must enter a valid image URL
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="postTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="postTitle"
                                value={item.postTitle}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="postPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Price"
                                name="postPrice"
                                value={item.postPrice}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>

                        <Form.Group controlId="postDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Description"
                                name="postDescription"
                                value={item.postDescription}
                                onChange={handlerChangeInput}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => ({
    stateShowModalCreate: state.cards.showModalCreate,
    emptyCard: state.cards.emptyCard,
});

const mapDispatchToProps = {
    showModalCreate,
    createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);

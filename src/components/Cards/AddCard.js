import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

export default () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="postImg">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image url"
                            />
                            <Form.Text className="text-muted">
                                You must enter a valid image URL
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="postTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>

                        <Form.Group controlId="postPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" />
                        </Form.Group>

                        <Form.Group controlId="postDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

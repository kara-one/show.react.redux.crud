import { Button, Form, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { createPost, showModalCreate } from '../../redux/actions';

import { Formik } from 'formik';
import { connect } from 'react-redux';

const AddCard = ({
    stateShowModalCreate,
    showModalCreate,
    createPost,
    emptyCard,
    validationSchema,
}) => {
    const [show, setShow] = useState(stateShowModalCreate);
    let [item, setItem] = useState(emptyCard);

    useEffect(() => {
        setShow(stateShowModalCreate);
    }, [setShow, stateShowModalCreate]);

    const schema = validationSchema;

    const handleClose = () => {
        showModalCreate(false);
        setShow(false);
        setItem({ ...emptyCard });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Formik
                    validationSchema={schema}
                    initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                        createPost(values);
                        handleClose();
                        setSubmitting(false);
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
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
                                        value={values.postImg}
                                        onChange={handleChange}
                                        isInvalid={!!errors.postImg}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.postImg}
                                    </Form.Control.Feedback>
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
                                        value={values.postTitle}
                                        onChange={handleChange}
                                        isInvalid={!!errors.postTitle}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.postTitle}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="postPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="postPrice"
                                        value={values.postPrice}
                                        onChange={handleChange}
                                        isInvalid={!!errors.postPrice}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.postPrice}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="postDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Description"
                                        name="postDescription"
                                        value={values.postDescription}
                                        onChange={handleChange}
                                        isInvalid={!!errors.postDescription}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.postDescription}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => ({
    stateShowModalCreate: state.cards.showModalCreate,
    emptyCard: state.cards.emptyCard,
    validationSchema: state.cards.validationSchema,
});

const mapDispatchToProps = {
    showModalCreate,
    createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);

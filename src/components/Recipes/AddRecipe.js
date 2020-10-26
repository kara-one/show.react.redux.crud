import { Button, Form, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { createRecipe, showModalCreate } from '../../redux/actions';

import { Formik } from 'formik';
import { connect } from 'react-redux';

const AddRecipe = ({
    stateModalCreate,
    showModalCreate,
    createRecipe,
    emptyRecipe,
    validationRecipe,
}) => {
    const [show, setShow] = useState(stateModalCreate);
    let [item, setItem] = useState(emptyRecipe);

    useEffect(() => {
        setShow(stateModalCreate);
    }, [setShow, stateModalCreate]);

    const handleClose = () => {
        showModalCreate(false);
        setShow(false);
        setItem({ ...emptyRecipe });
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Formik
                    validationSchema={validationRecipe}
                    initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                        createRecipe(values);
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
                                <Form.Group controlId="recipeImg">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter image url"
                                        name="recipeImg"
                                        value={values.recipeImg}
                                        onChange={handleChange}
                                        isInvalid={!!errors.recipeImg}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.recipeImg}
                                    </Form.Control.Feedback>
                                    <Form.Text className="text-muted">
                                        You must enter a valid image URL
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="recipeTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        name="recipeTitle"
                                        value={values.recipeTitle}
                                        onChange={handleChange}
                                        isInvalid={!!errors.recipeTitle}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.recipeTitle}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="recipePrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        name="recipePrice"
                                        value={values.recipePrice}
                                        onChange={handleChange}
                                        isInvalid={!!errors.recipePrice}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.recipePrice}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="recipeDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Description"
                                        name="recipeDescription"
                                        value={values.recipeDescription}
                                        onChange={handleChange}
                                        isInvalid={!!errors.recipeDescription}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.recipeDescription}
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
    stateModalCreate: state.recipes.stateModalCreate,
    emptyRecipe: state.recipes.emptyRecipe,
    validationRecipe: state.recipes.validationRecipe,
});

const mapDispatchToProps = {
    showModalCreate,
    createRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);

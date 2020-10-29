import './Recipe.scss';

import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Card,
    Col,
    Collapse,
    Form,
} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
    setIdItemDelete,
    showModalDelete,
    updateRecipe,
} from '../../redux/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({
    recipe,
    updateRecipe,
    showModalDelete,
    setIdItemDelete,
    validationRecipe,
}) => {
    const [isEdit, setIsEdit] = useState(false);
    /** let [item, setItem] = useState(
        {
            recipeId: recipe,
            recipeImg: `/images/${recipe}.jpg`,
            recipeTitle: `Recipe Number-${recipe}`,
            recipePrice: recipe,
            recipeDescription: `Some quick example text to build on the card title and make up the bulk of the card's content.${recipe}`,
        },
    ); */
    let [item, setItem] = useState(recipe);
    useEffect(() => {
        setItem(recipe);
    }, [setItem, recipe]);
    // console.log('recipe: ', recipe);
    // console.log('item: ', item);

    const handleShowEdit = (event) => {
        setIsEdit(true);
    };
    const handleShowView = () => {
        setItem({ ...recipe });
        setIsEdit(false);
    };
    const handleShowDelete = (event) => {
        event.preventDefault();

        setIdItemDelete(item.recipeId);
        showModalDelete(true);
    };

    return (
        <Col xs={12} md={6} lg={4} className="mt-3">
            <Card border="info">
                <Formik
                    validationSchema={validationRecipe}
                    initialValues={item}
                    onSubmit={(values, { setSubmitting }) => {
                        updateRecipe(values);
                        setIsEdit(false);
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
                        <Form noValidate onSubmit={handleSubmit}>
                            <div className="card-img-wrap">
                                <Card.Img variant="top" src={item.recipeImg} />
                            </div>

                            <Card.Body>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="recipeImg">
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
                                    </Form.Group>
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Title>{item.recipeTitle}</Card.Title>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="recipeTitle">
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
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Subtitle>
                                        Price: ${item.recipePrice}
                                    </Card.Subtitle>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="recipePrice">
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
                                </Collapse>

                                <Collapse in={!isEdit}>
                                    <Card.Text>
                                        {item.recipeDescription}
                                    </Card.Text>
                                </Collapse>
                                <Collapse in={isEdit}>
                                    <Form.Group controlId="recipeDescription">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Description"
                                            name="recipeDescription"
                                            value={values.recipeDescription}
                                            onChange={handleChange}
                                            isInvalid={
                                                !!errors.recipeDescription
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.recipeDescription}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Collapse>
                            </Card.Body>

                            <Card.Footer>
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
                                                onClick={handleShowDelete}
                                                variant="danger"
                                                size="lg"
                                                aria-label="Delete"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
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
                                                className="close btn-close"
                                                size="lg"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    &times;
                                                </span>
                                            </Button>
                                        </ButtonGroup>
                                    </Collapse>
                                </ButtonToolbar>
                            </Card.Footer>
                        </Form>
                    )}
                </Formik>
            </Card>
        </Col>
    );
};

const mapStateToProps = (state) => ({
    validationRecipe: state.recipes.validationRecipe,
});

const mapDispatchToProps = {
    updateRecipe,
    setIdItemDelete,
    showModalDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

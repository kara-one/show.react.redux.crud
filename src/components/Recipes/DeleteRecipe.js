import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import {
    deleteRecipe,
    setIdItemDelete,
    showModalDelete,
} from '../../redux/actions';

import { connect } from 'react-redux';

const DeleteRecipe = ({
    idItemDelete,
    stateModalDelete,
    setIdItemDelete,
    showModalDelete,
    deleteRecipe,
}) => {
    const [show, setShow] = useState(stateModalDelete);

    useEffect(() => {
        setShow(stateModalDelete);
    }, [setShow, stateModalDelete]);

    const handleClose = () => {
        showModalDelete(false);
        setIdItemDelete(0);
        setShow(false);
    };

    const handleDelete = () => {
        deleteRecipe(idItemDelete);
        showModalDelete(false);
        setIdItemDelete(0);
        setShow(false);
    };

    return (
        <>
            <Modal
                className="bg-dark"
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-warning">
                    <div className="delete-confirm__message text-danger text-center text-uppercase display-4">
                        Are you sure?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        YES
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => ({
    stateModalDelete: state.recipes.stateModalDelete,
    idItemDelete: state.recipes.idItemDelete,
});

const mapDispatchToProps = {
    setIdItemDelete,
    showModalDelete,
    deleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRecipe);

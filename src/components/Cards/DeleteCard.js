import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { deletePost, idItemDelete, showModalDelete } from '../../redux/actions';

import { connect } from 'react-redux';

const DeleteCard = ({
    __idItemDelete,
    stateShowModalDelete,
    idItemDelete,
    showModalDelete,
    deletePost,
}) => {
    const [show, setShow] = useState(stateShowModalDelete);

    useEffect(() => {
        setShow(stateShowModalDelete);
    }, [setShow, stateShowModalDelete]);

    const handleClose = () => {
        showModalDelete(false);
        idItemDelete(0);
        setShow(false);
    };

    const handleDelete = () => {
        deletePost(__idItemDelete);
        showModalDelete(false);
        idItemDelete(0);
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
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-warning">
                    <div className="delete-confirm__message text-danger text-center text-uppercase display-4">
                        Are you sure?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>YES</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => ({
    stateShowModalDelete: state.cards.showModalDelete,
    __idItemDelete: state.cards.idItemDelete,
});

const mapDispatchToProps = {
    idItemDelete,
    showModalDelete,
    deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCard);

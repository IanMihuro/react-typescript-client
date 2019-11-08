import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {IUser} from '../../utils/Types';

interface IDeleteModalProps {
    user: IUser,
    show: boolean,
    handleClose: any,
    handleDelete: any
};

const DeleteModal: React.SFC<IDeleteModalProps> = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    Delete {props.user.firstName}?
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                Are you user you want to delete {props.user.firstName} {props.user.lastName}?
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => props.handleDelete(props.user._id)}>OK</Button>
                    <Button variant="primary" onClick={props.handleClose}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;

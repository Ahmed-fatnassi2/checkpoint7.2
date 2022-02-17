import React from "react";
import { Modal, Button } from "react-bootstrap";
const AddMovie = ({ handleSubmit, handleChange, show, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        name="name"
                        type="text"
                        placeholder="tilte"
                        onChange={handleChange}
                    />
                    <input
                        name="description"
                        type="text"
                        placeholder="description"
                        onChange={handleChange}
                    />
                    <input
                        name="posterUrl"
                        type="text"
                        placeholder="posterUrl"
                        onChange={handleChange}
                    />
                    <input
                        name="rate"
                        type="text"
                        placeholder="rate"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMovie;

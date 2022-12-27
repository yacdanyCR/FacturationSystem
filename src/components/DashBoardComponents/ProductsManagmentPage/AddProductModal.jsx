import React, { useRef, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export const AddProductModal = ({ show, handleClose, setIsAddNew, setProduct }) => {
    const formRef = useRef(null);
    const [newData, setNewData] = useState(
        {
            code: 0,
            name: "",
            existences: 0,
            price: 0,
            iva: 0
        })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setNewData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleAddProduct = async (e) => {
        e.preventDefault();
        setProduct((prev) => {
            return [...prev, newData]
        });
        setIsAddNew(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="text-bg-primary"
                >
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddProduct} ref={formRef}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Code</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Code"
                                type="number"
                                name="code"
                                variant="success"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Name</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Name"
                                type="text"
                                name="name"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Existences</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Existences"
                                type="number"
                                name="existences"
                                variant="success"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Price</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Price"
                                type="number"
                                name="price"
                                variant="success"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">IVA</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter IVA"
                                type="number"
                                name="iva"
                                variant="success"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-secondary"
                        className="me-auto"
                        onClick={(e) => {
                            formRef.current.reset();
                        }}
                    >
                        Reset feilds
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAddProduct}>
                        Add Products
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProductModal
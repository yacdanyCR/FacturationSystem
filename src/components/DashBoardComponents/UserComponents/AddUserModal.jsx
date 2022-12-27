import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddUserModal = ({ handleClose, show, setIsAddNew }) => {
    const formRef = useRef(null);
    const [user, setUser] = useState(
        {
            username: "",
            email: "",
            password: "",
            profile: ""
        }
    )

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleAddUser = (e) => {
        e.preventDefault();
        setIsAddNew(false);
        console.log(user);
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    closeButton
                    closeVariant="white"
                    className="text-bg-primary"
                >
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddUser} ref={formRef}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Username</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Username"
                                type="text"
                                name="username"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Email</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Email Address"
                                type="email"
                                name="email"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Password</Form.Label>
                            <Form.Control
                                required
                                placeholder="Enter Email Address"
                                type="password"
                                name="password"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold"> Assign Profile</Form.Label>
                            <Form.Select required name="profile" onChange={(e) => handleChange(e)} >
                                <option disabled>choose user profile</option>
                                <option value="admin">admin</option>
                                <option value="vendor">vendor</option>
                            </Form.Select>
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
                    <Button variant="success" onClick={handleAddUser}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddUserModal;
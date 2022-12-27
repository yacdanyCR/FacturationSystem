import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserDetails from '../../components/DashBoardComponents/UserManagmentPage/UserDetails'

export const UserPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <UserDetails />
                </Col>
            </Row>
        </Container>
    )
}

export default UserPage
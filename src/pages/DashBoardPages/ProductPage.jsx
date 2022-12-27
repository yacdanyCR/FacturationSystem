import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductsDetails from '../../components/DashBoardComponents/ProductsComponents/ProductsDetails'

export const ProductPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ProductsDetails />
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage
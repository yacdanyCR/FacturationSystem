import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddProductModal from './AddProductModal';
import DashboardDetails from '../DashboardDetails';
import ProductTable from './ProductTable';

export const ProductsDetails = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const [product, setProduct] = useState([]);
    const handleClose = () => setIsAddNew(false);

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h3>Product Management</h3>
                <Button variant="success" onClick={(e) => setIsAddNew(true)}>
                    Add New
                </Button>
            </div>

            {isAddNew && (
                <AddProductModal
                    show={isAddNew}
                    handleClose={handleClose}
                    setIsAddNew={setIsAddNew}
                    setProduct={setProduct}
                    product={product}
                />
            )}
            <div className="border">
                <DashboardDetails />
                <ProductTable product={product} />
            </div>
        </>
    );
}

export default ProductsDetails
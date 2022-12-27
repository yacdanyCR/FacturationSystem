import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddProductModal from './AddProductModal';
import TableComponent from '../TableComponent';
import DashboardDetails from '../DashboardDetails';

export const ProductsDetails = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const ThTableProps = ['ID', 'NAME', 'QUANTITY']
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
                />
            )}
            <div className="border">
                <DashboardDetails />
                <TableComponent thTableProps={ThTableProps} />
            </div>
        </>
    );
}

export default ProductsDetails
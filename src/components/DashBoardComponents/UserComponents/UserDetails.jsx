import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import TableComponent from '../TableComponent';
import DashboardDetails from '../DashboardDetails';
import AddUserModal from './AddUserModal';

export const UserDetails = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const ThTableProps = ['ID', 'NAME', 'PROFILE']
    const handleClose = () => setIsAddNew(false);

    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h3>Users Management</h3>
                <Button variant="success" onClick={(e) => setIsAddNew(true)}>
                    Add New
                </Button>
            </div>

            {isAddNew && (
                <AddUserModal
                    show={isAddNew}
                    handleClose={handleClose}
                    setIsAddNew={setIsAddNew}
                />
            )}

            <div className="border">
                <DashboardDetails />
            </div>
            <TableComponent thTableProps={ThTableProps} />
        </>
    );
}

export default UserDetails
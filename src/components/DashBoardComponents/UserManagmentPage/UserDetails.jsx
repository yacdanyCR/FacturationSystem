import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import DashboardDetails from '../DashboardDetails';
import AddUserModal from './AddUserModal';
import UserTable from './UserTable';

export const UserDetails = () => {
    const [isAddNew, setIsAddNew] = useState(false);
    const [user, setUser] = useState([]);

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
                    setUser={setUser}
                />
            )}

            <div className="border">
                <DashboardDetails searchData={setUser} />
                <UserTable user={user} />
            </div>
        </>
    );
}

export default UserDetails
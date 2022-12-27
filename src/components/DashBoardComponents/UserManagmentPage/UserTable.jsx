import React from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete, MdModeEditOutline } from "react-icons/md";

export const UserTable = (props) => {
    const userTh = ['username', 'email', 'profile', 'options'];

    return (
        <>
            <Table bordered hover responsive className="mb-0">
                <thead>
                    <tr>
                        {userTh.map((el) => {
                            return (
                                el !== "options"
                                    ? <th>{el.toUpperCase()}</th>
                                    : <th colSpan={2}>{el.toUpperCase()}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.user.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {el.username}
                                </td>
                                <td>
                                    {el.email}
                                </td>
                                <td>
                                    {el.profile}
                                </td>
                                <td>
                                    <MdDelete color='red' size={30} />
                                </td>
                                <td>
                                    <MdModeEditOutline color='blue' size={30} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default UserTable
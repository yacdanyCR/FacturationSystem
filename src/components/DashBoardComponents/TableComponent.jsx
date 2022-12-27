import React from 'react'
import { Table } from 'react-bootstrap'

export const TableComponent = (props) => {
    return (
        <>
            <Table bordered hover responsive className="mb-0">
                <thead>
                    <tr>
                        {props.thTableProps.map((el) => {
                            return (
                                <th>
                                    {el}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent
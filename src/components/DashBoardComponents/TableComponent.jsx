import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

export const TableComponent = (props) => {
    const [apiKey, setApiKey] = useState([]);

    useEffect(() => {
        if (props.apiData.length > 0) {
            const keys = Object.keys(props.apiData[0]);
            setApiKey(keys);
        }

    }, [props.apiData])

    return (
        <>
            <Table bordered hover responsive className="mb-0">
                <thead>
                    <tr>
                        {props.thTableProps.map((el, index) => {
                            return (
                                <th key={index}>
                                    {el}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.apiData.map((el) => {
                        return (
                            <td>
                                {el.username}
                            </td>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent
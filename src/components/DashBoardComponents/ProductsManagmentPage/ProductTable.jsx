import React from 'react'
import { Table } from 'react-bootstrap'
import { MdDelete, MdModeEditOutline } from "react-icons/md";

export const ProductTable = (props) => {
    const ThTableProps = ['code', 'name', 'existences', 'price', 'iva', 'options']

    return (
        <>
            <Table bordered hover responsive className="mb-0">
                <thead>
                    <tr>
                        {ThTableProps.map((el) => {
                            return (
                                el !== "options"
                                    ? <th>{el.toUpperCase()}</th>
                                    : <th colSpan={2}>{el.toUpperCase()}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.product.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {el.code}
                                </td>
                                <td>
                                    {el.name}
                                </td>
                                <td>
                                    {el.existences}
                                </td>
                                <td>
                                    {el.price}
                                </td>
                                <td>
                                    {el.iva}
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

export default ProductTable
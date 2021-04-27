import React from 'react'
// Components
import { Table } from 'semantic-ui-react'

const TableBody = (props) => {

    const ProsConsData = props.data.pros_cons_list

    const ProsConsLogic = ProsConsData.map((point, index) => (
        <Table.Row key={index}>
            <Table.Cell className="weight-cut-pros">
                {point.pro}
            </Table.Cell>
            <Table.Cell className="weight-cut-cons">
                {point.con}
            </Table.Cell>
        </Table.Row>
    ))

    return (
        <Table.Body>
            {ProsConsLogic}
        </Table.Body>
    )
}

export default TableBody
import React from 'react'
// Components
import { Table } from 'semantic-ui-react'

const TableHeading = (props) => {

    const pros_cons_headings = [props.data.pros_heading, props.data.cons_heading]

    const headings_logic = pros_cons_headings.map((heading, index) => (
            <Table.HeaderCell key={index}>{heading} </Table.HeaderCell>
        )
    )

    return (
        <Table.Header>
            <Table.Row>
                {headings_logic}
            </Table.Row>
        </Table.Header>
    )
}

export default TableHeading
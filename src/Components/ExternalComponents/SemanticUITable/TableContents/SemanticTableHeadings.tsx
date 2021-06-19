import React from 'react'
// Components
import { Table } from 'semantic-ui-react'

interface headingProps {
    headings: {
        heading_1: string;
        heading_2: string;
    }
}

interface Props {
    data: headingProps;
}

const TableHeading = (props: Props) => {

    const pros_cons_headings = Object.values(props.data.headings)

    const headings_logic = pros_cons_headings.map((heading: string, index: number) => (
            <Table.HeaderCell key={index}>
                {heading} 
            </Table.HeaderCell>
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
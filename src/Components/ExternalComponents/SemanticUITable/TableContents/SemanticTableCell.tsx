import React from 'react'
import { Table } from 'semantic-ui-react'

interface Props {
    color: string;
    content: string;
    key: number;
}

const SemanticTableCell = (props : Props) => (
    <Table.Cell style={{"backgroundColor" : `${props.color}`}}>
        {props.content}
    </Table.Cell>
)

export default SemanticTableCell
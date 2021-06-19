import React from 'react'
import { Table } from 'semantic-ui-react'

interface Props {
    color: any;
    content: any;
    key: any;
}

const SemanticTableCell = (props : Props) => (
    <Table.Cell style={{"backgroundColor" : `${props.color}`}}>
        {props.content}
    </Table.Cell>
)

export default SemanticTableCell
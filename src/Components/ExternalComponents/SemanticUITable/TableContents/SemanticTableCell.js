import React from 'react'
import { Table } from 'semantic-ui-react'

const SemanticTableCell = (props) => (
    <Table.Cell style={{"backgroundColor" : `${props.color}`}}>
        {props.content}
    </Table.Cell>
)

export default SemanticTableCell
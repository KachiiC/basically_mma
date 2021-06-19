import React from 'react'
// Components
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Collapse from '@material-ui/core/Collapse'

interface Props {
    open: any;
    content: any;
}

const CollapseSectionDropdown = (props: Props) => ( 
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                {props.content}
            </Collapse>
        </TableCell>
    </TableRow>
)

export default CollapseSectionDropdown

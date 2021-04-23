import React from 'react'
// COMPONENTS
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const TableHeadings = (props) => {

    const table_headings = Object.keys(props.data)
        
    const renderHeadings = table_headings.map(
        (heading, index) => (
            <TableCell align="inherit" key={index}>
                <b>{heading}</b>
            </TableCell>
        )
    ).slice(0,props.table_columns)
    
    return (
        <TableHead>
            <TableRow>
                <TableCell align="justify"/>
                {renderHeadings}
            </TableRow>
        </TableHead>
    )
}


export default TableHeadings
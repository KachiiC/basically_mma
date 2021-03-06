import React from 'react'
// COMPONENTS
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'

interface Props {
    data: any;
    table_columns: number;
}

const TableHeadings = (props: Props) => {

    // Grabs the key values from a single object 
    const table_headings = Object.keys(props.data[0]).filter(heading => heading !== "content")
    
    // Renders the keys for each object 
    const renderHeadings = table_headings.map((heading, index) => (
            <TableCell align="center" key={index}>
                <b className="material-table-heading">{heading}</b>
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
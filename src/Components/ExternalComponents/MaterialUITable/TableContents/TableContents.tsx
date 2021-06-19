import React, {Fragment} from 'react';
// Components
import TableBody from '@material-ui/core/TableBody';
import TableSingleRow from './TableSingleRow'

interface rowProps {
    content: any;
}

interface Props {
    data: any;
    table_columns: number;
}

const TableContentRow = (props: Props) => {

    // Takes Data and renders a single row for each
    const renderDataList = props.data.map((row: rowProps) => (
            <TableSingleRow
                key={props.data.indexOf(row)}
                index={props.data.indexOf(row)} 
                row={row} 
                content={row.content}
                // crops the number of rows based on table_columns
                table_columns={props.table_columns}
            />
        )
    )

    return (
        <TableBody>
            <Fragment>    
                {renderDataList}
            </Fragment>
        </TableBody>  
    )
}


export default TableContentRow
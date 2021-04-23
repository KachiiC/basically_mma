import React, {Fragment} from 'react'
// CSS
import './MaterialUITable.css'
// Material UI Table
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// My Components
import TableContentRow from './TableContentRow'
import TableHeadings from './TableHeadings';

const MaterialUITable = (props) => {
    
    // Table Contents
    const TableData = props.data

    // Table data List
    const renderDataList = TableData.map((data, index) => {

        return (
            <TableContentRow
                key={index}
                index={index} 
                row={data} 
                table_columns={props.table_columns}
                content={data.content}
            />
        )
    })

    const renderTable = (
        <div className="techniques-tabs-component-container">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    {/* TABLE HEADINGS */}
                    <TableHeadings 
                        data={TableData[0]} 
                        table_columns={props.table_columns} 
                    />
                    <TableBody>
                        <Fragment>    
                            {renderDataList}
                        </Fragment>
                    </TableBody>   
                </Table>
            </TableContainer>
        </div>
    )

    return renderTable
}

export default MaterialUITable
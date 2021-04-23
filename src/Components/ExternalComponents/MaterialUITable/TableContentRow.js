import React, {useState} from 'react';
// Components
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TableCollapsableRow from './TableCollapsableRow';


const TableContentRow = (props) => {
    
    const index = props.index
    const rowContent = Object.values(props.row)
    const [open, setOpen] = useState(false)
    const openLogic = () => setOpen(!open)

    const displayedTableCells = rowContent.map((attribute, index) => (
        <TableCell align="justify" key={index}>
            {attribute}
        </TableCell>
    )).slice(0, props.table_columns)


    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton 
                        key={index} 
                        aria-label="expand row" 
                        size="small" 
                        onClick={openLogic}
                    >
                    {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </TableCell>
                {displayedTableCells}
            </TableRow>
            <TableCollapsableRow
                open={open}
                content={props.content}
            />
        </>
    )

}

export default TableContentRow
import React, {useState} from 'react';
// Components
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CollapseSectionDropdown from './CollapseSectionDropdown';


const CollapseSection = (props) => {
    
    const [open, setOpen] = useState(false)
    const formattedContent = props.description
    const technique = props.technique
    const index = props.index

    const technique_attributes = [
        technique.title, 
        technique.type, 
        technique.difficulty
    ]

    const displayedTableCells = technique_attributes.map((attribute, index) => (
        <TableCell align="justify" key={index}>
            <div>
                {attribute}
            </div>
        </TableCell>
    ))

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton 
                        key={index} 
                        aria-label="expand row" 
                        size="small" 
                        onClick={() => setOpen(!open)}
                    >
                    {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </TableCell>
                {displayedTableCells}
            </TableRow>
            <TableRow>
                <CollapseSectionDropdown 
                    open={open} 
                    difficulty={technique.difficulty}
                    title={technique.title}
                    description={formattedContent}
                    tutorial={technique.tutorial}
                    mistakes={technique.mistakes}
                />
            </TableRow>
        </>
    )

}

export default CollapseSection
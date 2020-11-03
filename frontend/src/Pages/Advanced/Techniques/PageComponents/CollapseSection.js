import React, {useState} from 'react';
// Components
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const CollapseSection = (props) => {
    
    const [open, setOpen] = useState(false)
    const formattedContent = props.formattedContent
    const technique = props.technique
    const index = props.index

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton key={index} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {technique.name}
                </TableCell>
                <TableCell align="right">{technique.type}</TableCell>
                <TableCell align="right">{technique.difficulty}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                    <h3 className="techniques-header">{technique.name}</h3>
                    <p>{formattedContent}</p>
                    <div className="techniques-row">
                        <div className="techniques-video-container">
                            <h6>Tutorial</h6>
                            <iframe width="370" height="208" src={`https://www.youtube.com/embed/${technique.tutorial}`}
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen title="technique video" className="techniques-video"/>                        
                        </div>
                        <div className="techniques-video-container">
                            <h6>Mistakes to avoid</h6>
                            <iframe width="370" height="208" src={`https://www.youtube.com/embed/${technique.mistakes}`}
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen title="technique video" className="techniques-video"  />                        
                        </div>                        
                    </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )

}

export default CollapseSection
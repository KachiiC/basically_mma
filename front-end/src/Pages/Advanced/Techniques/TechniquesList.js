import React, {useState, useEffect} from 'react';
// Components
import {Empty} from 'antd'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';


function TechniquesList() {
    
    const [open, setOpen] = React.useState(false);
    const [isFetching, setIsFetching] = useState(true)
    const [techniques, setTechniques] = useState([]) 
    const [isDisplayable, setIsDisplayable] = useState(false)


    useEffect(() => {
        fetch("http://127.0.0.1:8000/backend_mma/techniques_list/") 
        .then((response) => { 
            return response.json() 
        })
        .then((techniquesDataFromServer) => { 

            setTechniques(techniquesDataFromServer)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, []) 

    const renderListOfTechniques = techniques.map((technique, index) => {

        const formattedContent = technique.description.split('\r\n').map((value, index) => {
            if (!value) return <p className="technique-description">{'\r\n'}</p>
            return <p className="technique-description">{value}</p>
          })


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
                    <div class="techniques-row">
                        <div className="techniques-video-container">
                            <h6>Tutorial</h6>
                            <iframe width="370" height="208" src={`https://www.youtube.com/embed/${technique.tutorial}`}
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen title="technique video" className="techniques-video"/>                        
                        </div>
                        <div className="techniques-video-container">
                            <h6>Mistakes to avoid</h6>
                            <iframe width="370" height="208" src={`https://www.youtube.com/embed/${technique.mistakes}`}
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen title="technique video" className="techniques-video"  />                        
                        </div>                        
                    </div>
                    </Collapse>
                </TableCell>
            </TableRow>
            </>
        )
    })

    const renderLogic = (isFetching)?(
        <h6>Loading</h6>
    ):((isDisplayable)?(renderListOfTechniques):(<Empty />))


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Technique Names</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Difficulty</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <React.Fragment>    
                        {renderLogic}
                    </React.Fragment>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TechniquesList
import React, {useState, useEffect} from 'react';
// Components
import { CircularProgress } from '@material-ui/core';
import {Empty} from 'antd'
import CollapseSection from './CollapseSection'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const TechniquesList = () => {
    
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
            if (!value) 
            return <p className="technique-description" key={index}>{'\r\n'}</p>
            return <p className="technique-description" key={index}>{value}</p>
          })


        return (
            <CollapseSection index={index} key={index}
                technique={technique} formattedContent={formattedContent} 
            />
        )
    })

    const renderLogic = (isFetching)?(<CircularProgress />)
    :((isDisplayable)?(renderListOfTechniques):(<Empty />))

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
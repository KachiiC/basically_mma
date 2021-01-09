import React, {useState, useEffect} from 'react';
// Components
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading'
import CollapseSection from './CollapseSection'
import {Empty} from 'antd'
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
        fetch("https://kachiis-rest.herokuapp.com/backend/mma_techniques_list/") 
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
            console.log(error)
        })
    }, []) 

    const renderListOfTechniques = techniques.map((technique, index) => {

        const formattedContent = technique.description.split('\r\n').map(
            (value, index) => {
                if (!value) {
                    return <p className="technique-description" key={index}>{'\r\n'}</p>
                }
                return <p className="technique-description" key={index}>{value}</p>
            }
        )

        return (
            <CollapseSection 
                key={index}
                index={index} 
                technique={technique} 
                formattedContent={formattedContent} 
            />
        )
    })

    const techniqueHeadings = ["Technique Name", "Type", "Difficulty"]
    
    const renderHeadings = techniqueHeadings.map((heading, index) => (
        <TableCell align="inherit" key={index}>
            <b>{heading}</b>
        </TableCell>
    ))

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable)?(
        <TableBody>
            <React.Fragment>    
                {renderListOfTechniques}
            </React.Fragment>
        </TableBody>
            
        ):(
            <Empty />
        )
    )

    return (
        <div className="techniques-tabs-component-container">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="justify"/>
                            {renderHeadings}
                        </TableRow>
                    </TableHead>
                    {renderLogic}
                </Table>
            </TableContainer>
        </div>
    );
}

export default TechniquesList
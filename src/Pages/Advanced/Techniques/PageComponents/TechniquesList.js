import React from 'react'
// External Components
// Material UI Table
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
// My Components
import CollapseSection from './CollapseSection'
import SiteFetcher from 'SiteCss/SiteFetcher';
import SiteRender from 'SiteCss/SiteTransitions/SiteRender';

const TechniquesList = () => {
    
    const techniquesTemplate = [
        {
            title: "",
            type: "",
            discipline: "",
            difficulty: "",
            description: "",
            tutorial: "",
            mistakes: ""
        }
    ]
    
    const responseData = SiteFetcher(
        "https://kachiis-rest.herokuapp.com/backend/mma_techniques_list/",
        techniquesTemplate
    ) 

    const techniques = responseData.response

    const renderListOfTechniques = techniques.map((technique, index) => {

        const formattedContent = technique.description.split('\n\n').map(
            (value, index) => {
                if (!value) {
                    return <p className="technique-description" key={index}>{'\n\n'}</p>
                }
                return <p className="technique-description" key={index}>{value}</p>
            }
        )

        return (
            <CollapseSection 
                key={index}
                index={index} 
                technique={technique} 
                description={formattedContent} 
            />
        )
    })

    const techniqueHeadings = [
        "Technique Name", 
        "Type", 
        "Difficulty"
    ]
    
    const renderHeadings = techniqueHeadings.map(
        (heading, index) => (
            <TableCell align="inherit" key={index}>
                <b>{heading}</b>
            </TableCell>
        )
    )

    const renderTable = (

        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="justify"/>
                        {renderHeadings}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <React.Fragment>    
                        {renderListOfTechniques}
                    </React.Fragment>
                </TableBody>   
            </Table>
        </TableContainer>

    )

    return (
        <div className="techniques-tabs-component-container">
            <SiteRender data={responseData} component={renderTable} />
        </div>
    );
}

export default TechniquesList
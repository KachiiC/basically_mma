import React from 'react'
// Components
import Collapse from '@material-ui/core/Collapse';
import TableCell from '@material-ui/core/TableCell';

const CollapseSectionDropdown = (props) => {

    const collapseVideos = [
        {
            "title": "Tutorial",
            "video": props.tutorial
        },
        {
            "title": "Mistakes to avoid",
            "video": props.mistakes 
        },
    ]

    const renderVideos = collapseVideos.map((item, index) => {
        return (
            <div className="techniques-video-container" key={index}>
                <h6>{item.title}</h6>
                <iframe 
                    className="techniques-video"
                    title="technique video"  
                    src={`https://www.youtube.com/embed/${item.video}`}
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                    allowFullScreen 
                />                        
            </div>
        )
    })
    
    return (

        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                <h3 className="techniques-heading">
                    {props.title}
                </h3>
                <p className="techniques-content">
                    {props.content}
                </p>
                <div className="techniques-videos-section">
                    {renderVideos}                     
                </div>
            </Collapse>
        </TableCell>

    )
}

export default CollapseSectionDropdown

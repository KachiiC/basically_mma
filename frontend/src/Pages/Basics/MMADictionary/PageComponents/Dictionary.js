import React, { useState, useEffect} from 'react'
// CSS
import "../MMADictionary.css" 
// Components
import { Collapse, Empty } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';

const Dictionary = () => {

    const [terms, setTerms] = useState([]) 
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch("http://localhost:8000/backend_mma/dictionary_list/") 
        .then((response) => { 
            return response.json() 
        })
        .then((termsDataFromServer) => { 

            setTerms(termsDataFromServer)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, []) 

    const {Panel} = Collapse; 

    const submissions = terms.filter((term) => {
        return term.type === "Submission"
    })

    const renderListOfTerms = submissions.map((sub) => {

        return (
            <Panel header={<div className="term-tab">{sub.name}</div>} key={sub.pk}>
                <p className="term-definition"><b>Definition:</b> {sub.definition}</p>
                <div className="term-example-video">
                    <iframe width="560" height="315"
                        title="definition-example" 
                        src={`https://www.youtube.com/embed/${sub.example}`}
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                        allowFullScreen 
                    />
                </div>
            </Panel>
        )
    })

    const renderLogic = (isFetching)?(<CircularProgress />)
        :((isDisplayable)?(renderListOfTerms):(<Empty />))

    return (
        <>
            <h4> MMA Dictionary</h4>
            <Collapse>
                {renderLogic}
            </Collapse>
        </>
    );

}

export default Dictionary
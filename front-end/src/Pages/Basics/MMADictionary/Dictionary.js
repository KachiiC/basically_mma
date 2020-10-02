import React, { useState, useEffect} from 'react'
import { Collapse, Empty } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';

function Dictionary() {

    const [isFetching, setIsFetching] = useState(true)
    const [terms, setTerms] = useState([]) 
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

    const renderListOfTerms = terms.map((term) => {
        return (
            <Panel header={`${term.name}`} key={term.pk}>
                {term.definition}
            </Panel>
        )
    })

    const renderLogic = (isFetching)?(
        <div>
            <CircularProgress />
        </div>
    ):((isDisplayable)?(renderListOfTerms):(<Empty />))

    return (
        <div className="site-section-container">
            <h4 className="site-section-title"> MMA Dictionary</h4>
            <Collapse>
                {renderLogic}
            </Collapse>
        </div>
    );

}

export default Dictionary
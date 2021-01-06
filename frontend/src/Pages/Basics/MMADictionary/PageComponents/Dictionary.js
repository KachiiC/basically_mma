import React, { useState, useEffect} from 'react'
// CSS
import "../MMADictionary.css" 
// Components
import { Empty } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';
import DictionaryComponents from './DictionaryComponents';

const Dictionary = () => {

    const [terms, setTerms] = useState([]) 
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/backend/mma_dictionary_list/") 
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
            console.log(error)
        })
    }, []) 

    const tab_types = [
        "General", 
        "Striking Technique",
        "Grappling Position",
        "Grappling Technique",
        "Submission"
    ]

    const allTabs = tab_types.map((tab_type) => 
        <DictionaryComponents data={terms} type={tab_type}/>
    )

    const renderLogic = (isFetching)?(
        <CircularProgress />
    ):(
        (isDisplayable) ? (
            <> {allTabs} </>
        ):(
            <Empty />
        )
    )

    return (  
        <div>
            <h2>MMA Dictionary</h2>
            <p>
                These are terms that you will often hearing during a mixed martial arts broadcast 
                and may not understand if you are not familiar with mma. Although there are a lot
                of terms that have not been covered, these should give you a good understanding of
                mma termionology.
            </p>
            <div className="data-container">
                {renderLogic}
            </div>
        </div>
    );

}

export default Dictionary
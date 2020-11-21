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

    const renderLogic = (isFetching)?(<CircularProgress />):
        ((isDisplayable)?(
            <>
                {allTabs}
            </>
            )
        :(<Empty />))

    return (
        <>
            <h4> MMA Dictionary</h4>
            {renderLogic}
        </>
    );

}

export default Dictionary
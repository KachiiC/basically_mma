import React, { useState, useEffect} from 'react'
// CSS
import { Empty } from 'antd';
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading';
// Components
import DictionaryComponents from './DictionaryComponents';

const Dictionary = () => {

    const [terms, setTerms] = useState([]) 
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/backend/mma_dictionary_list/") 
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

    const allTabs = tab_types.map((tab_type, index) => 
        <DictionaryComponents
            key={index}
            data={terms} 
            type={tab_type}
        />
    )

    const renderLogic = (isFetching)?(
       <SiteLoading />
    ):(
        (isDisplayable) ? (allTabs) :(
            <Empty />
        )
    )

    return (  
        <div className="dictionary-container">
            {renderLogic}
        </div>
    );

}

export default Dictionary
import React, {useEffect, useState} from 'react'
// CSS
import './Test.css'
// Components
import MainAndSidebar from 'Components/MainAndSidebar'
import TestTabs from './TestComponent';


const TestPage = () => {

  const [terms, setTerms] = useState([]) 

  useEffect(() => {
    fetch("http://localhost:8000/backend_mma/dictionary_list/") 
    .then((response) => { 
        return response.json() 
    })
    .then((termsDataFromServer) => { 
        setTerms(termsDataFromServer)

    })
    .catch((error) => { 
        console.log(error)
    })
  }, [])
  

  return (
    <MainAndSidebar>
      <h3>Submissions</h3>
      <TestTabs data={terms} type="Submission"/>
      <h3>General Terms</h3>
      <TestTabs data={terms} type="Term"/>
    </MainAndSidebar>
  )


}


export default TestPage
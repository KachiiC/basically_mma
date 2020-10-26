import React,{useState, useEffect} from 'react'
// CSS
import './Test.css'
// Components
import SiteCarousel from '../../Components/SiteCarousel'


const TestPage = () => {
  
  const [youtube, setYoutube] = useState([]) 

  useEffect(() => {
      fetch(`http://127.0.0.1:8000/backend_api/mma_playlist/ufc_playlist`) 
      .then((response) => { 
          return response.json() 
      })
      .then((data) => { 
          setYoutube(data.playlist_video.map(
            ({thumbnail_url}) => thumbnail_url
            )
          )
      })
      .catch((error) => { 
          console.log(error)
      })   
  }, [])

  console.log(youtube)

    return (
      <div className="fight-suggestions">
        <SiteCarousel images={youtube} />
      </div>
    )
}


export default TestPage
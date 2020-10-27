import React,{useState, useEffect} from 'react'
// CSS
// Components
import SiteCarousel from '../../SiteCarousel'

const SiteFightSuggestions = () => {
  
  const [thumbnail, setThumbnail] = useState([]) 
  
  useEffect(() => {
      fetch(`http://127.0.0.1:8000/backend_api/mma_playlist/ufc_playlist`) 
      .then((response) => { 
          return response.json() 
      })
      .then((data) => { 
          setThumbnail(data.playlist_video.map(({thumbnail_url}) => thumbnail_url))
      })
      .catch((error) => { 
          console.log(error)
      })   
  }, [])

    return (
        <div className="single-widget-area">
            <div className="widget-title">
                <h6>Have you seen this fight?</h6>
            </div>
            <div className="sidebar-section">
                <SiteCarousel images={thumbnail}/>
            </div>
        </div>
    )
}


export default SiteFightSuggestions


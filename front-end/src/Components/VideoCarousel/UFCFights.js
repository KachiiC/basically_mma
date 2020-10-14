import React, { useState, useEffect} from 'react'
// CSS
import './VideoCarousel.css'
import '@brainhubeu/react-carousel/lib/style.css'
// Components
import Icon from 'react-fa'
import Carousel from '@brainhubeu/react-carousel';

const UFCFights = () => {
    
  const [isFetching, setIsFetching] = useState(true)
  const [youtube, setYoutube] = useState([]) 
  const [isDisplayable, setIsDisplayable] = useState(false)


  useEffect(() => {
      fetch("http://127.0.0.1:8000/backend_api/ufc_playlist") 
      .then((response) => { 
          return response.json() 
      })
      .then((youtubeDataFromServer) => { 

          setYoutube(youtubeDataFromServer)
          setIsDisplayable(true)
          setIsFetching(false)
      })
      .catch((error) => { 
          setIsFetching(false)
      })
      
  }, []) 
  
  const youtubeItems = youtube.map((item, index) => {
  
    var myArray = item.title.split(" ");
    var titleArray = [];
    
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === "v"|| myArray[i] === "vs") {
          titleArray.push(myArray[i - 2]);
          titleArray.push(myArray[i - 1]);
          titleArray.push("vs")
          titleArray.push(myArray[i + 1]);
          titleArray.push(myArray[i + 2]);
        }
      }

      const newTitle = titleArray.join(" ");

      return (
            <div key={index}>
              <div>
                <p>{newTitle}</p>
              </div>
              <a href={`https://www.youtube.com/watch?v=${item.video_id}`}>
                <img className="video-slider-image" src={`${item.thumbnail_url}`} alt="item-cover"/>
              </a>
            </div>
        )
  })
  
  const renderLogic = (isFetching)?(<h6>Loading</h6>):(
    (isDisplayable)?(youtubeItems):(<h6>Not Loading</h6>))

  return (
        <div className="video-slider-container">
            <h5>UFC Fights</h5>
              <Carousel infinite addArrowClickHandler slidesPerScroll={3} slidesPerPage={3}
                arrowRight={<Icon size="2x" name="angle-double-right" />}
                arrowLeft={<Icon size="2x" name="angle-double-left" />}
              >
                  {renderLogic}
              </Carousel>
        </div>

  )

}

export default UFCFights;
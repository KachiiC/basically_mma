import React,{useState, useEffect} from 'react'
// CSS
// Components
import SiteCarousel from 'Components/SiteCarousel'

const SiteFightSuggestions = () => {
    
    const [suggestionThumbnails, setSuggestionThumbnails] = useState([])
    const [suggestionTitles, setSuggestionTitles] = useState([])
    const firstVideo = Math.floor(Math.random() * 20)
    const [suggestionIndex, setSuggestionIndex] = useState(firstVideo)
    const [urls, setUrls] = useState([])
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/backend_api/mma_playlist/ufc_playlist`) 
        .then((response) => { 
            return response.json() 
        })
        .then((data) => { 
            setSuggestionThumbnails(data.playlist_video.map((fight) => fight.thumbnail_url))
            setSuggestionTitles(data.playlist_video.map((fight) => fight.title))
            setUrls(data.playlist_video.map((fight) => fight.video_id))
        })
        .catch((error) => { 
            console.log(error)
        })   
    }, [])

    const slideLeft = () => {
        suggestionIndex === 0 ? setSuggestionIndex(suggestionTitles.length - 1):
        setSuggestionIndex(prev => prev - 1);
    };

    const slideRight = () => {
        suggestionIndex === suggestionTitles.length -1 ? setSuggestionIndex(0):
        setSuggestionIndex(prev => prev + 1);
    };
    
    const displayTitles = suggestionTitles.map((title) => {
        const titleWord = title.split(" ")
        const titleArray = [];

        for (var i = 0; i < title.length; i++) {
            if (titleWord[i] === "v"|| titleWord[i] === "vs") {
                titleArray.push(
                    titleWord[i-2],titleWord[i-1],"vs",titleWord[i+1],titleWord[i+2]
                )
            }
        }

        return titleArray.join(" ")
    })

    console.log(displayTitles)
    
    return (
        <div className="single-widget-area">
            <div className="widget-title">
                <h6>Have you seen this fight?</h6>
            </div>
            <h6 className="fight-suggestion-title">{displayTitles[suggestionIndex]}</h6>
            <div className="sidebar-section">
                    <SiteCarousel
                        image={suggestionThumbnails[suggestionIndex]} 
                        prev={slideLeft}
                        next={slideRight}
                        index={suggestionIndex}
                        link={`https://www.youtube.com/watch?v=${urls[suggestionIndex]}`}
                    />
            </div>
        </div>
    )
}


export default SiteFightSuggestions
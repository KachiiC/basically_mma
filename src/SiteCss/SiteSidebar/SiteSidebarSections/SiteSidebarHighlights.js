import React, { useEffect, useState } from 'react'
// CSS
import { Empty } from 'antd'
import SiteLoading from 'SiteCss/SiteTransitions/SiteLoading'

const SiteSidebarHighlights = () => {

    const [fightHighlight, setFightHighlights] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/youtube_playlists/PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5/") 
        .then((response) => { 
            return response.json() 
        })
        .then(highlightsData => { 
            setFightHighlights(highlightsData.playlist_videos)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
            console.log(error)
        })
    },[])

    const renderHighlightsList = fightHighlight.slice(0,4).map((highlight, index) => {

        const highlightTitle = highlight.video_title.split("").length < 57 ? 
            highlight.video_title : 
            highlight.video_title.split("").slice(0,60).join("") + "..."

        return (
            <div className="site-highlights-container" 
                key={index}
            >
                <div className="site-highlights-image-container">
                    <img src={highlight.video_thumbnail} 
                        alt="highlight-cover"
                    />
                </div>
                <div className="site-highlight-title" >
                    <a href="https://www.youtube.com/">
                        {highlightTitle}
                    </a>
                </div>
            </div>
        )

    })

    const renderLogic = (isFetching)?(
        <SiteLoading />
    ):(
        (isDisplayable)? (
            renderHighlightsList
        ):(
            <Empty />
        )
    )

    return (
        <div className="site-sidebar-section">
            <div className="site-sidebar-title">
                Fight highlights
            </div>
            {renderLogic}
        </div>
    )
}

export default SiteSidebarHighlights
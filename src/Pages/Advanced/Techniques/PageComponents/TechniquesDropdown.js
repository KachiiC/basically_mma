import React from 'react'
// COMPONENTS
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo'
import SiteParagraphFormatter from 'SiteCss/SiteParagraphFormatter'

const TechniquesDropdown = (props) => {

    const collapseVideos = [
        {
            title: "Tutorial",
            video: props.tutorial
        },
        {
            title: "Mistakes to avoid",
            video: props.mistakes 
        }
    ]

    const renderVideos = collapseVideos.map((item, index) => (
            <div className="site-span-6 w-90 m-auto" key={index}>
                <SiteYoutubeVideo 
                    youtube_id={item.video} 
                    title={item.title}
                />
            </div>
        )
    )

    const formattedContent = SiteParagraphFormatter(props.description)

    return (
        <>
            <h3 className="techniques-heading">
                {props.title}
            </h3>
            <p className="techniques-content">
                {formattedContent}
            </p>
            <div className="techniques-videos-section">
                {renderVideos}                     
            </div>
        </>
    )

}

export default TechniquesDropdown
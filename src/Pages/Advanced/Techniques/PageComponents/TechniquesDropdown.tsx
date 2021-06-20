import React from 'react'
// COMPONENTS
import SiteYoutubeVideo from 'Components/MyComponents/SiteYoutubeVideo/index.d'
import SiteParagraphFormatter from 'SiteTools/SiteParagraphFormatter'

interface Props {
    title: string;
    tutorial: string;
    mistakes: string;
    description: string;
}

interface videoProps {
    title: string;
    video: string;
}

const TechniquesDropdown = (props: Props) => {

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

    const renderVideos = collapseVideos.map((item: videoProps) => (
            <div className="site-span-6 w-90 m-auto" 
                key={collapseVideos.indexOf(item)}
            >
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
            {formattedContent}
            <div className="site-grid-system">
                {renderVideos}                     
            </div>
        </>
    )

}

export default TechniquesDropdown
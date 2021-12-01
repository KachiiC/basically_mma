// PROPS
import { SingleYoutubeSuggestionProps, YoutubeSuggestionProps } from "Props/Components/YoutubeModalProps"
// TOOLS
import { TitleRender } from "Sections/Sidebar/components/SidebarRecommendations/tools/TitleRender"

const SingleYoutubeSuggestion = (props: SingleYoutubeSuggestionProps) => {
    
    // PROPS
    const { click, video_title, video_thumbnail } = props

    return (
        <div className="site-flex suggestion-row w-90">
            <div className="youtube-suggestion-title cursor-pointer w-50">
                {TitleRender(video_title)}
            </div>
            <div className="youtube-thumbnail w-50 cursor-pointer" onClick={click}>
                <img src={video_thumbnail} 
                    alt={video_title} 
                    className="site-responsive-image"
                />
            </div>
        </div>
    )
}

const YoutubeSuggestions = (props: YoutubeSuggestionProps) => {

    // PROPS
    const { data, setFunction } = props

    const displaySuggestions = data.map(obj => {

        const { video_title, video_thumbnail } = obj

        return (
            // Sets the object as
            <SingleYoutubeSuggestion
                click={() => setFunction(obj)}
                key={video_title}
                video_title={video_title}
                video_thumbnail={video_thumbnail}
                // Sets the object which is clicked as the current displayedVideo on level above
            />
        )
    })

    return (
        <div className="site-col-6 youtube-suggestions">
            <div className="suggestion-list-title w-90">
                Recommended Video
            </div>
            {displaySuggestions}
        </div>
    )
}

export default YoutubeSuggestions
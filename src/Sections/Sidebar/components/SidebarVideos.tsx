// COMPONENTS
import YoutubeModal from "@components/YoutubeModal"
// PROPS
import { YoutubeItemProps } from "@components/YoutubeModal/YoutubeModalProps"
import { SidebarVideoRowProps } from "../SidebarProps"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/FetcherTool"
import { TitleRender } from "Tools/TitleTools"
import { KachiiRestApi } from "URLs/KachiisRestApi"

const url = KachiiRestApi("api", "youtube/playlist%3DPLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5")

export const SidebarVideoRow = (props: SidebarVideoRowProps) => (
    <div className="site-grid-system sidebar-video-row">
        <div className="sidebar-row-item">
            <img className="site-responsive-image cursor-pointer" 
                alt="youtube-img"
                src={props.image}
            />
        </div>
        <div className="sidebar-row-item cursor-pointer">
            {props.title}
        </div>
    </div>
)

export const SidebarVideoRows = (props: any) => {

    const videoRow = props.data.map((video: YoutubeItemProps) => {
        
        const { video_title, video_thumbnail } = video

        const imageRow = (
            <SidebarVideoRow
                image={video_thumbnail}
                title={TitleRender(video_title)}
            />
        )

        return (
            <div className="sidebar-video-item" 
                key={video_title}
            >
                <YoutubeModal 
                    component={imageRow}
                    data={props.data} 
                    current={video}            
                />
            </div>
        )
    }).slice(0,4)

    return ( 
        <div className="site-grid-system site-video-rows-container">
            {videoRow}
        </div>
    )
}

export const SidebarRecommendation = () => {
    
    const fetch = SiteFetcher(url)

    const components = (
        <>
            <SidebarVideoRows 
                data={fetch.response} 
            />
        </>
    )
 
    return (
        <SiteRender 
            fetch={fetch} 
            component={components}
        />
    )
}
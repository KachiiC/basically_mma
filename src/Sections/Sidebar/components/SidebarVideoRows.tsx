// COMPONENTS
import YoutubeModal from "@components/YoutubeModal"
// PROPS
import { SidebarVideoRowProps } from "../SidebarProps"
import { YoutubeItemProps } from "@components/YoutubeModal/YoutubeModalProps"
// TOOLS
import { TitleRender } from "./SidebarRecommendations/tools/TitleRender"

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
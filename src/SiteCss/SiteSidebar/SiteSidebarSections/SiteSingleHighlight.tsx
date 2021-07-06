import React from 'react'
// COMPONENTS
import SiteOverlay from 'SiteCss/SiteOverlay/index.d'
import SiteIcon from 'SiteCss/SiteIcon'
// PROPS
import { highlightProps } from '../SiteSidebarProps'


const SiteSingleHighlight = (props: highlightProps) => (

    <div key={props.video_title}>
        <div className="highlights-container site-grid-system cursor-pointer">
            <div className="highlight-image site-span-6 m-auto">
                <SiteOverlay 
                    click={props.click_logic}
                    icon={<SiteIcon icon="play" color="white" />} 
                >
                    <img src={props.video_thumbnail} 
                        alt="highlight-cover" 
                        className="site-responsive-image" 
                    />
                </SiteOverlay>
            </div>
            <div className="highlight-title site-span-6 m-auto cursor-pointer"
                onClick={props.highlight_logic}
            >
                {props.video_title}
            </div>
        </div>
    </div>
)

export default SiteSingleHighlight
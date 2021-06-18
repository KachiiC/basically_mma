import React from 'react'
import { Switch, Route } from "react-router-dom"
// DATA
import PagesData from 'Data/PagesData'
// COMPONENTS
import SiteYoutubeVideo from 'Components/MyComponents/SiteYoutubeVideo';
import SiteMainContainer from 'SiteCss/SiteMainContainer'
// PAGES
import Home from 'Pages/Others/Home'

interface subMenuProps { 
    title: string; 
    display: any; 
    introduction: any; 
    example_video_id?: any; 
    example_title?: string; 
    example_caption?: any; 
    example_video_start?: any; 
    header_image?: any; 
}


interface Props {
    display?: any;
    title: string;
    sub_menu: boolean;
    menu_list?: any;
}

const displayLinks = PagesData.map((page: Props) => {

    if (page.sub_menu === true) {
        
        return page.menu_list.map((sub_menu: subMenuProps) => {

            // Title
            const displayTitle = sub_menu.title.split("-").join(" ")

            // Video Logic
            const videoLogic = () => {
                if (sub_menu.example_video_id) {
                return (
                    <SiteYoutubeVideo
                        title={sub_menu.example_title}
                        caption={sub_menu.example_caption}
                        youtube_id={sub_menu.example_video_id}
                        start={sub_menu.example_video_start}
                    />
                )
                } 
            }

            return (
                <Route path={`/basically_mma/${sub_menu.title}`} key={displayTitle}>
                    <SiteMainContainer
                        title={displayTitle}
                        header_image={sub_menu.header_image}
                        introduction={sub_menu.introduction}
                        main_display={sub_menu.display}
                        sidebar={true}
                        example_video={videoLogic()}
                    />
                </Route>
            )
        })
    }

    return (
        <Route 
            key={page.title}
            path={`/basically_mma/${page.title}`} 
        >
            <SiteMainContainer
                title={page.title} 
                main_display={page.display}
            />
        </Route>
    )
})

// Add Homepage (which must be at the end)
displayLinks.push(
    <Route path="/" >
        {Home}
    </Route>
)


const PageLinks = (
    <div className="site-body w-100">
        <Switch>
            {displayLinks}
        </Switch>
    </div>
)

export default PageLinks
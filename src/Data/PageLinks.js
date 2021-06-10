import React from 'react'
import { Switch, Route } from "react-router-dom"
// DATA
import PagesData from 'Data/PagesData'
// COMPONENTS
import SiteYoutubeVideo from 'Components/SiteYoutubeVideo';
import SiteMainContainer from 'SiteCss/SiteMainContainer'
// PAGES
import Home from 'Pages/Others/Home'

const displayLinks = PagesData.map((page, index) => {

    if (page.sub_menu === true) {
        
        return page.menu_list.map((sub_menu, index) => {

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
                <Route path={`/basically_mma/${sub_menu.title}`} key={index}>
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
        <Route path={`/basically_mma/${page.title}`} key={index}>
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
        <Home/>
    </Route>
)


const PageLinks = (
    <div className="site-body">
        <Switch>
            {displayLinks}
        </Switch>
    </div>
)

export default PageLinks
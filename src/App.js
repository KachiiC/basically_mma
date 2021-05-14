import React from 'react';
//CSS 
import './App.css';
import 'SiteCss/SiteCss.css'
// External
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SiteScrollToTop from 'SiteCss/SiteScrollToTop'
import SiteNavbar from 'SiteCss/SiteNavbar'
import SiteMainContainer from 'SiteCss/SiteMainContainer'
import SiteFooter from 'SiteCss/SiteFooter'
// Data
import PagesData from 'Data/PagesData'
// Pages
import Home from './Pages/Others/Home'
import SiteYoutubeVideo from './Components/SiteYoutubeVideo';

const App = () => {

  // Pages
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
      
  return (
    <BrowserRouter>
      <SiteScrollToTop />
      <SiteNavbar data={PagesData} title="Basically MMA"/>
      <div className="site-body">
        <Switch>
          {displayLinks}
          <Route path="/" >
            <Home/>
          </Route>
        </Switch>
      </div>
      <SiteFooter />
    </BrowserRouter>
  );
  
}

export default App;

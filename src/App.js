import React from 'react';
//CSS 
import './App.css';
import 'SiteCss/SiteCss.css'
// External
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter, Switch, Route} from "react-router-dom"
import SiteScrollToTop from 'SiteCss/SiteScrollToTop'
import SiteNavbar from 'SiteCss/SiteNavbar'
import SiteFooter from 'SiteCss/SiteFooter'
import SiteMainContainer from 'SiteCss/SiteMainContainer'
import SiteExampleVideo from './SiteCss/SiteExampleVideo'
import SiteSidebar from 'SiteCss/SiteSidebar'
// Data
import pagesData from './Data/pagesData'
// Pages
import Home from './Pages/Others/Home'

const App = () => {

  // Regular Pages
  const displayLinks = pagesData.map((page, index) => (
      <Route path={`/basically_mma/${page.title}`} key={index}>
        <SiteMainContainer
          title={page.title} 
          introduction={page.introduction}
          main_display={page.display}
        />
      </Route>
    )
  )

  const mySubLinks = pagesData.filter((page) => page.sub_menu === true)
  
  // Basics
  const displayBasics = mySubLinks[0].menu_list.map((sub, index) => {

    const displayTitle = sub.title.split("-").join(" ")

      return (

        <Route path={`/basically_mma/${sub.title}`} key={index}>
          <SiteMainContainer
            title={displayTitle}
            introduction={sub.introduction}
            main_display={sub.display}
            header_image={sub.header_image}
            sidebar={<SiteSidebar />}
            example_video={
              <SiteExampleVideo
                description={sub.example_video_description}
                youtube_id={sub.example_video_id}
                start={sub.example_video_start}
              />
            }
          />
        </Route>

      )
    }
  )

  // Advanced
  const diplayAdvanced = mySubLinks[1].menu_list.map((sub, index) => {

    const displayTitle = sub.title.split("-").join(" ")

      return (
        <Route path={`/basically_mma/${sub.title}`} key={index}>
            <SiteMainContainer 
              title={displayTitle }
              introduction={sub.introduction}
              main_display={sub.display}
              header_image={sub.header_image}
              sidebar={<SiteSidebar />}
            />
        </Route>
      )

    }
  )

  // MMA WORLD
  const displayMMAWorld = mySubLinks[2].menu_list.map(
    
    (sub, index) => {

      const displayTitle = sub.title.split("-").join(" ")
        
        return (
          <Route path={`/basically_mma/${sub.title}`} key={index}>
              <SiteMainContainer
                title={displayTitle}
                main_display={sub.display}
                introduction={sub.introduction}
                sidebar={<SiteSidebar />}
              />
          </Route>
        )
    }
  )
      
  return (
        <BrowserRouter>
          <SiteScrollToTop />
          <SiteNavbar />
          <div className="site-body">
            <Switch>
              {displayLinks}
              {displayBasics}
              {diplayAdvanced}
              {displayMMAWorld}
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

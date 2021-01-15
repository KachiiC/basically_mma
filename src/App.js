import React from 'react';
//CSS 
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SiteMainContainer from 'SiteCss/SiteMainContainer'
import SiteNavbar from 'SiteCss/SiteNavbar';
import SiteFooter from 'SiteCss/SiteFooter';
// Data
import pagesData from './Data/pagesData'
// Pages
import Home from './Pages/Others/Home'

const App = () => {

  const displayLinks = pagesData.map((page, index) => (
      <Route path={`/${page.title}`} key={index}>
        <SiteMainContainer 
          introduction={page.introduction}
          main_display={page.display}
        />
      </Route>
    )
  )

  const mySubLinks = pagesData.filter((page) => page.sub_menu === true)

  const displayBasics = mySubLinks[0].menu_list.map((sub, index) => (
      <Route path={`/basically_mma/${sub.title}`} key={index}>
          <SiteMainContainer 
            introduction={sub.introduction}
            main_display={sub.display}
          />
      </Route>
    )
  )

  const diplayAdvanced = mySubLinks[1].menu_list.map((sub, index) => (
      <Route path={`/basically_mma/${sub.title}`} key={index}>
          <SiteMainContainer 
            introduction={sub.introduction}
            main_display={sub.display}
          />
      </Route>
    )
  )

  const displayMMAWorld = mySubLinks[2].menu_list.map((sub, index) => (
      <Route path={`/basically_mma/${sub.title}`} key={index}>
          <SiteMainContainer 
            introduction={sub.introduction}
            main_display={sub.display}
          />
      </Route>
    )
  )
      
  return (
        <BrowserRouter>
          <SiteNavbar />
          <div className="site-body">
              <Switch>
                {displayLinks}
                {displayBasics}
                {diplayAdvanced}
                {displayMMAWorld}
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
          <SiteFooter />
        </BrowserRouter>
  );
  
}

export default App;

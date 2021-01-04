import React from 'react';
//CSS 
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SiteNavbar from 'SiteCss/SiteNavbar';
import SiteFooter from 'SiteCss/SiteFooter';
// Data
import pagesData from './Data/pagesData'
import Home from './Pages/Others/Home'


const App = () => {

  const displayLinks = pagesData.map((page, index) => (
      <Route path={`/${page.title}`} key={index}>
        {page.display}
      </Route>
    )
  )

  const mySubLinks = pagesData.filter((page) => page.sub_menu === true)

  const displayBasics = mySubLinks[0].menu_list.map((sub, index) => (
      <Route path={`/${sub.title}`} key={index}>
          {sub.display}
      </Route>
    )
  )

  const diplayAdvanced = mySubLinks[1].menu_list.map((sub, index) => (
    <Route path={`/${sub.title}`} key={index}>
      {sub.display}
    </Route>
  ))

  const displayMMAWorld = mySubLinks[2].menu_list.map((sub, index) => (
    <Route path={`/${sub.title}`} key={index}>
      {sub.display}
    </Route>
  ))
      
  return (
        <BrowserRouter>
          <SiteNavbar />
          <main>
            <Switch>
              {displayLinks}
              {displayBasics}
              {diplayAdvanced}
              {displayMMAWorld}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <SiteFooter />
        </BrowserRouter>
  );
  
}

export default App;

import React from 'react';
//CSS 
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SiteNavbar from './Components/SiteNavbar';
import SiteFooter from './Components/SiteFooter';
import pagesData from './Data/pagesData'


const App = () => {

  const displayLinks = pagesData.map((page, index) => (
      <Route path={page.name} key={index}>
        {page.display}
      </Route>
    )
  )

  return (
        <BrowserRouter>
          <SiteNavbar />
          <div className="site-container">
            <Switch>
              {displayLinks}
            </Switch>
          </div>
          <SiteFooter />
        </BrowserRouter>
  );
  
}

export default App;

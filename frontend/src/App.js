import React from 'react';
//CSS 
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SiteBody from 'Components/SiteBody'
// Data
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
          <SiteBody>
            <Switch>
                {displayLinks}
            </Switch>
          </SiteBody>
        </BrowserRouter>
  );
  
}

export default App;

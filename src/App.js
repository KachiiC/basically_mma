import React from 'react';
//CSS 
import './App.scss';
// External
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import { BrowserRouter } from "react-router-dom"
import SiteScrollToTop from 'SiteTools/SiteScrollToTop'
import SiteNavbar from 'SiteCss/SiteNavbar'
import SiteFooter from 'SiteCss/SiteFooter/'
// Data
import PagesData from 'Data/PagesData'
// Pages
// import Home from './Pages/Others/Home'
import PageLinks from './Data/PageLinks';
import ReduxModal from 'SiteRedux/SiteModal/ReduxModal'

const App = (
  <BrowserRouter>
    <ReduxModal />
    <SiteScrollToTop />
    <SiteNavbar data={PagesData} title="Basically MMA"/>
    {PageLinks}
    <SiteFooter />
  </BrowserRouter>
)

export default App;

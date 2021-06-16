import React from 'react';
//CSS 
import './App.scss';
// External
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import { BrowserRouter } from "react-router-dom"
import SiteScrollToTop from 'SiteCss/SiteScrollToTop'
import SiteNavbar from 'SiteCss/SiteNavbar'
import SiteFooter from 'SiteCss/SiteFooter'
// Data
import PagesData from 'Data/PagesData'
// Pages
// import Home from './Pages/Others/Home'
import PageLinks from './Data/PageLinks';

const App = (
  <BrowserRouter>
    <SiteScrollToTop />
    <SiteNavbar data={PagesData} title="Basically MMA"/>
    {PageLinks}
    <SiteFooter />
  </BrowserRouter>
)

export default App;

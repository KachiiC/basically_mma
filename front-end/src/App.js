import React from 'react';
//CSS 
import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter,Switch, Route} from "react-router-dom";
// Pages
import Home from './Pages/Home'
import About from './Pages/About/about'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

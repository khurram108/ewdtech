import React from 'react';
import './App.css';
// import {   BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
// import {  Router , Route ,Switch} from 'react-router'
import HomePage from './components/app'
import history from './components/common/history'
import AboutUs from './components/AboutUs/aboutUs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ContactUs from './components/contactUs/contact'
import OurTeam from './components/ourTeam/ourTeam'
import Portfolio from './portfolio/portfolio'
import {
  Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

function App() {



  return (


    <div>
      <Header />
      <Portfolio />


      {/* <Router history={history}>
        <Switch>

          <Route path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about_us" component={AboutUs} />

        </Switch>

      </Router> */}
    </div>



  )
}

export default App;

import React from "react";
import "./App.css";
// import {   BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
// import {  Router , Route ,Switch} from 'react-router'
import HomePage from "./components/app";
import history from "./components/common/history";
import AboutUs from "./components/AboutUs/aboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/contactUs/contact";
import OurTeam from "./components/ourTeam/ourTeam";
import Portfolio from "./portfolio/portfolio";
import Service from './components/services/service'
// import Services from "./components/"
import { Router, Switch, Route, Link, withRouter } from "react-router-dom";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        {/* <Portfolio /> */}

        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/service" exact component={withRouter(Service)} />

          <Route path="/portfolio" exact component={withRouter(Portfolio)} />

          <Route path="/about_us" exact component={withRouter(AboutUs)} />
          <Route path="/contact" exact component={withRouter(ContactUs)} />

       <Footer/>
        </div>

      </div>
    </Router>
  );
};

export default App;

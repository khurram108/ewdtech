import React from 'react';
import './App.css';
import {  Route, Switch } from 'react-router-dom'
import {Router} from 'react-router'
import HomePage from './components/app'
import history from './components/common/history'
import AboutUs from './components/AboutUs/aboutUs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {



  return (

    <Router history={history}>
      <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/about_us" exact component={AboutUs} />
      <Footer />
    </Router>

  )
}

export default App;

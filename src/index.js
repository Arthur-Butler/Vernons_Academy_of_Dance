import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Landing from './Landing';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import Pricing from './Pricing'
import ContactUs from "./ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Landing />
      <Navbar />
      <Routes>
        <Route exact path=''  element={<AboutMe/>}></Route> 
        <Route path='Gallery' element={<Gallery/>}></Route> 
        <Route path='Pricing' element={<Pricing/>}></Route> 
        <Route path='Contact' element={<ContactUs/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

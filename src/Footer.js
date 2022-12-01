import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./App.scss";

function Footer() {
  return(
    <div id="footer" style={{backgroundColor:"white"}}>
        <div id="social">
            <a href='https://www.facebook.com/vernon.louw.5680'><FontAwesomeIcon icon={["fab", "facebook-f"]}/></a>
        </div>
        <p className="siteCreator">Powered by: Arthur Butler</p>
    </div>)
}

export default Footer;
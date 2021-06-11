import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from 'react-router-dom';


import './HeadNav.css'

const HeadNav= () => {

  return(
    <div>
                               {/* // <Link to="/movies" style={{ textDecoration: 'none', color:'white' }}>  */}
        <AppBar position="static" style={{backgroundColor:"black"}}>
            <Toolbar className="cont-signin2">
                <img src="/images/Travelook-WhiteLogo.png" alt="Travelook" className="travelook-logo2"/>
                <li className="push"><AccountCircle /> Log In</li>
                <Link to="/user-signup" style={{ textDecoration: 'none', color:'black' }}> <button className="button-signin2">Sign Up Free <ArrowForwardIcon/></button> </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default HeadNav
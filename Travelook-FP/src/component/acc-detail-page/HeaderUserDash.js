import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import {Link} from 'react-router-dom';

// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import {Link} from 'react-router-dom';


import './HeaderUserDash.css'

const HeaderUserDash= () => {

  return(
    <div>
                               {/* // <Link to="/movies" style={{ textDecoration: 'none', color:'white' }}>  */}
        <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}>
            <Toolbar className="cont-signin3">
                <Link to="/" style={{textDecoration:"none", color:"black"}}><img src="/images/Travelook-Black-Font.png" alt="Travelook" className="travelook-logo2"/></Link>
                <p><Link to="/" style={{textDecoration:"none", color:"black"}}><ViewQuiltIcon/>Back to home</Link></p>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default HeaderUserDash
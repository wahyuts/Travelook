import React from 'react';
// import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link, useHistory} from 'react-router-dom';

import './HeadNavSignIn.css'

const HeadNavSignIn= () => {

  // const [showSU, setShowSU] = useState("true");

  //   const onRouteChange = () => {
  //       setShowSU("SignIn")
  //   }

  //   const onBackToSignIn = () => {
  //       setShowSU("true")
  //   }

  return(
    <div>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar className="cont-signin">
            <Link to="/"><img src="/images/Travelook-Logo.png" alt="Travelook" className="travelook-logo"/></Link>
                {/* {showSU === "true" ? */}

                <Link to="/user-signup" style={{ textDecoration: 'none', color:'black' }}> <button className="button-signin">Sign Up</button> </Link>

                 {/* <button className="button-signin" onClick={onRouteChange}>Sign Up</button>:
                 <button className="button-signin" onClick={onBackToSignIn}>Sign In</button> */}
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default HeadNavSignIn
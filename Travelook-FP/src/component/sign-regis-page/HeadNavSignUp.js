import React from 'react';
// import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';

import './HeadNavSignIn.css'

const HeadNavSignUp= () => {

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

                <Link to="/user-signin" style={{ textDecoration: 'none', color:'black' }}> <button className="button-signin">Sign In</button> </Link>

                 {/* <button className="button-signin" onClick={onRouteChange}>Sign Up</button>:
                 <button className="button-signin" onClick={onBackToSignIn}>Sign In</button> */}
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default HeadNavSignUp
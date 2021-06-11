import React from 'react';
import './SignInPage.css';
import Jumbotron from './Jumbotron';


// import LogoAndForm from '../signpage/LogoAndForm';

import HeadNavSignIn from './HeadNavSignIn';

const SignInPage = () => {

    return(
        <div>
            <HeadNavSignIn/> 
            <Jumbotron/>
        </div>
        
    )
}

export default SignInPage;
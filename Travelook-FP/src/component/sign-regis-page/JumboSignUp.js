import React from 'react';
import SignUpForm from './SignUpForm';
import './Jumbotron.css'

const JumboSignUp = () => {
    return(
        <div className="cont-cover-jb zone-jb ">
            <div className="box">
                <img src="/images/LogoPat.png" alt="Travelook" className="logo-absurd"/>
            </div>

            <div className="boxSignUpForm">
                <SignUpForm/>
                {/* <img src="/images/LogoPat.png" alt="Travelook" className="logo-absurd"/> */}
            </div>
        </div>
    )
}

export default JumboSignUp
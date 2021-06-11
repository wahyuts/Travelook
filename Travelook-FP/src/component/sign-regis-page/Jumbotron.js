import React from 'react';
import SignInForm from './SignInForm';
import './Jumbotron.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Jumbotron = () => {
    // const notify = () => toast("Wow so easy!");
    return(
        <div>
            {/* <div><p style={{color:"transparent"}}>fdsafsda</p></div> */}
            <div className="cont-cover-jb zone-jb grid-wrapper">
                <div className="box">
                        <img src="/images/LogoPat.png" alt="Travelook" className="logo-absurd"/>
                </div>

                <div className="boxxx">
                    <SignInForm/>
                    {/* <img src="/images/LogoPat.png" alt="Travelook" className="logo-absurd"/> */}
                </div>
            </div>
            
        </div>
    )
}

export default Jumbotron
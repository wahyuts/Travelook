import React,{useEffect} from 'react';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import WarningIcon from '@material-ui/icons/Warning';
import { useHistory } from "react-router-dom";
// import SignInForm from './SignInForm';
import './ErrorReviewPage.css'

const ErrorReviewPage = () => {

    const history = useHistory();
    const goToHomepage = () => history.push("/");

    // const goToHomepage = () => history.push("/");

    useEffect(() => {
        setTimeout(function(){ goToHomepage(); }, 5000)
    },[])

    // setTimeout(function(){ goToHomepage(); }, 3000) 



    return(
        <div>
            <div className="cont-cover-jbty zone-jbty grid-wrapperty">

                <div className="scale">
                    <div>
                        <p ><WarningIcon style={{fontSize:150, color:"red"}}/></p>
                    </div>
                    
                    <h1>Ups...Something error with review page</h1>
                    <p>You will be redirect to our homepage within 5 second</p>
                    <p>Please go to review dasboard again or if the error still persist plaese re sign in</p>

                </div>
                
            </div >
            
            {/* <div className="cont-cover-jbty zone-jbty grid-wrapperty">
                <div className="boxty">
                        <img src="/images/web-maintenance.png" alt="Travelook" className="logo-absurd-bangetty"/>
                </div>
            </div> */}
            
        </div>
    )

}

export default ErrorReviewPage
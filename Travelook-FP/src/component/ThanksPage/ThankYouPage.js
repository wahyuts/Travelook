import React,{useEffect} from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useHistory } from "react-router-dom";
// import SignInForm from './SignInForm';
import './ThankYouPage.css'

const ThankYouPage = () => {

    const history = useHistory();
    const goToHomepage = () => history.push("/user-dashboard/orders");

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
                        <p ><CheckCircleOutlineIcon style={{fontSize:150, color:"green"}}/></p>
                    </div>
                    
                    <h1>Thank You For Choose Us</h1>
                    <p>You will be redirect to our homepage within 5 second</p>
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

export default ThankYouPage
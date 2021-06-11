import React from 'react';
import './SignInPage.css';
import JumboSignUp from './JumboSignUp';
// import { useDispatch, useSelector } from "react-redux";
// import OnOffModal from '../store/OnOffModal';



// import LogoAndForm from '../signpage/LogoAndForm';

import HeadNavSignUp from './HeadNavSignUp';

const SignUpPage = () => {
    // const {successful} = OnOffModal();
    // const { message } = useSelector(state => state.reducerMessage);


    return(
        
        <div>
            <HeadNavSignUp/> 
            {/* {message && (
            <div className="form-group">
              { successful ? 
                    console.log(message) :
                    <div className={ "alert alert-danger" } role="alert">                    
                        {`${message}, because the email has been used`}
                    </div>
              }
            </div>
          )} */}
            <JumboSignUp/>
        </div>
        
    )
}

export default SignUpPage;
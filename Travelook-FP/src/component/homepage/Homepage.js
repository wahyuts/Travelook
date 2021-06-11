import React from 'react';
import HeadNav from './HeadNav';
import HeadNavAfterLogin from './HeadNavAfterLogin';
import JumboHomepage from './JumboHomepage';
import Content from './Content';
import Footer from './Footer';



const Homepage = () => {


    return(
        // <div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* {
                isSignIn ? <HeadNavAfterLogin/> : <HeadNav/>
                // isSignIn ? <HeadNav/> : <HeadNavAfterLogin/>

            } */}

            {/* <HeadNav/> */}
            {/* <ErrorBoundry> */}
                <HeadNavAfterLogin/>
                <JumboHomepage/>
                <Content/>
                <Footer/>
            {/* </ErrorBoundry>     */}
        </div> 
    )
}

export default Homepage
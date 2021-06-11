import React from 'react';
import './HeadSearchPage.css';
import HeadNavSearch from './HeadNavSearch'

// import SearchLoc from '../homepage/SearchLoc'
// import CheckInDatePicker from '../homepage/CheckInDatePicker'
// import CheckOutDatePicker from '../homepage/CheckOutDatePicker'
// import GuestPicker from '../homepage/GuestPicker';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import HeadNavAfterLogin from '../homepage/HeadNavAfterLogin';
import SearchBox from '../homepage/SearchBox';



import {Link} from 'react-router-dom';

// import HeadNavDetail from '../detailpage/HeadNavDetail';

const JumboSearchPage = () => {
    return (
        <div className="head-cover size-and-pointer gradient-background">
            <HeadNavAfterLogin/>
            {/* <HeadNavSearch/> */}


            <div className="dspflex">

            
                <div className="semboyan-image">
                    <img src="/images/Logo-Search-Page-WTN.png" alt="Where To Next" className="picture"/> 
                </div>

                <SearchBox />
                
                {/* <div className="coba"> 
                        <div className="cover-jb10 Fullwidth">
                                <div className="wtx">
                                    <SearchLoc/>
                                </div>

                                <div className="wtx">
                                    <CheckInDatePicker/>
                                </div>

                                <div className="wtx">
                                    <CheckOutDatePicker/>
                                </div>

                                <div className="wtx">
                                    <GuestPicker/>
                                </div>

                                <div className="wtx">

                                    <Link to="/detail-hotel" style={{ textDecoration: 'none'}}><button className="button-search">Search <ArrowForwardIcon/></button></Link>
                                </div>
                        </div>
                </div> */}

            </div>

        </div>
    )
}

export default JumboSearchPage
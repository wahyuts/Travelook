import React from 'react';
// import SearchLoc from './SearchLoc'
// import CheckInDatePicker from './CheckInDatePicker'
// import CheckOutDatePicker from './CheckOutDatePicker'
// import GuestPicker from './GuestPicker'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import SearchBox from './SearchBox';
import ErrorBoundry from '../network-err-page/ErrorBoundry';

// import {Link} from 'react-router-dom';

// import HeadNavAfterLogin from './HeadNavAfterLogin';



import './JumboHomepage.css'

const JumboHomepage = () => {
    return(
        <div className="cont-cover-jb2 zone-jb2 black-jb box2">  {/*pertama ini buat yang background item aja no flex */}
                
                {/* <HeadNavAfterLogin/> */}

                <img src="/images/Jumbotron-homepage-pic.png" alt="Travelook-preview-hotel" className="gambar"/> {/*line ini mengatur pic size lewat class box2 dan img */}

                <h1 className="h1-slogan">Where's Next ?</h1>
                <p className="slogan">Connecting you to new experience</p>
                <ErrorBoundry>
                <SearchBox />
                </ErrorBoundry>
                {/* <div className="coba"> 
                    <div className="cover-jb6 lebarFull">
                            <div className="wth">
                                <SearchLoc/>
                            </div>

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <CheckInDatePicker/>
                            </div>

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <CheckOutDatePicker/>
                            </div>

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <GuestPicker/>
                            </div>

                            <div className="wth">
                                <Link to="/search-page" style={{ textDecoration: 'none'}}><button className="button-search">Search <ArrowForwardIcon/></button></Link>
                            </div>
                    </div>
                </div> */}
        </div>
    )
}


export default JumboHomepage
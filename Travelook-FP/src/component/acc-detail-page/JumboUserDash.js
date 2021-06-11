import React from 'react';
// import './HeadSearchPage.css';
import HeaderUserDash from './HeaderUserDash'
import ContentDashboard from './ContentDashboard';
import './JumboUserDash.css'

// import HeadNavDetail from '../detailpage/HeadNavDetail';

const JumboUserDash = () => {
    return (
        <div className="header-cover size-pointer grad-back-color">
            <HeaderUserDash/>
            <ContentDashboard/>

            {/* <main className="dsp">
                <div id="bar-button">
                    <h5>kolom 1</h5>
                </div>

                <div id="kontent">
                    <h2>Baris ini dan dibawah ini boleh diganti</h2>

                    <p>Nullam tellus risus, euismod sed lacus ut, tempor pulvinar urna. Integer est dolor, blandit in est a</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae consectetur lacus, vel tincidunt ligula. Mauris laoreet sapien ut arcu fringilla sagittis. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer feugiat justo non dolor sodales, et molestie risus malesuada. 
                        Phasellus nec purus rhoncus, posuere magna bibendum, gravida magna. Nullam tellus risus, euismod sed lacus ut, tempor pulvinar urna. Integer est dolor, blandit in est a, 
                        consectetur ultricies velit. Ut eros velit, ornare id augue vitae, imperdiet blandit risus. Nullam tincidunt at leo nec finibus. Sed efficitur dui ante, sit amet egestas ligula mollis et.
                    </p>
                </div>


            </main> */}
            
        </div>
    )
}

export default JumboUserDash
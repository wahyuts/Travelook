import React from 'react'
import "./FooterDetail.css"
function FooterDetail() {
    return (
        <div className="detail-container">
            <div className="cover-jb4"> {/*------> line ini flex juga*/}
                    <div>
                        <h5>About</h5>
                        <p>Explore stays</p>
                    </div>

                    <div className="supp-column">
                        <h5>Support</h5>
                        <p>Help Center</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>

                    <div className="push-abis">
                        <img src="/images/Group.png" style={{marginBottom:10}} />
                        <p>available on </p>
                        <div className="flex-play">
                            <img src="/images/appstore_logo.png" />
                            <img src="/images/playstore_logo.png" />
                        </div>
                    </div>
            </div>

            <div className="hr-margin">
                <hr></hr>
            </div>

            <div className="cover-jb5"> {/*------> line ini flex div disbox dan footer image*/}
                    <div>
                        <p>English</p>
                    </div>

                    <div className="supp-column">
                        <p>Privacy Policy</p>
                    </div>

                    <div className="supp-column">
                        <p>Term & Conditions</p>
                    </div>

                    <div className="push-abis">
                        <p>© Copyright 2021. All right reserved.</p>
                    </div>
            </div>
            
        </div>
    )
}

export default FooterDetail 

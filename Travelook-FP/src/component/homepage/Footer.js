import React from 'react'
import "./Footer.css"
function Footer() {
    return (

        <div className="cont-cover-jb3 zone-jb3 black-jb3"> {/*------> line ini tidak ada flex */}

            <div className="cover-jb3 gary"> {/*------> line ini flex div disbox dan footer image*/}
                    <div className="disbox"> {/* ini flex juga*/}
                        <h1 className="h1">Stay with confidence</h1>
                        <p className="footer-p">we have been collaborated with many great hostel chains & super hosts <br></br>
                        to ensure your holiday is always comfortable and enjoyable</p>
                    </div>
                    <div className="footer-image"> {/* ini flex juga*/}
                        <img 
                        src="/images/bobobox.png" alt="bobobox" />
                        <img 
                        src="/images/rd.png" alt="rd" />
                        <img 
                        src="/images/airy.png" alt= "airy"/>
                        <img 
                        src="/images/oyo.png" alt="oyo" />
                        <img 
                        src="/images/mamikos.png" alt ="mamikos"/>
                    </div>
            </div>


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
            

            
            {/* <h2>Footer</h2> */}
            {/* <img src="/images/Jumbotron-homepage-pic.png" alt="Travelook-preview-hotel"/> */}
        </div>

    )
}

export default Footer

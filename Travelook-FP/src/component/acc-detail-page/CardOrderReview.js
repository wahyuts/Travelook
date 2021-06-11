import React from 'react';
import EventIcon from '@material-ui/icons/Event';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './OrderDetail.css'

const CardOrderReview = () => {
    return(
        <div>

            <div className="card-order">
                    <div className="only-pic"> {/* className only-pic ga ada flex*/ }
                        <img src="/images/Jumbotron-homepage-pic.png" alt="Travelook-preview-hotel" className="pic-in-orderReview"/>
                    </div>

                    <div className="detail-booking-card">
                        <p>ORDER ID #XXXXX </p>
                        <h5>Nama Apartment or hotelnya</h5>
                        <p><EventIcon style={{marginRight:10}}/> Tanggal booking <span style={{marginLeft:30,marginRight:10}}>|</span> <InsertEmoticonIcon style={{marginLeft:8,marginRight: 8}}/> Guest (disini cuma get data)</p>
                        <p style={{marginBottom:30}}>Location</p>
                        <p>How was the experience?<span style={{marginLeft:10}}>|</span> (isinya Rating + Bintang)</p>
                    </div>

                    <div className="only-margin-triplle-dot">
                        <ul className="ul-tripple-dot">
                            <li className="statusRev">Status</li>
                        </ul>
                    </div>
                    {/* <p>Cardlistnya disini</p> */}
                </div>
                
        </div>
    )
}

export default CardOrderReview
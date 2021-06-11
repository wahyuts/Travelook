import React from 'react';
import './EmptyOrder.css'

const EmptyReviewError = () => {
    return(
        <div>
            <div className="flexEmptyOrder">
                
                <img src="/images/EmptyStates.png" alt="No Order" className="empty-states-logo"/>
                <h5>Ups.. something wrong with displaying review right now !</h5>
                <p>Sorry for inconvenience, please reload or re sign in again di display this review</p>  
            </div>  
        </div>
    )
}

export default EmptyReviewError
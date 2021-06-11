import React from 'react';
import './EmptyOrder.css'

const EmptyReview = () => {
    return(
        <div>
            <div className="flexEmptyOrder">
                
                <img src="/images/EmptyStates.png" alt="No Order" className="empty-states-logo"/>
                <h5>Want to write some review</h5>
                <p>Everything you can review, about your stays appear hear</p>  
            </div>  
        </div>
    )
}

export default EmptyReview
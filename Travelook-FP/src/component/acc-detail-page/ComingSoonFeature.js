import React from 'react';
import './EmptyOrder.css'

const ComingSoonFeature = () => {
    return(
        <div>
            <div className="flexEmptyOrder">
                
                <img src="/images/EmptyStates.png" alt="No Order" className="empty-states-logo"/>
                <h5>COMING SOON</h5>
                <p>This feature is still in development</p>  
            </div>  
        </div>
    )
}

export default ComingSoonFeature
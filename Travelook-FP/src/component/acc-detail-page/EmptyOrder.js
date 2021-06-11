import React from 'react';
import './EmptyOrder.css'

const EmptyOrder = () => {
    return(
        <div>
            <div className="flexEmptyOrder">
                
                <img src="/images/EmptyStates.png" alt="No Order" className="empty-states-logo"/>
                <h5>No Orders Yet</h5>
                <p>After book a stay you can manage orders here</p>  
            </div>  
        </div>
    )
}

export default EmptyOrder
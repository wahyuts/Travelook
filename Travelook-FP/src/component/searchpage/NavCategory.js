import React from 'react';
import './NavCategory.css';
// import {Route} from 'react-router-dom';

const NavCategory = ({onHighestRating, onFilterOnlyByLowPrice}) => {

    const reloaded= () => {
        window.location.reload()
    }

    return(
        <div className="zone-cat lebarFullx">
            <ul className="main-nav">
                {/* <li className="menu_category"><a href="#"></a>Sort by</li> 
                <li className="menu_category"><button>Most Popular</button></li>
                <li className="menu_category"><button>Highest Rating</button></li>
                <li className="menu_category"><button>Lowes Price</button></li> */}
                <li className="menu_category-sortby">Sort by</li> 
                <li className="menu_category">Most Popular</li> 
                <li className="menu_category" onClick={onHighestRating}>Highest Rating</li> 
                <li className="menu_category" onClick={onFilterOnlyByLowPrice}>Lowest Price</li> 
                <li className="menu_category-reset" onClick={reloaded}>Reset</li> 

            </ul>
        </div>
    )
}

export default NavCategory
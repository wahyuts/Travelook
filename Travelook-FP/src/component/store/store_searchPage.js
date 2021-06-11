import {useState} from 'react';

const store_searchPage = () => {
    const [MostPopular, setMostPopular] = useState('Most Popular');
    const [HighestRating, setHigestRating] = useState('Highest Rating');
    const [LowestPrice, setLowestPrice] = useState('Lowest Price');

    const ClickChangeMP = () => {
        setMostPopular(!isSignIn);
    }

    return {
        isSignIn,
        ClickSignInChangeHeadNav
    }
}

export default store_searchPage
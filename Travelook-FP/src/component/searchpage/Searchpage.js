import React, {useEffect, useState} from 'react';
import JumboSearchPage from './JumboSearchPage'
import FooterDetail from '../detailpage/FooterDetail'
import ContentSearchPage from '../searchpage/ContentSearchPage';
// import userService from '../../services/user.service';
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";


// import OnOffModal from '../store/OnOffModal'

const Searchpage = () => {
    // const { desti } = useSelector(state => state.redDestination);
    const { getHotelByLoc } = useSelector(state => state.redGetLoc);  // getHotelByLoc ini datanya sudah ada pake get by location dari search box

    const goState = getHotelByLoc.map((user,i)=>({
        stateProv:getHotelByLoc[i].location.state
    }))

    // menyaring filter yang sama jadi satu satu  cth [3,3,3,4,4,5,1,1,2] jadi [1,2,3,4,5]
    const arr = goState.map((user,i)=>{
        const arr2 = goState[i].stateProv
        return arr2
    })

    const locstate = [...new Set(arr)];

    // console.log("getSTATE HOTEL", locstate)

    // console.log("getHotSEARCH", getHotelByLoc)
    // console.log("getHotFunc", funcGetHot)

    // const {desti, handleChange} = OnOffModal();

    // console.log("dessss",desti)
    return (
        <div>
            <JumboSearchPage/>
            <ContentSearchPage locstate={locstate}/>
            <FooterDetail/>

        </div>
    )
}

export default Searchpage
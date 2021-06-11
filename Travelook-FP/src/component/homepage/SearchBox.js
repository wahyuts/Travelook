import React, {useEffect, useState} from 'react';
import UserService from "../../services/user.service";
import axios from "axios";
// import SearchLoc from './SearchLoc'
import CheckInDatePicker from './CheckInDatePicker'
import CheckOutDatePicker from './CheckOutDatePicker'
import GuestPicker from './GuestPicker'
import DestinationManual from './DestinationManual'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import {Link} from 'react-router-dom';

import './JumboHomepage.css'
import { useDispatch, useSelector } from "react-redux";
import { setGetLoc } from '../../actions/auth';

// import UserService from '../../services/user.service';


const SearchBox = () => {


    const { desti } = useSelector(state => state.redDestination);
    const { getOnlyGuest } = useSelector(state => state.redOnlyGuest);
    // const { getHotelByLoc } = useSelector(state => state.redGetLoc);
    const { getCekin } = useSelector(state => state.redCekin);
    const { getCheckOutDate } = useSelector(state => state.redCheckOutDate);
    const dispatch = useDispatch();

    // console.log("getttttcekin",getCekin)

    const [tampungID, setTampungID] = useState ([])
    // const [destination, setDestination] = useState ([])

    // const [getHotelByLoc, setGetHotelByLoc] = useState ([]);

    const API_URL = "https://travelook.gabatch11.my.id/";

    // const {desti} = OnOffModal();

    // console.log ("destix", desti);



    const [getDestination, setGetDestination] = useState([])


    useEffect (() => {
        
        UserService.getAllHotel().then(
            
            (response) => {
                setGetDestination(response.data.data)
            },
          
        ).catch((error)=> { 
                 const _content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
        
                  setGetDestination(_content);
            if (error.response) {
                <Link to ="/under-construction"/>
              } 
            console.log( "error list",error ) 
          });

    }, []);

    console.log("Destination", getDestination)

   
    const destination = getDestination.filter(content =>{
        return content

        }) 

    const FuncGetLoc = () => {
        // console.log("destin", desti)

            if (desti == "All") {

                UserService.getAllHotel().then(
                    (response) => {
                        dispatch(setGetLoc(response.data.data));
                        console.log("label",response)
                        // setGetDestination(response.data.data)
                    },
                 
                ).catch((error)=> { 
                    const _content =
                     (error.response &&
                       error.response.data &&
                       error.response.data.message) ||
                     error.message ||
                     error.toString();
           
                     setGetDestination(_content);
                    console.log( "error list",error ) 
             });
            } else{
                return axios.get(API_URL + `room/loc?loc=${desti}`).then(
                    // userService.getAllHotelByLoc `${desti}`.then(
                    // userService.getAllHotelByLoc `${desti}`.then(
                        (response) => {
                            // dispatch(setDesti(event.target.value));
                            dispatch(setGetLoc(response.data.data));
                            // setGetHotelByLoc(response.data.data)
                        },
                       
                    ).catch((error)=> { 
                        const _content =
                         (error.response &&
                           error.response.data &&
                           error.response.data.message) ||
                         error.message ||
                         error.toString();
               
                         setGetDestination(_content);
                        console.log( "error list",error ) 
                 });
            }
        
    }

    useEffect( () => {
        if (desti == "All") {

            UserService.getAllHotel().then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                    // console.log("label",response)
                    // setGetDestination(response.data.data)
                },
              
            ).catch((error)=> { 
                const _content =
                 (error.response &&
                   error.response.data &&
                   error.response.data.message) ||
                 error.message ||
                 error.toString();
       
                 setGetDestination(_content);
                console.log( "error list",error ) 
         });
        } else{
       
            // funcGetHot.then(
                return axios.get(API_URL + `room/loc?loc=${desti}`).then(
                    // userService.getAllHotelByLoc `${desti}`.then(
                    // userService.getAllHotelByLoc `${desti}`.then(
                        (response) => {
                            // dispatch(setDesti(event.target.value));
                            dispatch(setGetLoc(response.data.data));
                            // setGetHotelByLoc(response.data.data)
                        },
                    
                    ).catch((error)=> { 
                        const _content =
                         (error.response &&
                           error.response.data &&
                           error.response.data.message) ||
                         error.message ||
                         error.toString();
               
                         setGetDestination(_content);
                        console.log( "error list",error ) 
                 });

                    
                }
                    
                }, [desti])

   
    return(
        <div>
           
            <div className="coba"> 
                    <div className="cover-jb6 lebarFull">


                            <div className="wth">
                                
                                <DestinationManual destination = {destination}/>
                            </div>
                                                                {/* <SearchLoc/> */}

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <CheckInDatePicker/>
                            </div>

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <CheckOutDatePicker/>
                            </div>

                            <div className="garis-samping">
                                <p style={{color:"transparent"}}>H</p>
                            </div>

                            <div className="wth">
                                <GuestPicker/>
                            </div>

                            {/* <Link to="/user-signup" style={{ textDecoration: 'none', color:'black' }}> <button className="button-signin2">Sign Up Free <ArrowForwardIcon/></button> </Link> */}
                            <div className="wth">
                                {
                                    desti.length > 0 && getOnlyGuest > 0 && getCekin !== null && getCheckOutDate !== null
                                    // ? <Link to="/search-page" style={{ textDecoration: 'none'}}><li className="button-search" >Search <ArrowForwardIcon/></li></Link> //onClick={FuncGetLoc}
                                    ? <Link to="/search-page" style={{ textDecoration: 'none'}}><li className="button-search" onClick={FuncGetLoc} >Search <ArrowForwardIcon/></li></Link> //onClick={FuncGetLoc}
                                    : <li className="button-disabled" disabled>Search <ArrowForwardIcon/></li>

                                    
                                }
                                {/* <Link to="/search-page" style={{ textDecoration: 'none'}}><button className="button-search">Search <ArrowForwardIcon/></button></Link> */}
                                {/* <button className="button-search" style={{ textDecoration: 'none'}} onClick={handleClickSearch}>Search <ArrowForwardIcon/></button> */}

                            </div>
                    </div>
                </div>
                 
        </div>
    )
}

export default SearchBox
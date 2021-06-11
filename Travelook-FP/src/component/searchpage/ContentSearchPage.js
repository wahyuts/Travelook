import React, {useEffect, useState} from 'react'
import FilterSideBar from './FilterSideBar'
import './ContentSearchPage.css'
import StarRate from './StarRate';
import Location from './Location';
import PriceRange from './PriceRange';
import NavCategory from './NavCategory';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useDispatch, useSelector } from "react-redux";
import StarIcon from '@material-ui/icons/Star';
import UserService from '../../services/user.service';
import { setGetLoc } from '../../actions/auth';
import { setBudget } from '../../actions/auth';
// import { setGetStarRate } from '../../actions/auth';


import { setOnlyIdHotel } from '../../actions/auth';

import axios from "axios";
import Scroll from "./Scroll";



import { setGetStarRate } from '../../actions/auth';


import {Link} from 'react-router-dom';
import { yellow } from '@material-ui/core/colors';



// import CheckStar5 from './CheckStar5';


const ContentSearchPage = ({locstate})=> {

    const { desti } = useSelector(state => state.redDestination);

    const { getHotelByLoc } = useSelector(state => state.redGetLoc);

    const { getBudget } = useSelector(state => state.redBudget || []);

    const budget = getBudget

    // console.log("budgetttt low", budget[0])

    // console.log("HIGH BUDGET", budget[1])

    // console.log("GET HOOOTTELLL", getHotelByLoc)

    // console.log("IMGGG",getHotelByLoc[0].Media[0].file_name)

    

    const { getOnlyIdHotel } = useSelector(state => state.redOnlyID || []);

    const { getStarRate } = useSelector(state => state.redStarRate);

    const [starTrek, setStarTrek] = useState ([])

    const [locationState, setLocationState] = useState ([])

    const [highRating, setHighRating] = useState (5)

    const [rateCeking, setRateCeking] = useState ([])

    const [tampungID, setTampungID] = useState ([])

    const [tampungError, setTampungError] = useState ([])

    const API_URL = "https://travelook.gabatch11.my.id/";



    const dispatch = useDispatch();

    // const arrTampungID = getHotelByLoc.map((user,i)=>{
    //     const arr2 = getHotelByLoc[i].id
    //     setTampungID(arr2) 
    // })

    // console.log("ID Hotel", arrTampungID)

    // useEffect( () => {
    //     const arrTampungID = getHotelByLoc.map((user,i)=>{
    //     const arr2 = getHotelByLoc[i].id
    //     return arr2
    //     setTampungID( arr2) 
    //     })
    //     console.log("ID Hotel", arrTampungID)
    // },[])
    

    const onHighestRating = () => {
        setHighRating(5)
        dispatch(setBudget([0,0]))
        // setStarTrek([])
        return axios.get(API_URL + `room/?rating=[${highRating}]`).then(
            (response) => {
                dispatch(setGetLoc(response.data.data));
                // console.log("label",response)
                // setGetDestination(response.data.data)
            },
            (error) => {
                const _content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
        
                  setTampungError(_content);
              }
        );
    }

    const onFilterOnlyByLowPrice = () => {
        // setHighRating(5)
        // dispatch(setBudget([0,0]))
        // setStarTrek([])
        return axios.get(API_URL + `room?minprice=${budget[0]}`).then(
            (response) => {
                dispatch(setGetLoc(response.data.data));
                console.log("label",response)
                // setGetDestination(response.data.data)
            },
            (error) => {
                const _content =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
        
                  setTampungError(_content);
              }
        );
    }

    const onChecking = (event) =>{

        // setRateCeking(document.querySelectorAll(`input[name="${event.target.name}"]:checked`)) ;
        // console.log("RATE CEKING", rateCeking)
        const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]:checked`);
       
            let values = [];

            // console.log("SUPVALUESssssss", checkboxes)

            // setRateCeking(checkboxes)
            // console.log("RATE CEKING", rateCeking)
            if (checkboxes.length === 0){
                setStarTrek([])
            }

            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
                    setStarTrek ( values.map(function (x) { 
                    return parseInt(x, 10);
                    }));
            });
      };

    //***********onCheckLoc lokasi state cara pertama pake array type   ["kuta", "ubud"] */

      const onCheckLoc = (event) =>{
        // const checkboxes = document.querySelectorAll(`input[type="${event.target.type}"]`).on(`change`, function() {
        //     (`input[name="${event.target.name}"]`).not(this).prop('checked', false);
        // });

        // const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]`);

        const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]:checked`);
            let valuesLoc = [];
            // console.log("SUPVALUES", checkboxes)
            if (checkboxes.length === 0){
                setLocationState([])
            }
            checkboxes.forEach((checkbox) => {
                // console.log("cek", checkbox)
                
                // if (checkbox.name === `${event.target.name}`) {
                //     checkbox.checked = true
                // } 
                // else {
                //     checkbox.checked = false
                // }

                // cth hasil ["kuta","jakarta","palembang"]
                valuesLoc.push(checkbox.value);
                // console.log("HAHAHAHA", valuesLoc)

                 // cth hasil    kuta,jakarta,palembang
                const queryJoinLoc = valuesLoc.join(',')
                // console.log("SUPER VALUES", queryJoinLoc)

                // tererah mau pilih pake hasil yang seperti apa (pilih salah satu dari opsi dibawah ini)
                 setLocationState(queryJoinLoc)
                //  setLocationState(valuesLoc)

            });
        };

    //***********End onCheckLoc lokasi state cara pertama pake array type   ["kuta", "ubud"] */

    //***********onCheckLoc lokasi state cara 2 pake satua name   misal cum   kuta */************** */
        // cara ini mesti rubah di bagian location name nya menjadi name={locstate[i]}
        // disarankan juga merubah jadi radio button 
        const emptyCheckBox = (event)=> {
            const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]:checked`, false);
            return checkboxes
        }

        const onCheckLoc2 = (event) =>{
            const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]:checked`);
                let valuesLoc = [];
                // console.log("SUPVALUES", checkboxes)
                if (checkboxes.length === 0){
                    setLocationState([])
                }
                checkboxes.forEach((checkbox) => {
                    valuesLoc.push(checkbox.value);
                    // console.log("HAHAHAHA", valuesLoc)
                    let coba = valuesLoc[0]
                    // console.log("cobain", coba)
                    setLocationState(coba)

                    // setLocationState(valuesLoc)

                });
            };

    //***********End onCheckLoc lokasi state cara 2 pake satua name   misal cum   kuta */



                // console.log("lokasi hotel", valuesLoc)

                // let coba = valuesLoc[0]
                // console.log("cobain", coba)
                // setLocationState(coba)

                // const mantep = []
                // mantep.push(valuesLoc[0])
                // console.log("mantep", mantep)

                
                
                // let newval = [];
                // newval.push(valuesLoc)
                // checkboxes.forEach((checkbox) => {
                //     values.push(checkbox.value);
                //         setStarTrek ( values.map(function (x) { 
                //         return parseInt(x, 10);
                //         }));
                // console.log("lokhot", newval)



                // const arr = valuesLoc.map((user,i)=>{
                //     const arr2 = tujuan[i].dest
                //     return arr2
                // })

                // setLocationState (valuesLoc)
                
                // const arr2 = valuesLoc.map((user,i) => { 
                //     return valuesLoc[i]
                // });
                // setLocationState(arr2)
           
            // console.log("lokasi hotel", locationState)
            // console.log("lokasi hotel", valuesLoc)


     

    //   console.log("lokasi hotel", locationState)

    // console.log("lokasi hotel", valuesLoc)

    // console.log("resssss", starTrek)


    // let cobaxx = []
    // cobaxx.push(locationState)

    // console.log("ress LOC STATE", cobaxx)


    // const [valuesx,setValuesx] = useState([]);

    // function getSelectedCheckboxValues(name) {
    //     const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    //     let values = "";
    //     // const [values,setValues] = useState([]);
    //     checkboxes.forEach((checkbox) => {
    //         values.push(checkbox.value);
    //     });

    //     setValuesx(values)
    //     // return values;
    //     console.log(values);
    // }

    // console.log("setval", valuesx)

    const filterbtn = () => {
        window.location.reload()
    }



    // useEffect( () => {

    // }, [desti])

    // ********************condition filter 1 pake switch case*******************************************************************

    // const searchBtnFilter2 = () => {
    //   let condition = starTrek.length > 0
    //   switch (condition) {
    //     case starTrek.length > 0: // ini kasus hanya rate bintang hotel yang dicentang
    //         return axios.get(API_URL + `room/?rating=[${starTrek}]`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data));
    //                 console.log("label",response)
    //             },
            
    //             (error) => {
    //                 const _content =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
            
    //                 setTampungError(_content);
    //             }
                
    //         )
    //         // break;

    //     case budget[0] > 0 : // ini kasus hanya low budget saja yang dipake
    //         return axios.get(API_URL + `room?minprice=${budget[0]}`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data));
    //                 console.log("label",response)
    //             },
    //             (error) => {
    //                 const _content =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
            
    //                 setTampungError(_content);
    //             }
    //         );

    //         // break;
    //     case budget[1] > 0 : // ini kasus hanya high budget saja yang dipake
    //         return axios.get(API_URL + `room?maxprice=${budget[1]}`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data));
    //                 console.log("label",response)
    //             },
    //             (error) => {
    //                 const _content =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
            
    //                 setTampungError(_content);
    //             }
    //         );

    //         // break;
    //     case budget[0] > 0 && budget[1] > 0: // ini kasus hanya low, high budget saja yang dipake
    //         return axios.get(API_URL + `room?minprice=${budget[0]}&maxprice=${budget[1]}`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data));
    //                 console.log("label",response)
    //             },
    //             (error) => {
    //                 const _content =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
            
    //                 setTampungError(_content);
    //             }
    //         );

    //         // break;
    //     case starTrek.length > 0 && budget[0] > 0 && budget[1] > 0 : // rate star, low, high budget dipake semua
    //         return axios.get(API_URL + `room?rating=[${starTrek}]&minprice=${budget[0]}&maxprice=${budget[1]}`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data));
    //                 console.log("label",response)
    //             },
    //             (error) => {
    //                 const _content =
    //                 (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                 error.message ||
    //                 error.toString();
            
    //                 setTampungError(_content);
    //             }
    //         );

    //     default:
    //         return axios.get(API_URL + `room/`).then(
    //             (response) => {
    //                 dispatch(setGetLoc(response.data.data)); 
    //              },
    //             (error) => {
    //                 const _content =
    //                     (error.response &&
    //                     error.response.data &&
    //                     error.response.data.message) ||
    //                     error.message ||
    //                     error.toString();
    //                     dispatch(setGetLoc(_content));
    //                 }
    //         )

    //         // break;
    //   }
    // }

    // ********************condition filter 1 pake switch case*******************************************************************

    // ********************condition filter 2 pake else if*******************************************************************
    const searchBtnFilter = () => {
        if (starTrek.length > 0) {

            return axios.get(API_URL + `room/?rating=[${starTrek}]`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                      (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString();
            
                      setTampungError(_content);
                  }
            );
           
        } 

        else if ( budget[0] > 0 ) {
            return axios.get(API_URL + `room?minprice=${budget[0]}`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setTampungError(_content);
                }
            );
        }

        else if ( budget[1] > 0 ){
            return axios.get(API_URL + `room?maxprice=${budget[1]}`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setTampungError(_content);
                }
            );
        }

        else if (budget[0] > 0 && budget[1] > 0) {
            return axios.get(API_URL + `room?minprice=${budget[0]}&maxprice=${budget[1]}`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setTampungError(_content);
                }
            );
        }

        else if (starTrek.length > 0, budget[0] > 0, budget[1] > 0) {
            return axios.get(API_URL + `room?rating=[${starTrek}]&minprice=${budget[0]}&maxprice=${budget[1]}`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setTampungError(_content);
                }
            );
        }
        
        else{
            return axios.get(API_URL + `room/`).then(
                    (response) => {
                        dispatch(setGetLoc(response.data.data)); 
                     },
                    (error) => {
                        const _content =
                            (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                            error.message ||
                            error.toString();
                            dispatch(setGetLoc(_content));
                        }
                )
            }
        }

    // ********************End condition filter 2 pake else if*******************************************************************
    const searchBtnFilter4 = (event) => {
        const query = []
        if (starTrek.length > 0) {
            query.push(`rating=[${starTrek}]`)
        }

        if (budget[0] > 0) {
            query.push(`minprice=${budget[0]}`)
        }

        if (budget[1] > 0) {
            query.push(`maxprice=${budget[1]}`)
        }

        if (locationState.length > 0) {
            query.push(`state=${locationState}`)
        }

        const queryJoin = query.join('&')

        return axios.get(API_URL + `room?${queryJoin}`).then(
            (response) => {
                dispatch(setGetLoc(response.data.data));
            },
            (error) => {
                const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
        
                setTampungError(_content);
            },
            emptyCheckBox(event)
        );
    }

    // ********************condition filter 3 pake else if*******************************************************************

    const searchBtnFilter3 = () => {
        console.warn(starTrek, budget[0], budget[1])
        if (starTrek.length > 0 && budget[0] > 0 && budget[1] > 0) {
            return axios.get(API_URL + `room?rating=[${starTrek}]&minprice=${budget[0]}&maxprice=${budget[1]}`).then(
                (response) => {
                    dispatch(setGetLoc(response.data.data));
                },
                (error) => {
                    const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setTampungError(_content);
                }
            );
        }
        
        else{
            return axios.get(API_URL + `room/`).then(
                    (response) => {
                        dispatch(setGetLoc(response.data.data)); 
                     },
                    (error) => {
                        const _content =
                            (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                            error.message ||
                            error.toString();
                            dispatch(setGetLoc(_content));
                        }
                )
            }
        }
    // ********************End condition filter 3 pake else if*******************************************************************



    const items = [
        { name: 'Filter', label: 'Filter' },
    
        { name: 'price', 
          label: 'Price',
          items: [
            //   <PriceRange/>
              {name:'rangeHarga', label:<PriceRange/>},
            //   {name:'sliderHarga', label:'Slider Harga'}
          ] 
        },
    
        { name: 'location', 
          label: `Location on ${desti}`,
          items: [
              {name:'lembang', label:<Location locstate={locstate} onCheckLoc={onCheckLoc}/>},
            //   {name:'loadmore', label:'Loadmore'}
          ] 
        },
    
        { name: 'starRating', 
          label: 'Star Rating',
          items: [
              {name:'rating', label:<StarRate onChecking={onChecking}/>},
          ] 
        },

        { name: 'button search', 
          label: <button style={{width:285,backgroundColor: "grey", color: "white", border: "none"}} onClick={searchBtnFilter4}>Search</button> 
        },

        // { name: 'button tab filter', 
        // label: <button style={{width:285,backgroundColor: "#363636", color: "white"}} onClick={filterbtn}>Clear Filter</button> 
        //  },
      ]

      const hitMoreDetail = (event) => {
            dispatch(setOnlyIdHotel(event.target.value));
            localStorage.setItem('idHotel', event.target.value);
        //   console.log("no Khusus ID", event.target.value)
      }

    //   console.log("No Khusus ID", getOnlyIdHotel)

    return(
        <div>
            <main className="dsp">
                <div id="bar-button">
                    <FilterSideBar items={items}/>
                </div>

                <div id="kontent">
                    <br/>
                    <br/>
                    {/* <div style={{marginBottom:20}}>
                        <br/>
                    </div> */}
                    
                    <NavCategory onHighestRating={onHighestRating} onFilterOnlyByLowPrice={onFilterOnlyByLowPrice}/>
                    {/* {getHotelByLoc.map((user,i)=>{
                                return (  */}
                    <div className="cont-result-cardlist"> {/** ini flex dan buat border sama background */}
                        
                        {/* disini line ini bakal diisi condition lagi,..kalo true bakal tampilin hasil search box,..kalo false hasil filter */}
                        <Scroll>
                        {getHotelByLoc.map((user,i)=>{
                            return (   
                                <div className="result-card" key={i}>{/** ini flex */}
                                    <div className="box-content-searchpage">{/** ini  ga flex */}
                                            {/* <img src="/images/Jumbotron-homepage-pic.png" alt="Travelook-preview-hotel" className="gambar"/>                                 */}
                                            <img src={`https://travelook.gabatch11.my.id/${getHotelByLoc[i]?.Media[2].file_name}`} alt="Travelook-preview-hotel" className="gambar"/>                                
                                    </div>  

                                    <div>
                                        <p>{getHotelByLoc[i].location.city}, {getHotelByLoc[i].location.state}</p>
                                        <h5>{getHotelByLoc[i].name}</h5>
                                        {/* <h5>Nama apartment dan hotel</h5> */}
                                            <div>
                                                <ul className="display-ul">
                                                    <li className="li-ul"><p>{getHotelByLoc[i].total_occupancy} Available rooms</p></li>
                                                    <li className="li-ul"><p>{getHotelByLoc[i].total_bedrooms} bed</p></li>
                                                    {/* <li className="li-ul"><p>bed</p></li> */}
                                                    <li className="li-ul"><p>{getHotelByLoc[i].total_bathroom} bath</p></li>
                                                </ul>
                                            </div>
                                        {/* <p>Fitur hotel seperti, kamar, tempat tidur, dsb</p> */}
                                        <p><StarIcon style={{color:"orange"}}/> {getHotelByLoc[i].rating} / 5</p>
                                    </div>

                                    <div>
                                        <p>IDR {getHotelByLoc[i].price} / Night</p>
                                        <Link to={`/detail-hotel/${getHotelByLoc[i].name}`} style={{ textDecoration: 'none'}}><button className="button-book-now" value={getHotelByLoc[i].id} onClick={hitMoreDetail}>More Detail <ArrowForwardIcon/></button> </Link>  

                                        {/* <Link to={{
                                                    pathname:`/detail-hotel/${getHotelByLoc[i].name}`,
                                                    state: {
                                                       id: `${getHotelByLoc[i].id}`,
                                                       
                                                    }

                                                }} style={{ textDecoration: 'none'}}><button className="button-book-now" value={getHotelByLoc[i].id} onClick={hitMoreDetail}>More Detail <ArrowForwardIcon/></button> </Link>   */}
                                    </div>
                                </div>
                                    )
                                })
                            }
                            </Scroll>
                                        
                     </div>
                                {/* )
                            })
                        } */}
                          

                        {/* <div className="result-cards"> */}

                        {/* </div> */}

                    {/* </div> */}
                    
                </div> {/**akhir div kontent */}


            </main>
        </div>
    )
}

export default ContentSearchPage
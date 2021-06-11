import React, {useEffect, useState} from 'react';
import EmptyReview from './EmptyReview';
import CardOrderReview from './CardOrderReview';
import CardReviewModal from './CardReviewModal';
import UserService from "../../services/user.service";
import Scroll2 from './Scroll2'
import axios from 'axios'
import qs from 'qs'
import authHeader from "../../services/auth-header";
import './ReviewDetail.css'

const ReviewDetail =()=>{
    const API_URL = "https://travelook.gabatch11.my.id/reservation/user?page=1"
    const [listOrder, setListOrder] = useState([])

    const data = qs.stringify({ 
        status: "active",
        
       });

    useEffect(() => {

        axios.post(API_URL, data, {headers: authHeader()} ) 
    .then(response => {
            setListOrder(response.data.data)
      })  
        .catch((error) => {
            
            console.log(error. response. data)
            console.log(error. response. status);
         
        });
    
      }, []);


      const filterByStatus = listOrder.filter((content,i) =>{
        return listOrder[i].status === "approved"
        }) 


    return(
        <div>

            <div className="cont-review-detail">
                <div className="only-margin-review">
                    <h4>Reviews</h4>
                    <p>Let everyone knows your experience by writing a review </p>
                </div>
            </div>

            <div className="cont-review-boxcard">
                {/* {
                    listOrder.length > 0 
                    ? <CardOrder/>
                    : <EmptyOrder/>
                } */}
                {/* <EmptyOrder/> */}

                {
                     filterByStatus.length > 0
                    // ? <CardOrder listOrder={listOrder}/>
                    ? <Scroll2><CardReviewModal filterByStatus={filterByStatus}/></Scroll2>
                    : <EmptyReview/>
                }

                {/* <CardOrderReview/>
                <CardOrderReview/>
                <CardOrderReview/> */}

                
            </div>

        </div>
        
    )
}

export default ReviewDetail
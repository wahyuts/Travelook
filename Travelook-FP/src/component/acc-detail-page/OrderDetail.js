import React, {useEffect, useState} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmptyOrder from './EmptyOrder';
import CardOrder from './CardOrder';
import axios from 'axios'
import authHeader from "../../services/auth-header";
import UserService from "../../services/user.service";
import Scroll from '../searchpage/Scroll'
import {Link} from 'react-router-dom'
import NotifErrorOrderDetail from './NotifErrorOrderDetail'

import Scroll2 from './Scroll2'
import './OrderDetail.css'
import qs from 'qs'

const OrderDetail =()=>{
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

    const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

    const closeNotifyError = () => {
        setNotifyError({
        isOpen: false,
        message: '',
        })
    };

    const handleNewFeature = () => {
        setNotifyError({
            isOpen: true,
            message: 'Coming soon !',
            })
    }

    return(
        <div>

            <div className="cont-order-detail">
                <div className="only-margin">
                    <h4>Orders</h4>
                    <p>After book a stay you can manage orders here </p>
                </div>
                
                <div>
                    <ul className="ul-order">
                        <li><Link to="/user-dashboard/orders" style ={{textDecoration: 'none', color: 'black' }}>All Request</Link></li>
                        <li onClick = {handleNewFeature}>Success</li>
                        <li onClick = {handleNewFeature}>On process</li>
                        <li onClick = {handleNewFeature}>Failed</li>
                    </ul>
                </div>

            </div>

            <div className="cont-order-boxcard">
                {
                    listOrder.length > 0 
                    // ? <CardOrder listOrder={listOrder}/>
                    ? <Scroll2><CardOrder listOrder={listOrder}/></Scroll2>
                    : <EmptyOrder/>
                }

            </div>

            <NotifErrorOrderDetail
                      style={{marginTop:50, paddingLeft:500}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />

        </div>
        
    )
}

export default OrderDetail
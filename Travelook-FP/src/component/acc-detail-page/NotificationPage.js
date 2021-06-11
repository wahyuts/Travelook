import React, {useEffect, useState} from 'react';
import NotificationDetail from './NotificationDetail'
import ComingSoonFeature from './ComingSoonFeature'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmptyOrder from './EmptyOrder';
import CardOrder from './CardOrder';
import axios from 'axios'
import authHeader from "../../services/auth-header";
import UserService from "../../services/user.service";
import Scroll from '../searchpage/Scroll'

import Scroll2 from './Scroll2'
import './ComingSoonFeature.css'
import qs from 'qs'

const NotificationPage =()=>{

    return(
        <div className="cont-cms">
            <ComingSoonFeature/>
            {/* <NotificationDetail/> */}
        </div>
    )
}

export default NotificationPage
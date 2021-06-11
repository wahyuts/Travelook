import React, {useState,useEffect} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UserService from "../../services/user.service";
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import AccountBoxIcon from '@material-ui/icons/AccountBox';


import {Link,Redirect} from 'react-router-dom'


import './Dashboard.css';
// difile ini bakal ditaro link nya dari react router
function Dashboard() {

    const [ accDetail, setAccDetail] = useState({})
    const [ accFirstName, setAccFirstName] = useState("")
    const [ accLastName, setAccLastName] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        UserService.getOneUserData().then(
          (response) => {
            // UNTUK NGECEK response.data.data
            //******************************* */
            setAccDetail(response.data.data);
            setAccFirstName(response.data.data.first_name);
            setAccLastName(response.data.data.last_name);
            // setAccPhoneNumber(response.data.data.phone_number);
    
    
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
              setAccDetail(_content);
          }
          
        );
    
      }, []);

      const handleMenuLogout = () => {
        // logout();
        dispatch(logout());
        <Redirect to="/" />
      };


  return (
    <div className="sidebar">
        <List disablePadding dense>
            <ListItem className="item-list">
                <ListItemText><AccountBoxIcon className="icon-margin"/>{`${accFirstName} ${accLastName}`}</ListItemText>
            </ListItem>
            <Link className="styling-link-dashboard" to='/user-dashboard/my-account'>
                <ListItem button className="btn-list">
                    <ListItemText><AccountBoxOutlinedIcon className="icon-margin"/>Account</ListItemText> 
                </ListItem>
            </Link>

            <Link className="styling-link-dashboard" to='/user-dashboard/notifications'>
                <ListItem button className="btn-list">
                    <ListItemText><NotificationsNoneOutlinedIcon className="icon-margin"/>Notifications</ListItemText>
                </ListItem>
            </Link>

            <Link className="styling-link-dashboard" to='/user-dashboard/orders'>
                <ListItem button className="btn-list">
                    <ListItemText><DescriptionOutlinedIcon className="icon-margin"/>Orders</ListItemText> 
                </ListItem>
            </Link>

            <Link className="styling-link-dashboard" to='/user-dashboard/review'>
                <ListItem button className="btn-list">
                    <ListItemText><StarBorderIcon className="icon-margin"/>Review</ListItemText> 
                </ListItem>
            </Link>
            
            <Link className="styling-link-dashboard" to='/'>
                <ListItem button className="btn-list">
                    <ListItemText onClick={handleMenuLogout}><ExitToAppIcon className="icon-margin"/>Logout</ListItemText>
                </ListItem>
            </Link>
        </List>
    </div>




    //   <div style={{background:"white", opacity:0.8}}>
    //     <List disablePadding dense>
    //         <ListItem style={{width:200, height:50, borderBottom:"1px solid whitesmoke" }}>
    //             <ListItemText>Name Account</ListItemText>
    //         </ListItem>
    //         <ListItem button style={{width:200, borderLeft:"1px solid grey"}}>
    //             <ListItemText>Account</ListItemText>
    //         </ListItem>
    //         <ListItem button>
    //             <ListItemText>Notifications</ListItemText>
    //         </ListItem>
    //         <ListItem button>
    //             <ListItemText>Orders</ListItemText>
    //         </ListItem>
    //         <ListItem button>
    //             <ListItemText>Review</ListItemText>
    //         </ListItem>
    //         <ListItem button>
    //             <ListItemText>Logout</ListItemText>
    //         </ListItem>
    //     </List>
    //   </div>
    
  )
}

export default Dashboard
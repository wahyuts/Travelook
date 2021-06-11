import React, {useState, useEffect} from "react";
import UserService from '../../services/user.service'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import {Link} from 'react-router-dom';
import { deepOrange } from '@material-ui/core/colors';
import "./DetailPage.css";
import HeadNavDetail from "./HeadNavDetail";
import HeadNavDetail2 from "./HeadNavDetail2";
import FooterDetail from "./FooterDetail";
import DetailPageContent from "./DetailPageContent";
import DetailPageContent2 from "./DetailPageContent2";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function DetailPage() {

  const [getReview, setReview] = useState("");
  useEffect(() => {
    UserService.getCoba().then(
      (response) => {
        setReview(response.data.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setReview(_content);
      }
    );
  }, []);



  return (
    <div>
        <HeadNavDetail2/>
        {/* <HeadNavDetail /> */}
        <DetailPageContent />
        {/* <DetailPageContent2 /> */}
        {/* <DetailPageCard /> */}
        <FooterDetail />
    </div>
  );
}


{/* <div className="detail-top"> 
<p> Search result</p>
<p className="big"> > </p>
</div> */}


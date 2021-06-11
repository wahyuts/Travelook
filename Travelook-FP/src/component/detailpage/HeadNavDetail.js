import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from '@material-ui/core/IconButton';
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TextField from "@material-ui/core/TextField";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { Link } from "react-router-dom";
import { deepOrange } from "@material-ui/core/colors";
import "./HeadNavDetail.css";

function HeadNavDetail() {
  const avatarStyle = { backgroundColor: "orange" };
  const notify = { color: "black" };

  return (
    <div className="HeadNavDetail">
      {/* // <Link to="/movies" style={{ textDecoration: 'none', color:'white' }}>  */}
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none", paddingTop: 10 }}
      >
        <Toolbar className="cont-signin2">
          <img
            src="/images/logo2.png"
            alt="Travelook"
            className="travelook-logo2"
          />
          <div>
            <TextField
              className="search-top"
              id="outlined-basic"
              label="Start your search"
              variant="filled"
              style={{ marginLeft: 200 }}
            />
            <img
              src="/images/search.png"
              alt="SearchBox"
              style={{ width: 55 }}
            />
          </div>
          <li className="notify-detail">
            <NotificationsRoundedIcon style={notify} />
          </li>
          {/* <li className="push"><NotificationsIcon color="primary"/></li> */}
          <li>
            <Avatar style={avatarStyle}>RS</Avatar>
          </li>
        </Toolbar>
      </AppBar>
   
      
    </div>
  );
}

export default HeadNavDetail;

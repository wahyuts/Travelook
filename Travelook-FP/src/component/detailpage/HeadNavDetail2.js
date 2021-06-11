import React, {useEffect, useState} from 'react';
import UserService from "../../services/user.service";

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';

// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DescriptionIcon from '@material-ui/icons/Description';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import OnOffModal from '../store/OnOffModal';
// import { useDispatch, useSelector } from "react-redux";

import {Link} from 'react-router-dom';
import { logout } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



import './HeadNavDetail.css'

// import './HeadNav.css'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      
    },
  },

  textAccCircle2: {
    paddingTop:4, 
    fontSize:13,
    color:"black",
    [theme.breakpoints.up("xl")]: {
      paddingBottom:9, 
      fontSize:24,
      color:"black"
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [getOneUserDatax, setOneUserDatax] = useState("")
  const [geLastName, setGetLastName] = useState("")


    useEffect(() => {
        UserService.getOneUserData().then(
          (response) => {
            setOneUserDatax(response.data.data.first_name);
            setGetLastName(response.data.data.last_name);
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
              setOneUserDatax(_content);
          }
          
        );

      }, []);

      // console.log(getOneUserDatax);


  
  // const {isSignIn, ClickSignInChangeHeadNav} = OnOffModal();
  const { isLoggedIn } = useSelector(state => state.redAuthSignInRegis);
  const { user } = useSelector(state => state.redAuthSignInRegis);
  const dispatch = useDispatch();

  // console.log("SUDAH LOGIN", isLoggedIn)

  // console.log(user)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuLogout = () => {
    // logout();
    dispatch(logout());
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    
      <Link to="/user-dashboard/my-account" style={{ textDecoration: 'none', color:'black' }} >
          <MenuItem><AccountBoxIcon className="icon-margin"/>My account</MenuItem>
      </Link>    
      {/* <MenuItem onClick={handleMenuClose}><NotificationsIcon className="icon-margin" />Notifications</MenuItem> */}
      <Link to="/user-dashboard/orders" style={{ textDecoration: 'none', color:'black' }} >
          <MenuItem onClick={handleMenuClose}><DescriptionIcon className="icon-margin" />Order</MenuItem>
      </Link>
      <Link to="/user-dashboard/review" style={{ textDecoration: 'none', color:'black' }} >
          <MenuItem onClick={handleMenuClose}><StarBorderIcon className="icon-margin"/>Review</MenuItem>
      </Link>
          <MenuItem onClick={handleMenuLogout}><ExitToAppIcon className="icon-margin"/>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>

      {/* <AppBar position="static" style={{backgroundColor: "red"}}> */}

    <div >

    <AppBar position="static" style={{background: "white", boxShadow: "none"}}>

      {/* <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}> */}
        <Toolbar className="cont-signin2">
            {/* <img src="/images/Travelook-Black-Font.png" alt="Travelook" className="travelook-logo2"/> */}
            <Link to = "/">
                <img src="/images/Travelook-Logo.png" alt="Travelook" className="travelook-logo2"/>
            </Link>
            

            {/* <div style={{marginLeft: 50}}>
                <img src="/images/search.png" alt="SearchBox" style={{width: 45, height:30, marginBottom:4}} />
                <input className="searchBoxStyle" type="search" placeholder="Start your search"/>
            </div> */}

            {
              isLoggedIn ?
           
          // {/* <IconButton
          //   edge="start"
          //   className={classes.menuButton}
          //   color="inherit"
          //   aria-label="open drawer"
          // >
          //   <MenuIcon />
          // </IconButton> */}

          // {/* <Typography className={classes.title} variant="h6" noWrap>
          //   Material-UI
          // </Typography> */}

          // {/* <div className={classes.search}>
          //   <div className={classes.searchIcon}>
          //     <SearchIcon />
          //   </div>
          //   <InputBase
          //     placeholder="Search…"
          //     classes={{
          //       root: classes.inputRoot,
          //       input: classes.inputInput,
          //     }}
          //     inputProps={{ 'aria-label': 'search' }}
          //   />
          // </div> */}
            <div className="push2"> 

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton aria-label="show 17 new notifications" color="black">
              {/* <Badge badgeContent={17} color="secondary"> */}
                <Link to="/user-dashboard/notifications" style={{ marginBottom:7.7,textDecoration: 'none', color:'black' }} >
                    <NotificationsIcon />
                </Link>
              {/* </Badge> */}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <li className={classes.textAccCircle2}><AccountCircle style={{color:"black"}} /> {getOneUserDatax} {geLastName}</li>
            {/* <li><AccountCircle /> User Name</li> */}
              {/* <AccountCircle /> */}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          </div> 
           : 
           <div className="after">
           <Link to="/user-signin" style={{ textDecoration: 'none', color:'black' }}><li className="push"><AccountCircle /> Log In</li></Link>
           <Link to="/user-signup" style={{ textDecoration: 'none', color:'black' }}> <button className="button-signin2">Sign Up Free <ArrowForwardIcon/></button> </Link>
          </div>
                }
        </Toolbar>
      </AppBar>

      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
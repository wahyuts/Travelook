import React, {useEffect, useState} from 'react';
import UserService from "../../services/user.service";

import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
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




import './HeadNav.css'

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

  textAccCircle: {
    paddingTop:0, 
    fontSize:13,
    [theme.breakpoints.up("xl")]: {
      paddingBottom:9, 
      fontSize:24,
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function PrimarySearchAppBar() {

  const [getOneUserDatax, setOneUserDatax] = useState("")
  const [geLastName, setGetLastName] = useState("")

    useEffect(() => {
        UserService.getOneUserData().then(
          (response) => {
            // UNTUK NGECEK response.data.data
            //******************************* */
            setOneUserDatax(response.data.data.first_name);
            setGetLastName(response.data.data.last_name);

          },
          // (error) => {
          //   const _content =
          //     (error.response &&
          //       error.response.data &&
          //       error.response.data.message) ||
          //     error.message ||
          //     error.toString();
    
          //     setOneUserDatax(_content);
          // }
          
        ).catch((error)=> { 
          const _content =
           (error.response &&
             error.response.data &&
             error.response.data.message) ||
           error.message ||
           error.toString();
 
           setOneUserDatax(_content);
          });

      }, []);

      // console.log(getOneUserDatax);
  
  const {isSignIn, ClickSignInChangeHeadNav} = OnOffModal();
  const { isLoggedIn } = useSelector(state => state.redAuthSignInRegis);
  const { user } = useSelector(state => state.redAuthSignInRegis);
  const dispatch = useDispatch();

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
    window.location.reload();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (

    // <StyledMenu
    //     id="customized-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   ></StyledMenu>

    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ 
          vertical: 'bottom', 
          horizontal: 'left' }}

      // anchorEl={anchorEl}
      // anchorOrigin={{ 
      //   vertical: 'bottom', 
      //   horizontal: 'right' }}
      // id={menuId}
      // keepMounted
      // transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      // open={isMenuOpen}
      // onClose={handleMenuClose}
    >
    
      <Link to="/user-dashboard/my-account" style={{ textDecoration: 'none', color:'black' }} >
          <StyledMenuItem><AccountBoxIcon className="icon-margin"/>My account</StyledMenuItem>
      </Link>
      {/* <MenuItem onClick={handleMenuClose}><NotificationsIcon className="icon-margin" />Notifications</MenuItem> */}
      <Link to="/user-dashboard/orders" style={{ textDecoration: 'none', color:'black' }} >
          <StyledMenuItem onClick={handleMenuClose}><DescriptionIcon className="icon-margin" />Order</StyledMenuItem>
      </Link>
      <Link to="/user-dashboard/review" style={{ textDecoration: 'none', color:'black' }} >
          <StyledMenuItem onClick={handleMenuClose}><StarBorderIcon className="icon-margin"/>Review</StyledMenuItem>
      </Link>

          <StyledMenuItem onClick={handleMenuLogout}><ExitToAppIcon className="icon-margin"/>LogOut</StyledMenuItem>
    
    </StyledMenu>
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
            <Link to="/user-dashboard/notifications" style={{ textDecoration: 'none', color:'black' }} >
                <NotificationsIcon />
            </Link>
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

    <div style={{backgroundColor: "#1E1E1E"}}>

      <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}>
        <Toolbar className="cont-signin2">
            <img src="/images/Travelook-WhiteLogo.png" alt="Travelook" className="travelook-logo3"/>
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
            <IconButton aria-label="show 17 new notifications" color="inherit">
              {/* <Badge badgeContent={17} color="secondary"> */}
                <Link to="/user-dashboard/notifications" style={{ marginBottom:7.7,textDecoration: 'none', color:'white' }} >
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

              // aria-controls="customized-menu"
              variant="contained"
            >
            <li className={classes.textAccCircle}><AccountCircle /> {getOneUserDatax} {geLastName}</li>
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
           {/* <Link to="/under-construction" style={{ textDecoration: 'none', color:'white' }}><li className="push"><AccountCircle /> Log In</li></Link> */}
           <Link to="/user-signin" style={{ textDecoration: 'none', color:'white' }}><li className="push"><AccountCircle /> Log In</li></Link>
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

import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import CheckInDatePicker from "../homepage/CheckInDatePicker";
import CheckOutDatePicker from "../homepage/CheckOutDatePicker";
import GuestPicker2 from './GuestPicker2';
import { makeStyles } from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';

import ReplayIcon from "@material-ui/icons/Replay";
import CancelIcon from "@material-ui/icons/Cancel";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../../actions/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import NotifErrorBooking from "./NotifErrorBooking";


const useStyles = makeStyles((theme) => ({
// const styles = {
  card: {
    minWidth: 375,
    [theme.breakpoints.down('lg')]: {
      minWidth: 200
    }
    // minWidth: 375,
    // minHeight: 475,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  booknow: {
    marginLeft: 21, marginBottom: 20, width: 302, backgroundColor: "#1e1e1e", color: "white",
    [theme.breakpoints.down('lg')]: {
      marginLeft: 3, marginBottom: 20, width: 235, backgroundColor: "#1e1e1e", color: "white",
      // marginLeft: 3, marginBottom: 20, width: 235, backgroundColor: "#1e1e1e", color: "white",

    },
  },

  gueststyle:{
    paddingLeft: 21, width: 250, 
    [theme.breakpoints.up('xl')]: {
      width: 250,

      paddingLeft: 21, 
      paddingRight: 2, 

      // width: 235,
    },
    [theme.breakpoints.down('lg')]: {
      width: 250,

      paddingLeft: 0, 
      paddingRight: 2, 

      // width: 235,
    },
  },

  textLabelCard:{
    fontSize: 13, paddingLeft: 25, 
    [theme.breakpoints.down('lg')]: {
      fontSize: 13, paddingLeft: 10,
    },
  },

  textLabelCard2:{
    fontSize: 13, paddingLeft: 25, paddingBottom:10,
    [theme.breakpoints.down('lg')]: {
      fontSize: 13, paddingLeft: 10, paddingBottom:10
    },
  },

  textIDR:{
    fontSize: 13, paddingLeft: 170, 
    [theme.breakpoints.down('lg')]: {
      fontSize: 12, paddingLeft: 81,
    },
  },

  textIDRTotal:{
    fontSize:12,marginRight:3,marginLeft:145,
    [theme.breakpoints.down('lg')]: {
      fontSize:12,marginLeft:100,marginRight:10
    },
  },
  textIDRNights2:{
    fontSize:12,marginRight:3,marginLeft:90,
    [theme.breakpoints.down('lg')]: {
      fontSize:12,marginRight:3,marginLeft:35
    },
  },
  textIDRNights3:{
    fontSize:12,marginRight:3,marginLeft:110,
    [theme.breakpoints.down('lg')]: {
      fontSize:12,marginLeft:52,marginRight:5
    },
  },
  textIDRNights5:{
    display: 'flex',marginRight:15,
    [theme.breakpoints.down('lg')]: {
      display: 'flex',marginRight:15
    },
  },
  textIDRNights:{
     display:"flex", fontSize: 13, paddingLeft: 50, 
    [theme.breakpoints.down('lg')]: {
      display:"flex", fontSize: 10, paddingLeft: 5,
    },
  },
  textPrice:{
    fontSize:12,
   [theme.breakpoints.down('lg')]: {
    fontSize:12
   },
 },
 flexyy:{
  display: "flex",
 [theme.breakpoints.down('lg')]: {
  display: "flex", justifyContent:"space-between",
 },
},

  marginVert:{
    color: "#898B8F", paddingLeft: 140, paddingRight:10, 
    [theme.breakpoints.down('lg')]: {
      color: "#898B8F", paddingLeft:85, paddingRight:0, 
    },
  },
  marginCardPrice:{
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: 30,
    fontSize:13,
    color: "grey",
    [theme.breakpoints.down('lg')]: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: 0,
      fontSize:13,
      color: "grey", 
    },
  }


}));

function DetailPageCard({pricePerNight}) {

  const { getCekin } = useSelector(state => state.redCekin);
  const { getCheckOutDate } = useSelector(state => state.redCheckOutDate);
  const { getTotalPrice } = useSelector(state => state.redTotalPrice);
  const { isLoggedIn } = useSelector(state => state.redAuthSignInRegis);


  const dispatch = useDispatch();


  // console.log("NAH INI BARU CEKIN",getCekin )
  // console.log("CEKOUT DUNK",getCheckOutDate )


  const [cekinDate, setCekinDate] = useState ("")
  const [cekoutDate, setCekoutDate] = useState ("")
  const [counterDay, setCounterDay] = useState ([])
  const [serviceFee, setServiceFee] = useState ([250000])
  const [prxNights, setPrxNights] = useState ([])

  const notify = () => toast.error( <p style={{fontSize:16, paddingTop:15}}><ErrorOutlineIcon style={{marginBottom:4}}/> Please Login before booking !</p>,{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,

  });

  useEffect (() => {
    let dateCheckIn = new Date(getCekin)
    let dateCheckOut = new Date(getCheckOutDate)
    let jasaService = 250000
    setCekinDate(dateCheckIn)
    setCekoutDate(dateCheckOut)

    // To calculate the time difference of two dates
    let Difference_In_Time = dateCheckOut.getTime() - dateCheckIn.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    setCounterDay(Difference_In_Days)
    setPrxNights(Difference_In_Days * pricePerNight)
    dispatch(setTotalPrice(Difference_In_Days * pricePerNight + jasaService))
    
  }, [getCekin,getCheckOutDate,pricePerNight,]);

    // console.log("tanggal cekin", cekinDate)
    // console.log("tanggal cekout", cekoutDate)
    // console.log("NGINEP BERAPA HARI ?", counterDay)
    // console.log("coba kaliin", prxNights)
    // console.log("Total Priceeeee", getTotalPrice)


    // console.log("cekin datebaoyo", dateCheckIn)
    // console.log("cekout datebaoyo", dateCheckOut)

 


// function DetailPageCard(props) {
  const classes = useStyles();
  // const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonWithoutLogin = () => {
    setNotifyError({
      isOpen: true,
      message: `Please Login before booking !`,
      })
  
    // notify()
    // alert("Eits... login dulu baru bisa booking")
  }

  const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

  const closeNotifyError = () => {
    setNotifyError({
      isOpen: false,
      message: '',
    })
  };

  const bookingCondition = () => {
    if (cekoutDate > cekinDate){
      goToCheckOut();
    }else{
      setNotifyError({
        isOpen: true,
        message: `Check out date Can't be earlier than Check In date !`,
        })
    }
  }

  const history = useHistory();
  const goToCheckOut = () => history.push("/check-out");
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography>
            <div
              className={classes.marginCardPrice}
              // style={{
              //   display: "flex",
              //   justifyContent: "flex-start",
              //   fontSize:13,
              //   color: "grey",
              // }}
            >
              {/* <b style={{ color: "#199946" }}> IDR 500.000 &nbsp; </b> / night{" "} */}

              {/* <p style={{ color: "#199946" }}>
                {`IDR ${pricePerNight}`} &nbsp; <b> / night </b>{" "}
              </p>  */}

              <b style={{ color: "#199946" }}> {`IDR ${pricePerNight}`} &nbsp; </b> 
              <b style={{marginRight:5}}> / {" "} </b>
              <b> night </b>

              {/* <b style={{ color: "#199946" }}> IDR 500.000 &nbsp; </b> / night{" "} */}
              {/* <p style={{ color: "#898B8F", fontSize: "16px", border: "1px solid #E1E1E1", }}> On Process </p> */}
              {/* <p style={{ color: "#199946", fontSize: "16px", border: "1px solid #F4FCF1, 100%", }}> Confirmed </p> */}
              
              {/* <div className={classes.marginVert}>
                <MoreVertIcon
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                />
              </div> */}

            </div>
          </Typography>
          {/* <div className="coba">  */}
          {/* <div className="cover-jb6 lebarFull">
              <div className="wth">
                <CheckInDatePicker />
              </div>

              <div className="wth">
                <CheckOutDatePicker />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: 13, paddingLeft: 16 }}>
                2 x 500.000 (12 nights)
              </p>
              <p style={{ fontSize: 13, paddingLeft: 90 }}> IDR 12.000.000 </p>
            </div> */}
          {/* </div> */}
          <CheckInDatePicker />
          <CheckOutDatePicker />
          {/* <CheckOutDatePicker /> */}

          {/* <div style={{paddingLeft: 120}}> */}
          <div className={classes.gueststyle}>
          <GuestPicker2/>
          {/* <GuestPicker /> */}
          </div>

          {/* <BorderCard ></BorderCard> 
          <BorderCard ></BorderCard>  */}
          {/* <BorderCard ></BorderCard> 
          {/* <TextField></TextField> */}
          {/* <BorderCard ></BorderCard>  */}
          {/* <BorderCard ></BorderCard>  
          <BorderCard ></BorderCard> 
          
          <BorderCard ></BorderCard>  
          <BorderCard ></BorderCard>  */}
          <div>
          {
            isLoggedIn ? 
            // <Link to="/check-out" style={{ textDecoration: 'none'}}>
              <Button
                size="large"
                onClick={bookingCondition}
                variant="contained"
                className={classes.booknow}
                style={{ backgroundColor: "#1e1e1e", color: "white"}}
              >
                Book Now
              </Button>
            // </Link>
          :
          
              <Button
                size="large"
                variant="contained"
                onClick={buttonWithoutLogin}
                className={classes.booknow}
                style={{ backgroundColor: "#1e1e1e", color: "white"}}
              >
                Book Now
              </Button>
          
          }
          </div>

          <Typography>
            <div className={classes.flexyy}>
                <div className={classes.textLabelCard2}>
                  {
                    cekoutDate > cekinDate
                    ?
                    <div>
                        <li>{`Price Room x ${counterDay}`}</li>
                        <li>Nights</li>
                    </div>
                    
                    :
                    <div>
                        <li>Price Room x 0</li>
                        <li>Nights</li>
                    </div>
                    
                  }
                  {/* <li>{`Price Room x ${counterDay}`}</li>
                  <li>Nights</li> */}
                </div>

                {/* <p className={classes.textLabelCard}>{`Price Room x ${counterDay} Nights`}</p> */}
                <div className={classes.textIDRNights}>
                  <p className={classes.textIDRNights2}> IDR </p>
                </div>
                <div className={classes.textIDRNights5}>
                  {
                    cekoutDate > cekinDate
                    ?
                    <p className={classes.textPrice}> {prxNights} </p>
                    :
                    <p className={classes.textPrice}> 0 </p>
                  }
                  {/* <p className={classes.textPrice}> {prxNights} </p> */}
                </div>
                
                {/* <p className={classes.textIDRNights}> {`IDR ${serviceFee}`} </p> */}
            </div>
          </Typography>
          <Typography>
            <div className={classes.flexyy}>
              <p className={classes.textLabelCard}>Service Fee</p>
              <div className={classes.textIDRNights}>
                <p className={classes.textIDRNights3}> IDR </p>
              </div>
              <div className={classes.textIDRNights5}>
                {
                  cekoutDate > cekinDate
                  ?
                  <p className={classes.textPrice}> {serviceFee} </p>
                  :
                  <p className={classes.textPrice}> 0 </p>
                }
                {/* <p className={classes.textPrice}> {serviceFee} </p> */}
              </div>
              
            </div>
          </Typography>
          <div>
            <hr></hr>
          </div>
          <Typography>
            <div className={classes.flexyy}>
              <p className={classes.textLabelCard}>Total</p>
              <div className={classes.textIDRNights}>
                <p className={classes.textIDRTotal}> IDR </p>
              </div>
              <div className={classes.textIDRNights5}>
                {
                  cekoutDate > cekinDate
                  ?
                  <p className={classes.textPrice}> {getTotalPrice} </p>
                  :
                  <p className={classes.textPrice}> 0 </p>
                }
                {/* <p className={classes.textPrice}> {getTotalPrice} </p> */}
              </div>
              {/* <div className={classes.textIDRNights}>
                <p className={classes.textIDRTotal}> IDR </p>
                <p style={{fontSize:12}}> {getTotalPrice} </p>
              </div> */}
              {/* <p className={classes.textIDRTotal}> {`IDR ${getTotalPrice}`} </p> */}
            </div>
          </Typography>

          {/* <BorderCard ></BorderCard>
          <BorderCard ></BorderCard>
          <BorderCard ></BorderCard>  */}
          {/* <BorderCard ></BorderCard>  */}
        </CardContent>
        {/* <CardActions> */}
        {/* <Button size= "large" variant="outlined" style={{marginLeft: 130, marginBottom: 20}}>Book Now</Button> */}
        {/* <Button size="small">Learn More</Button>
          <Button size="small">Learn More</Button>
          <Button size="small">Learn More</Button>
          <Button size="small">Learn More</Button> */}
        {/* </CardActions> */}
      </Card>

      <NotifErrorBooking
                      style={{marginTop:50}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ReplayIcon href="" />
          Reschedule
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CancelIcon href="" />
          Cancel
        </MenuItem>
      </Menu>
      <ToastContainer style={{textAlign:"center"}}></ToastContainer>


    </div>
  );
}

DetailPageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(DetailPageCard);

// export default withStyles(styles)(DetailPageCard);
// style={{color: '#199946', display: 'flex'}}

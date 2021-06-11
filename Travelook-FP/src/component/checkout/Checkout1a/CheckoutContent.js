import React, { useState, useEffect } from "react";
import "./Checkout1a.css";
import { MdAccountCircle, MdNotifications, MdReceipt } from "react-icons/md";
import CheckoutProgress from "../CheckoutProgress";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import EventIcon from "@material-ui/icons/Event";
import TodayIcon from "@material-ui/icons/Today";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";
import CheckoutNav from "../CheckoutNav";
import UserService from "../../../services/user.service";
import { useSelector, useDispatch } from "react-redux";
import { setCekin, setOnlyIdHotel, setOnlyGuest, setOrderId } from '../../../actions/auth';
import { setCheckOutDate } from '../../../actions/auth';
import authHeader from "../../../services/auth-header";

import Notification from "./NotifSuccess1";
import NotifError from "./NotifError";

// setOnlyIdHotel

import qs from 'qs'
import axios from "axios";

import { date } from "date-fns/locale/af";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function CheckoutContent() {
  const useStyles = makeStyles((theme) => ({
    paddingCekBoxConnectRoom: {
      paddingLeft: 40,

      [theme.breakpoints.down("lg")]: {
        paddingLeft: 230,
      },
    },
    paddingCekBoxNonSmoking: {
      paddingRight: 40,

      [theme.breakpoints.down("lg")]: {
        paddingRight: 230,
      },
    },
    paddingCekBoxBedType: {
      paddingLeft: 40,

      [theme.breakpoints.down("lg")]: {
        // paddingLeft: 230,
        marginLeft: 230,
      },
    },

    paddingCekBoxCheckOut: {
      paddingLeft: 40,

      [theme.breakpoints.down("lg")]: {
        paddingLeft: 242,
      },
    },

    paddingCekBoxHighFloor: {
      paddingRight: 320,

      [theme.breakpoints.down("lg")]: {
        paddingRight: 255,
      },
    },

    paddingCekBoxOthers: {
      paddingLeft: 0,

      [theme.breakpoints.down("lg")]: {
        paddingLeft: 98,
      },
    },

    btnContinuePayment: {
      color: "white",

      [theme.breakpoints.down("lg")]: {
        height: 40,
        fontSize: 12,
        color: "white",
      },
    },
  }));

  const classes = useStyles();

  const history = useHistory();
  const nextPayment = () => history.push("/check-out/checkout1b");

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [accDetail, setAccDetail] = useState({});
  const [accFirstName, setAccFirstName] = useState("");
  const [accLastName, setAccLastName] = useState("");
  const [accNumberGuest, setNumberGuest] = useState("");
  const [accEmail, setAccEmail] = useState("");
  const [accPhoneNumber, setAccPhoneNumber] = useState("");
  const [tokenString, setTokenString] = useState("")

  const dispatch = useDispatch();

  // buat nge post data tanggal tetep pake getCekin dan getCheckOutDate
  const { getCekin } = useSelector((state) => state.redCekin);
  const { getCheckOutDate } = useSelector((state) => state.redCheckOutDate);
  const { getOnlyGuest } = useSelector((state) => state.redOnlyGuest);
  const { getOnlyIdHotel } = useSelector(state => state.redOnlyID || []);

  //ini buat test doang,..penerapan sesungguhnya ini dipake di next page
  // const { getOrderId } = useSelector((state) => state.redGetOrderId);
 //*********************************************** */


  // const [ci,setCi] = useState(new Date(`${getCekin}`))
  const [guest,setGuest] = useState([])

  //********************************************************************* */

  useEffect(() => {
    // setCi(localStorage.getItem('CheckIN-Date'));
    dispatch(setCekin(localStorage.getItem('CheckIN-Date')))
    setFullDateCekin(new Date(getCekin))

    dispatch(setCheckOutDate(localStorage.getItem('CheckOutDate')));
    setFullDateCekout(new Date(getCheckOutDate))

    dispatch(setOnlyIdHotel(localStorage.getItem('idHotel')));

    dispatch(setOnlyGuest(localStorage.getItem('guest')));


    setTokenString(localStorage.getItem('token'))

    // baris yang ini kurang dispatch guest 
    // setGuest(getOnlyGuest)

    
  }, [getCekin,getCheckOutDate,getOnlyGuest,localStorage.getItem('token')]);

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  // proses convert cth tgl 2021/6/23 ke tgl ori nya yang pake waktu
  const [fullDateCekin, setFullDateCekin] = useState(new Date(`${getCekin}`))
  const [fullDateCekout, setFullDateCekout] = useState(new Date(`${getCheckOutDate}`))

  // Full Cekin Thu Jun 03 2021 00:00:00 GMT+0700  ini lengkap  pake waktu alias ori nya
  // console.log("Full Cekin", fullDateCekin )

  //cth display tgl string  Thursday, June 3, 2021   syarat var option dibutuhkan
  // console.log("cccc",fullDateCekin.toLocaleDateString("en-US", options));

  //cth display tgl sting  thu, 3-may-2021
  // console.log("ffff",fullDateCekin.toLocaleDateString("en-US", { weekday: 'short' })+ ", "+ fullDateCekin.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ fullDateCekin.toLocaleDateString("en-US", { month: 'short' })+ "-" + fullDateCekin.toLocaleDateString("en-US", { year: 'numeric' }));


  // dibawah ini tgl yang dipake buat display BUKAN BUAT NGE POST !
  let trueCekin = fullDateCekin.toLocaleDateString("en-US", { weekday: 'short' })+ ", "+ fullDateCekin.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ fullDateCekin.toLocaleDateString("en-US", { month: 'short' })+ "-" + fullDateCekin.toLocaleDateString("en-US", { year: 'numeric' })
  let trueCekout = fullDateCekout.toLocaleDateString("en-US", { weekday: 'short' })+ ", "+ fullDateCekout.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ fullDateCekout.toLocaleDateString("en-US", { month: 'short' })+ "-" + fullDateCekout.toLocaleDateString("en-US", { year: 'numeric' })


  const API_URL = "https://travelook.gabatch11.my.id/";
  // const { getOnlyIdHotel } = useSelector(state => state.redOnlyID || []);
  // console.log("SUPPPP ID", getOnlyIdHotel)
  let idHotel = localStorage.getItem("idHotel");


  const [notify, setNotify] = useState({isOpen:false, message:'', type:''})

  const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

  const closeNotify = () => {
    setNotify({
      isOpen: false,
      message: '',
    })
  };

  const closeNotifyError = () => {
    setNotifyError({
      isOpen: false,
      message: '',
    })
  };

  const errPhoneNumberNotify = () => {
    setNotifyError({
      isOpen: true,
      message: `Enter your phone number first !`,
      })
  }

  
  const bookHotel = () => {

    // let token = localStorage.getItem('token')
    const data = qs.stringify({ 
      start: `${getCekin}`,
      end: `${getCheckOutDate}`,
      firstName: `${accFirstName}`,
      lastName: `${accLastName}`,
      email: `${accEmail}`,
      phone: `${accPhoneNumber}`,
      number: `${getOnlyGuest}`
     });

    axios.post(API_URL + `reservation/room?id_room=${getOnlyIdHotel}`,data, {headers: authHeader()}) 
    .then(response => {
          if (response.status === 201 ){
            // console.log(JSON.stringify(response.data));
            dispatch(setOrderId (JSON.stringify(response.data.order_id)));
            localStorage.setItem('OrderID', response.data.order_id)
            setNotify({
            isOpen: true,
            message: `Your order have been list in order list !`,
            })
            setTimeout(function(){ nextPayment(); }, 3000) 
        }
        
      })  
        .catch((error) => {
          if(error. response. status === 401 ){
            setNotifyError({
              isOpen: true,
              message: `The date is already booked`,
              })
            console.log(error. response. data)
            console.log(error. response. status);
          } else if(error. response.data. message === "room occupancy is invalid"){
            setNotifyError({
              isOpen: true,
              message: `Exceed max guest in one room !`,
              })
            // console.log(error. response. data)
            // console.log(error. response. status);
            // console.log("ini error apaan yak ?",error. response. data.message);
          } else if (error. response. status === 400) {
            setNotifyError({
              isOpen: true,
              message: `24 hrs before booking date !`,
              })
          }

        });
    
  };


  useEffect(() => {
    UserService.getOneUserData()
      .then((response) => {
        // UNTUK NGECEK response.data.data
        //******************************* */
        setAccFirstName(response.data.data.first_name);
        setAccLastName(response.data.data.last_name);
        setAccEmail(response.data.data.email);
        // setNumberGuest((response.data.data.)
        if (response.data.data.phone_number === null) {
          setAccPhoneNumber("");
        } else {
          setAccPhoneNumber(response.data.data.phone_number);
        }
        // setAccPhoneNumber(response.data.data.phone_number);
      })
      .catch((error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setAccDetail(_content);
      });
  }, []);

  const onChangeFirstName = (e) => {
    const fn = e.target.value;
    setAccFirstName(fn);
    // console.log(email)

  };

  const onChangeLastName = (e) => {
    const ln = e.target.value;
    setAccLastName(ln);
    // console.log(email)

  };

  const onChangeEmail = (e) => {
    const em = e.target.value;
    setAccEmail(em);
    // console.log(email)

  };

  const onChangePhoneNumber = (e) => {
    const phone = e.target.value;
    setAccPhoneNumber(phone);
    // console.log(email)

  };

  const [dataHotel, setDataHotel] = useState([]);

  const API_URL2 = "https://travelook.gabatch11.my.id/room/detail/";
  useEffect(() => {
    return axios.get(API_URL2 + `${idHotel}`).then(
      // return axios.get(API_URL + `${getOnlyIdHotel}`).then(
      (response) => {
        setDataHotel(response.data.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setDataHotel(_content);
      }
    );
  }, []);



  return (
    <>
      <CheckoutNav />
      {/* {isDesktopOrLaptop && */}

      <div
        className="checkout1a"
        // style={{
        //   backgroundColor: "transparent",
        //   display: "flex",
        //   alignItems: "center",

        //   marginTop: "50px",
        //   paddingBottom: "100px",
        //   justifyContent: "center",
        // }}
      >

            
        <div className="checkoutborder-kiri">
          <div className="checkout-border1a">
            <div className="checkout-border-1a">
              <div className="checkout-border-margin">

                <div className="checkout-border-h3">
                <Notification
                      style={{marginTop:50}}
                      notify={notify}
                      closeNotify={closeNotify}
                      />
                  
                  <NotifError
                      style={{marginTop:50}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />
                  <h3> Guest Details</h3>
                </div>
                <div className="checkout-fill-in">
                  Fill in guest details below
                </div>
                <div>
                  <div className="content-fillin">
                    <TextField
                      id="outlined-basic"
                      label="FirstName"
                      variant="outlined"
                      onChange={onChangeFirstName}
                      value={accFirstName}
                      style={{
                        width: "50%",
                        marginRight: "30px",
                        marginLeft: "35px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="LastName"
                      variant="outlined"
                      onChange={onChangeLastName}
                      value={accLastName}
                      style={{ width: "50%", marginRight: "35px" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "10px 0px",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Mobile number"
                      value={accPhoneNumber}
                      variant="outlined"
                      onChange={onChangePhoneNumber}
                      className="textfield-1"
                      style={{
                        width: "50%",
                        marginRight: "30px",
                        marginLeft: "35px",
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      value={accEmail}
                      variant="outlined"
                      disabled
                      className="textfield-2"
                      style={{ width: "50%", marginRight: "35px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="checkout-border-2a">
                <div className="checkout-border-h3-b">
                  <h3> Special Request</h3>
                </div>
                <div className="checkout-fill-in">
                  Have a special request that makes you more comfortable? ask
                  here. Your request is subject{" "}
                  <p>to availability and additional fees may apply.</p>
                </div>

                <div>
                  <div className="checkbox-content-1">
                    <FormControlLabel
                      // className={classes.paddingCekBoxNonSmoking}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Non-Smoking-Rooms"
                    />
                    <FormControlLabel
                      // className={classes.paddingCekBoxConnectRoom}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Connection Rooms"
                    />
                  </div>

                  <div className="checkbox-content-2">
                    <FormControlLabel
                      // className={classes.paddingCekBoxHighFloor}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="High Floor"
                    />
                    <FormControlLabel
                      // className={classes.paddingCekBoxBedType}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Bed type"
                    />
                  </div>

                  <div className="checkbox-content-3">
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Check-in Time"
                    />
                    <FormControlLabel
                      // className={classes.paddingCekBoxCheckOut}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Check-out Time"
                    />
                  </div>

                  <div className="checkbox-content-4">
                    <FormControlLabel
                      className={classes.paddingCekBoxOthers}
                      control={
                        <GreenCheckbox
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label="Others"
                    />
                  </div>

                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      // label="Multiline"
                      multiline
                      rows={4}
                      label="Write your special request here"
                      // defaultValue="Write your special request here"
                      variant="outlined"
                      className="textbox-content"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="checkoutborder-kanan">
            <div className="checkout-border-kanan-1">
              <div className="checkout-border-kanan">
                <b>{dataHotel.name}</b>
                {/* <b>Cozy Apartment in center of Bandung</b> */}
              </div>
              <div className="checkout-border-kanan-grey">
                <div className="checkout-border-kanan-content-1">
                  <div>
                    <EventIcon style={{ marginRight: 7, marginLeft: 2 }} />
                    Check-in
                  </div>

                  <div>
                    <div className="checkout-border-kanan-content-2">
                      {trueCekin}
                      {/* {getCekin} */}
                    </div>
                    <div className="checkout-border-kanan-content-2">
                      from 12:00
                    </div>
                  </div>
                </div>

                <div className="checkout-border-kanan-content-3">
                  <div>
                    <EventIcon style={{ marginRight: 7 }} />
                    Check-out
                  </div>

                  <div>
                    <div className="checkout-border-kanan-content-4">
                      {trueCekout}
                      {/* {getCheckOutDate} */}
                    </div>
                    <div className="checkout-border-kanan-content-4">
                      before 12:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="checkout-border-kanan-top">
                <div className="checkout-border-kanan-content-5">
                  <div>
                    <PersonIcon style={{ marginRight: 7 }} />
                    Guest(s)
                  </div>
                  <div className="checkout-border-kanan-content-6">
                    {/* {guest} &nbsp; Person(s) */}
                    {getOnlyGuest} &nbsp; Person(s)
                  </div>
                </div>

                <div className="checkout-border-kanan-content-5">
                  <div>
                    <HomeIcon style={{ marginRight: 7 }} />
                    Facility
                  </div>

                  <div>
                    <div className="checkout-border-kanan-content-7 ">
                      <ul>
                        {/* <li style={{ listStyle: "disc" }}>1 bedroom</li> */}
                        <li style={{ listStyle: "disc" }}>
                          {dataHotel?.total_bathroom} bathroom
                        </li>
                        <li style={{ listStyle: "disc" }}>
                          {dataHotel?.total_bedrooms} bedroom
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="checkout-border-kanan-green">
                <a href="">
                  <div className="checkout-border-kanan-warna">
                    <DescriptionIcon style={{ marginRight: 7 }} />
                    Free cancelation
                  </div>
                </a>
              </div> */}

              {/* <div className="checkout-border-kanan-green">
                <a href="">
                  <div className="checkout-border-kanan-warna">
                    <DateRangeIcon style={{ marginRight: 7 }} />
                    Reschedule anytime
                  </div>
                </a>
              </div> */}

              <div className="checkout-border-kanan-green">
                {/* <Link
                  to="/check-out/checkout1b"
                  style={{ textDecoration: "none" }}
                > */}

                  {
                    accPhoneNumber !== ""
                    ?
                    <Button
                        size="large"
                        variant="outlined"
                        // onClick={bookingStep1}

                        onClick={bookHotel}
                        className={classes.btnContinuePayment}
                        // className="checkout-border-kanan-green-btn"
                        style={{
                          width: "100%",
                          // height: "50px",
                          backgroundColor: "#1e1e1e",
                          // color: "white",
                        }}
                      >
                          Continue to payment
                          <ArrowForwardIcon />
                    </Button>
                    :
                    <Button
                        size="large"
                        variant="outlined"
                        // onClick={bookingStep1}

                        onClick={errPhoneNumberNotify}
                        // disabled
                        className={classes.btnContinuePayment}
                        // className="checkout-border-kanan-green-btn"
                        style={{
                          width: "100%",
                          // height: "50px",
                          // color:"grey",
                          backgroundColor: "#1e1e1e",
                          // color: "white",
                        }}
                        >
                          Continue to payment
                          <ArrowForwardIcon />
                    </Button>
                  }

                {/* <Link
                  to="/check-out/checkout1b"
                  style={{ textDecoration: "none" }}
                >
                    <Button
                        size="large"
                        variant="outlined"
                        // onClick={bookingStep1}

                        onClick={bookHotel}
                        className={classes.btnContinuePayment}
                        // className="checkout-border-kanan-green-btn"
                        style={{
                          width: "100%",
                          // height: "50px",
                          backgroundColor: "#1e1e1e",
                          // color: "white",
                        }}
                      >
                          Continue to payment
                          <ArrowForwardIcon />
                    </Button>

                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutContent;

// DescriptionIcon
// DateRangeIcon

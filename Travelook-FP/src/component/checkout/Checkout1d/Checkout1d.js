import React, { useState, useEffect } from "react";
import "./Checkout1d.css";

import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import CheckoutCountDown from "./CheckoutCountDown";
import Countdown from "react-countdown";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, Redirect } from "react-router-dom";
import CheckoutNav from "../CheckoutNav";
import axios from "axios";
import dateFormat from 'dateformat';

import authHeader from "../../../services/auth-header";

// import DateRangeIcon from "@material-ui/icons/DateRange";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Checkout1d() {
  const [message, setMessage] = React.useState(false);
  const [accDetail, setAccDetail] = useState("");
  const [dataImage, setDataImage] = useState("");
  const [nama, setNama] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [dataCekIn, setDataCekIn] = useState("");
  const [dataCekOut, setCekOut] = useState("");
  const [guest, setGuest] = useState("");

  const [newDateCekIn, setNewDateCekIn] = useState("");
  const [newDataCekOut, setNewDateCekOut] = useState("");

  const API_URL = "https://travelook.gabatch11.my.id/";
  let orderID = localStorage.getItem("OrderID");
  useEffect(() => {
    axios
      .get(API_URL + `reservation/order?order_id=${orderID}`, {
        headers: authHeader(),
      })
      .then((response) => {
        // setListOrder(response.data);
        setAccDetail(response.data.data);
        setDataImage(response.data.data.rows[0].Room.Media[0].file_name);
        setNama(response.data.data.rows[0].Room.name);
        setLocation(response.data.data.rows[0].Room.location.city);
        setGuest(response.data.data.rows[0].guest_number);
        setState(response.data.data.rows[0].Room.location.state);
        setNewDateCekIn(response.data.data.rows[0].start_date)
        setNewDateCekOut(response.data.data.rows[0].end_date)
        // setAccFirstName(response.data.data.first_name);
        // setAccLastName(response.data.data.last_name);
        // setOldPassword(response.data.data.password);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
      });
  }, []);

  useEffect(() => {
    setDataCekIn(localStorage.getItem("CheckIN-Date"));
    setCekOut(localStorage.getItem("CheckOutDate"));
    setFullDateCekin(new Date(dataCekIn));
    setFullDateCekOut(new Date(dataCekOut));
  }, [
    localStorage.getItem("CheckIN-Date"),
    localStorage.getItem("CheckOutDate"),
  ]);

  const convertDateCekin = dateFormat(`${newDateCekIn}`, "ddd, dd mmm yyyy")
  const convertDateCekout = dateFormat(`${newDataCekOut}`, "ddd, dd mmm yyyy")


  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [fullDateCekin, setFullDateCekin] = useState(new Date(dataCekIn));
  const [fullDateCekOut, setFullDateCekOut] = useState(new Date(dataCekOut));

  let trueCekin =
    fullDateCekin.toLocaleDateString("en-US", { weekday: "short" }) +
    ", " +
    fullDateCekin.toLocaleDateString("en-US", { day: "numeric" }) +
    "-" +
    fullDateCekin.toLocaleDateString("en-US", { month: "short" }) +
    "-" +
    fullDateCekin.toLocaleDateString("en-US", { year: "numeric" });
  let trueCekout =
    fullDateCekOut.toLocaleDateString("en-US", { weekday: "short" }) +
    ", " +
    fullDateCekOut.toLocaleDateString("en-US", { day: "numeric" }) +
    "-" +
    fullDateCekOut.toLocaleDateString("en-US", { month: "short" }) +
    "-" +
    fullDateCekOut.toLocaleDateString("en-US", { year: "numeric" });

  // console.log(accDetail);
  // console.log(dataImage);
  // console.log(fullDateCekin);
  // console.log(fullDateCekOut);

  // console.log(trueCekin);
  // console.log(trueCekout);

  //   const [value, setValue] = React.useState("female");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <>
      <CheckoutNav />
      <div className="checkout1c">
        <div className="checkout1c-container">
          <div className="checkout1c-border">
            <div className="checkout1c-border-kiri">
              <div className="checkout1c-border-kiri-container">
                <img src="/images/logo1c.png" />
                <div className="checkout1c-border-kiri-select">
                  Your booking is waiting for admin confirmation.
                  <p>We will be send you an email after your booking have been approved</p>
                </div>

                <div className="checkout-countdown">
                  <a style={{color:"blue"}}>
                    <div>
                      <DescriptionIcon /> 1 file success uploaded
                    </div>
                  </a>
                </div>
                <div className="checkout1c-kanan-border2c-content-btn">
                  <Link to="/thanks-for-choose-us" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={() => setMessage(true)}
                      size="large"
                      variant="outlined"
                      className="checkout1d-kanan-border2d-content-btn-content"
                      style={{
                        // width: "100%",
                        // height: "50px",
                        backgroundColor: "#1e1e1e",
                        color: "white",
                      }}
                    >
                      Confirm payment
                      <ArrowForwardIcon />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="checkout1c-boxbawah-container">
                <div className="border-1c-hr">
                  <hr></hr>
                  <div className="checkout1c-boxbawah">
                    <div className="border-content1c-bawah">
                      <div className="border-content1c-bawah-image">
                        {" "}
                        <Snackbar
                          onClose={() => setMessage(false)}
                          open={message}
                          autoHideDuration={5000}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <Alert severity="success">
                            Your payment and booking has been sent!
                          </Alert>
                        </Snackbar>
                        <img
                          style={{ width: 250, height: 160, marginRight: 10 }}
                          src={`https://travelook.gabatch11.my.id/${dataImage}`}
                        />
                      </div>
                      <div className="border-content1c-bawah-contentborder1c">
                        {" "}
                        <div className="border-content1c-bawah-content-1c-atas">
                          <p>{orderID}</p>
                        </div>
                        <div className="border-content1c-bawah-content-1c-bawah">
                          <p>{nama}</p>
                        </div>
                        <div className="border-content1c-bawah-containercontent-1">
                          {" "}
                          <div className="border-content1c-bawah-content-1c-bawah1">
                            <DateRangeIcon />
                            {convertDateCekin} | {convertDateCekout}
                          </div>
                          <div className="border-content1c-bawah-content-1c-bawah2">
                            {/* <DateRangeIcon /> */}
                            <PersonIcon />{guest} Guest(s)
                            {/* Wed,  */}
                          </div>
                        </div>
                        <div className="border-content1c-bawah-content-1c-atas-2">
                          <p>{location} , {state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout1d;

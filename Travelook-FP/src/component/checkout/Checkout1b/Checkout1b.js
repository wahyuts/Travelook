import React, { useState, useEffect } from "react";
import "./Checkout1b.css";
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
import { Link, useHistory } from "react-router-dom";
import CheckoutNav from "../CheckoutNav";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  bookingHotel,
  setCekin,
  setOnlyIdHotel,
  setOnlyGuest,
  setOrderId,
} from "../../../actions/auth";

import { setCheckOutDate } from "../../../actions/auth";
import { useSelector, useDispatch } from "react-redux";
import authHeader from "../../../services/auth-header";

function Checkout1b() {
  const [valueRadio, setValueRadio] = React.useState("Pay With Bank Transfer");

  const handleChange = (event) => {
    setValueRadio(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    btnContinuePay: {
      color: "white",

      [theme.breakpoints.down("lg")]: {
        height: 40,
        fontSize: 12,
        color: "white",
        // marginBottom:500
      },
    },
  }));

  const classes = useStyles();

  const dispatch = useDispatch();

  const { getCekin } = useSelector((state) => state.redCekin);
  const { getCheckOutDate } = useSelector((state) => state.redCheckOutDate);
  const { getOnlyGuest } = useSelector((state) => state.redOnlyGuest);
  const { getOnlyIdHotel } = useSelector((state) => state.redOnlyID || []);
  const { getOrderId } = useSelector((state) => state.redGetOrderId || []);

  const history = useHistory();
  const nextPayment = () => history.push("/check-out/checkout1c");

  const reservationClick = () => {
    window.location.href = dataReservation;
  };

  const [tokenString, setTokenString] = useState("");

  const [dataHotel, setDataHotel] = useState([]);

  const API_URL2 = "https://travelook.gabatch11.my.id/room/detail/";
  useEffect(() => {
    return axios.get(API_URL2 + `${getOnlyIdHotel}`).then(
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

  const [dataReservation, setReservation] = useState([]);
  let orderId = localStorage.getItem("OrderID");

  const API_URL3 =
    "https://travelook.gabatch11.my.id/reservation/order?order_id=";
  useEffect(() => {
    return axios.get(API_URL3 + `${orderId}`, { headers: authHeader() }).then(
      // return axios.get(API_URL + `${getOnlyIdHotel}`).then(
      (response) => {
        setReservation(response.data.data.rows[0].url_confirmation);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setReservation(_content);
      }
    );
  }, []);

  useEffect(() => {
    // setCi(localStorage.getItem('CheckIN-Date'));
    dispatch(setCekin(localStorage.getItem("CheckIN-Date")));
    setFullDateCekin(new Date(getCekin));

    dispatch(setCheckOutDate(localStorage.getItem("CheckOutDate")));
    setFullDateCekout(new Date(getCheckOutDate));

    dispatch(setOnlyIdHotel(localStorage.getItem("idHotel")));

    dispatch(setOnlyGuest(localStorage.getItem("guest")));

    dispatch(setOrderId(localStorage.getItem("OrderID")));

    setTokenString(localStorage.getItem("token"));

    // baris yang ini kurang dispatch guest
    // setGuest(getOnlyGuest)
  }, [getCekin, getCheckOutDate, getOnlyGuest, localStorage.getItem("token")]);

  

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // proses convert cth tgl 2021/6/23 ke tgl ori nya yang pake waktu
  const [fullDateCekin, setFullDateCekin] = useState(new Date(`${getCekin}`));
  const [fullDateCekout, setFullDateCekout] = useState(
    new Date(`${getCheckOutDate}`)
  );

  // dibawah ini tgl yang dipake buat display BUKAN BUAT NGE POST ! nge POST pake getCekin dan getCheckOutDate
  let trueCekin =
    fullDateCekin.toLocaleDateString("en-US", { weekday: "short" }) +
    ", " +
    fullDateCekin.toLocaleDateString("en-US", { day: "numeric" }) +
    "-" +
    fullDateCekin.toLocaleDateString("en-US", { month: "short" }) +
    "-" +
    fullDateCekin.toLocaleDateString("en-US", { year: "numeric" });
  let trueCekout =
    fullDateCekout.toLocaleDateString("en-US", { weekday: "short" }) +
    ", " +
    fullDateCekout.toLocaleDateString("en-US", { day: "numeric" }) +
    "-" +
    fullDateCekout.toLocaleDateString("en-US", { month: "short" }) +
    "-" +
    fullDateCekout.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <>
      <CheckoutNav />
      <div className="checkout1b">
        <div className="checkout1b-container">
          <div className="checkout1b-border">
            <div className="checkout1b-border-kiri">
              <div className="checkout1b-border-kiri-container">
                <h3> Payment Method</h3>
                <div className="checkout1b-border-kiri-select">
                  Select one of this method
                </div>
                <div>
                  <div className="checkout1b-method-payment">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={valueRadio}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Pay With Bank Transfer"
                        control={<Radio />}
                        // label="Bank Transfer - BCA a.n PT Jalan Jalan Santai 4273987217"
                        label="Pay With Bank Transfer ( Need upload payment receive)"
                      />
                      <FormControlLabel
                        value="Pay With Virtual Account"
                        control={<Radio />}
                        label="Pay With Virtual Account"
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout1b-kanan-container">
            <div className="checkout1b-kanan-border">
              <div className="checkout1b-kanan-cozy">
                <b>{dataHotel.name}</b>
                {/* <b>Cozy Apartment in center of Bandung</b> */}
              </div>
              <div className="checkout1b-kanan-border1b">
                <div className="checkout1b-kanan-content-1">
                  <div>
                    <EventIcon style={{ marginRight: 7 }} />
                    Check-in
                  </div>

                  <div>
                    <div className="checkout1b-kanan-content-2">
                      {trueCekin}
                    </div>
                    <div className="checkout1b-kanan-content-2">from 12:00</div>
                  </div>
                </div>

                <div className="checkout1b-kanan-border2b">
                  <div>
                    <EventIcon style={{ marginRight: 7 }} />
                    Check-out
                  </div>

                  <div>
                    <div className="checkout1b-kanan-border2b-content">
                      {trueCekout}
                    </div>
                    <div className="checkout1b-kanan-border2b-content">
                      before 12:00
                    </div>
                  </div>
                </div>

                {/* <div className="checkout1b-kanan-content-1">
                  <div>
                    <EventIcon />
                    Check-in
                  </div>
                  <div className="checkout1b-kanan-content-2">
                    Sun, 24 Apr 2021, from 12:00
                  </div>
                </div>

                <div className="checkout1b-kanan-border2b">
                  <div>
                    <HomeIcon />
                    Check-out
                  </div>
                  <div className="checkout1b-kanan-border2b-content">
                    Thu, 5 May 2021, before 12:00
                  </div>
                </div> */}
              </div>

              <div className="border-top-content-checkout">
                <div className="checkout1b-kanan-border2b-content-1">
                  <div>
                    <PersonIcon style={{ marginRight: 7 }} />
                    Guest(s)
                  </div>
                  <div className="checkout1b-kanan-border2b-content-2">
                    2 persons(s)
                  </div>
                </div>

                <div className="checkout1b-kanan-border2b-content-1">
                  <div>
                    <HomeIcon style={{ marginRight: 7 }} />
                    Facility
                  </div>

                  <div>
                    <div className="checkout1b-kanan-border2b-content-4 ">
                      <ul>
                        <li style={{ listStyle: "disc" }}>1 bedroom</li>
                        <li style={{ listStyle: "disc" }}>1 bathroom</li>
                        <li style={{ listStyle: "disc" }}>1 bedroom</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="checkout1b-kanan-border2b-content-1">
                  <div>
                    <PersonIcon />
                    Guest(s)
                  </div>
                  <div className="checkout1b-kanan-border2b-content-2">
                    2 persons(s)
                  </div>
                </div>
                <div className="checkout1b-kanan-border2b-content-3">
                  <div>
                    <HomeIcon />
                    Facility
                  </div>
                  <div className="checkout1b-kanan-border2b-content-4">
                    1 bedroom - 1 bed - 1bath
                  </div>
                </div> */}
              </div>

              {/* <div className="checkout1b-kanan-border2b-content-5">
                <a href="">
                  <div className="checkout1b-kanan-border2b-content-5-warna">
                    <DescriptionIcon style={{marginRight:7}}/>
                    Free cancelation
                  </div>
                </a>
              </div> */}

              {/* <div className="checkout1b-kanan-border2b-content-5">
                <a href="">
                  <div className="checkout1b-kanan-border2b-content-5-warna">
                    <DateRangeIcon style={{marginRight:7}}/>
                    Reschedule anytime
                  </div>
                </a>
              </div> */}

              <div className="checkout1b-kanan-border2b-top-bottom">
                <p className="text-price-detail">
                  <b>Price Detail</b>
                </p>

                <div className="divPriceDetail">
                  <div className="content-room-night-price">
                    <div>
                      <li>Room x</li>
                      <li>Night x Price</li>
                    </div>
                  </div>
                  <p className="idr-room-night-price">IDR 12.250.000</p>
                </div>

                <div className="divPriceDetail">
                  <p>Service Fee</p>
                  <p className="idr-service-fee">IDR 250.000</p>
                </div>

                {/* <div className="checkout1b-kanan-border2b-content-6">
                  Price Details
                </div>
              
                <div className="checkout1b-kanan-border2b-content-3">
                  <div>Service Fee</div>
                  <div className="checkout1b-kanan-border2b-content-7">
                    IDR 250.000
                  </div>
                </div>

                <div className="checkout1b-kanan-border2b-content-3">
                  <div>Room x Night x Price</div>
                  <div className="checkout1b-kanan-border2b-content-8">
                    <p>IDR 12.250.000</p> 
                  </div>
                </div> */}
              </div>

              <div className="divPriceSuperTotal">
                <p>
                  <b>Total</b>
                </p>
                <p className="idr-super-total">IDR 12.500.000</p>
              </div>

              {/* <div>
                <div className="checkout1b-kanan-border2b-content-3">
                  <div>Total</div>
                  <div className="checkout1b-kanan-border2b-content-8">
                      <p>IDR 12.250.000</p> 
                  </div>
                </div>
              </div> */}

              <div className="trans-with-bank">
                {
                  valueRadio === "Pay With Virtual Account"
                  ?
                  <a href={`${dataReservation}`} style={{textDecoration:'none'}} >
                  {/* <a href={`${dataReservation}`} style={{textDecoration:'none'}} target="_blank" > */}
                    {" "}
                    Pay with virtual account
                  </a>
                  :
                  <a style={{textDecoration:'none', color:"grey", cursor:"pointer"}} target="_blank" >
                    {" "}
                    Pay with virtual account
                  </a>
                }
                {/* <a href={`${dataReservation}`} style={{textDecoration:'none'}} target="_blank" >
                  {" "}
                  Pay with virtual account
                </a> */}
              </div>

              {/* <div className="trans-with-bank">
                <Link to="/check-out/checkout1c">
                <a>
                  {" "}
                  Upload Reciept
                </a>
                </Link>
              </div> */}

              <div className="checkout1b-kanan-border2b-content-btn">

                {
                  valueRadio === "Pay With Bank Transfer"
                  ?
                  <Link
                      to="/check-out/checkout1c"
                      style={{ textDecoration: "none" }}
                    >

                      <Button
                        size="large"
                        variant="outlined"
                        className={classes.btnContinuePay}
                        style={{
                          width: "100%",
                          backgroundColor: "#1e1e1e",
                        }}
                      >
                        Pay
                        <ArrowForwardIcon />
                      </Button>
                  </Link>
                  :
                  <Button
                        size="large"
                        variant="outlined"
                        disabled
                        className={classes.btnContinuePay}
                        style={{
                          width: "100%",
                          backgroundColor: "grey",
                          cursor:"pointer"
                        }}
                      >
                        Pay
                        <ArrowForwardIcon />
                      </Button>
                }

                {/* // <Link
                //   to="/check-out/checkout1c"
                //   style={{ textDecoration: "none" }}
                // >

                //   <Button
                //     size="large"
                //     variant="outlined"
                //     className={classes.btnContinuePay}
                //     style={{
                //       width: "100%",
                //       backgroundColor: "#1e1e1e",
                //     }}
                //   >
                //     Pay
                //     <ArrowForwardIcon />
                //   </Button>
                // </Link> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout1b;

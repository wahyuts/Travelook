import React, { useState, useEffect } from "react";
import "./Checkout1c.css";
import { useFileUpload } from "use-file-upload";

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
import CheckoutCountDown from "./CheckoutCountDown";
import Countdown from "react-countdown";
import { Link, useHistory } from "react-router-dom";
import CheckoutNav from "../CheckoutNav";
import axios from "axios";
import authHeader from "../../../services/auth-header";
// import DateRangeIcon from "@material-ui/icons/DateRange";

function Checkout1c() {
  const [files, selectFiles] = useFileUpload();
  //   const [value, setValue] = React.useState("female");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const [accDetail, setAccDetail] = useState("");
  const [dataImage, setDataImage] = useState("");
  const [nama, setNama] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [dataCekIn, setDataCekIn] = useState("");
  const [dataCekOut, setCekOut] = useState("");
  const [guest, setGuest] = useState("");

  const API_URL = "https://travelook.gabatch11.my.id/";
  let orderID = localStorage.getItem("OrderID");
  useEffect(() => {
    axios
      .get(API_URL + `reservation/order?order_id=${orderID}`, {
        headers: authHeader(),
      })
      // .get(API_URL + `reservation/order?order_id=${orderID}`, {
      //   headers: authHeader(),
      // })
      .then((response) => {
        // setListOrder(response.data);
        setAccDetail(response.data.data);
        setDataImage(response.data.data.rows[0].Room.Media[0].file_name);
        setNama(response.data.data.rows[0].Room.name)
        setLocation(response.data.data.rows[0].Room.location.city)
        setGuest(response.data.data.rows[0].guest_number)
        setState(response.data.data.rows[0].Room.location.state)
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
      });
  }, []);

  useEffect(() => {
    setDataCekIn(localStorage.getItem("CheckIN-Date"));
    setCekOut(localStorage.getItem("CheckOutDate"));
    setFullDateCekin(new Date(dataCekIn))
    setFullDateCekOut(new Date(dataCekOut))
  }, [
    localStorage.getItem("CheckIN-Date"),
    localStorage.getItem("CheckOutDate"),
    dataCekIn,dataCekOut
  ]);

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

    const history = useHistory();
    const goToConfirmPayment = () => history.push("/check-out/checkout1d");

    const uploadReceived = () => {
      selectFiles(
        { accept: "image/*" },
        ({ name, size, source, file }) => {
          goToConfirmPayment();
          console.log("Files Selected", {
            name,
            size,
            source,
            file,
          });
        },
      );
      
    }

  // console.log(accDetail);
  // console.log(dataImage);
  // console.log(fullDateCekin);
  // console.log(fullDateCekOut);
  

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
                  Your booking is waiting for confirmation.
                  <p>Meanwhile please complete your payment</p>
                  <p>Transfer to : BCA a.n PT Jalan Jalan Santai 4273987217</p>
                </div>
                <div className="checkout-countdown">
                  <CheckoutCountDown />
                </div>
                <div className="checkout1c-kanan-border2c-content-btn">
                  {/* <Link
                    to="/check-out/checkout1d"
                    style={{ textDecoration: "none" }}
                  > */}
                    <Button

                        onClick={ 
                                  uploadReceived
                                  
                                
                                }


                      // onClick={() =>
                      //   selectFiles(
                      //     { accept: "image/*" },
                      //     ({ name, size, source, file }) => {
                      //       console.log("Files Selected", {
                      //         name,
                      //         size,
                      //         source,
                      //         file,
                      //       });
                      //     }
                      //   )
                      //   // nextConfirm()
                      // }
                      size="large"
                      variant="outlined"
                      className="checkout1c-kanan-border2c-content-btn-content"
                    >
                      Upload receipt
                      <ArrowForwardIcon />
                    </Button>
                    {/* {file ? (
                      <div>
                        <img src={file.source} alt="preview" />
                        <span> Name: {file.name} </span>
                        <span> Size: {file.size} </span>
                      </div>
                    ) : (
                      <span>No file selected</span>
                    )} */}
                  {/* </Link> */}
                </div>
              </div>
              <div className="checkout1c-boxbawah-container">
                <div className="border-1c-hr">
                  <hr></hr>
                  <div className="checkout1c-boxbawah">
                    <div className="border-content1c-bawah">
                      <div className="border-content1c-bawah-image">
                        {" "}
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
                          <p>{nama} </p>
                        </div>
                        <div className="border-content1c-bawah-containercontent-1">
                          {" "}
                          <div className="border-content1c-bawah-content-1c-bawah1">
                            <DateRangeIcon />
                            {trueCekin} | {trueCekout}
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

export default Checkout1c;

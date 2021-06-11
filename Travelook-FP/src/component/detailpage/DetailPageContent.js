import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Scroll from "./Scroll";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DetailPageCard from "./DetailPageCard";
import "./DetailPageContent.css";
import Avatar from "@material-ui/core/Avatar";
import DetailRating from "./DetailPageRating";
import Modal from "@material-ui/core/Modal";
import ModalAmenities from "./modalamenities";
import ServiceContent from "./ServiceContent";
import { getRoomDetail } from "../../actions/roomDetail";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import "../../../node_modules/leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import { CircleMarker } from "leaflet";

function DetailPageContent() {
  const avatarStyle = { backgroundColor: "orange" };
  const avatarStyle2 = { backgroundColor: "blue" };
  const avatarStyle3 = { backgroundColor: "green" };
  const avatarStyle4 = { backgroundColor: "purple" };

  const detailData = useSelector((state) => state.roomDetailData.detail);
  // console.log("testdata", detailData);

  const [dataHotel, setDataHotel] = useState([]);
  const [food, setFood] = useState([]);
  const [service, setService] = useState([]);
  const [park, setPark] = useState([]);
  const [healthy, setHealthy] = useState([]);
  const [imgHotel, setImgHotel] = useState([]);


  let idHotel = localStorage.getItem("idHotel");

  const API_URL = "https://travelook.gabatch11.my.id/room/detail/";

  useEffect(() => {
    return axios.get(API_URL + `${idHotel}`).then(
      // return axios.get(API_URL + `${getOnlyIdHotel}`).then(
      (response) => {
        setDataHotel(response.data.data);
        setFood(response.data.data?.foodandbeverage);
        setService(response.data.data?.service);
        setPark(response.data.data?.parkandtransport);
        setHealthy(response.data.data?.healthy);
        setImgHotel(response.data.data?.Media[1].file_name)
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

  // console.log("DATA HOTEL", dataHotel);
  // console.log("IMGGGGGG", imgHotel)

  // const [food, setFood] = useState ([])
  // setFood (dataHotel?.foodandbeverage)
  // const food = dataHotel?.foodandbeverage;
  // console.log("foodcek", food);

  const arrFood = [];
  arrFood.push(food["1"], food["2"], food["3"]);
  // console.log("Fodd", arrFood);

  const arrService = [];
  arrService.push(service["1"], service["2"], service["3"]);
  // console.log("Servicess", arrService);

  const arrParkAndTransport = [];
  arrParkAndTransport.push(park["1"], park["2"], park["3"]);
  // console.log("Park and Transport", arrParkAndTransport);

  const arrHealthy = [];
  arrHealthy.push(healthy["1"], healthy["2"], healthy["3"]);
  // console.log("Cek Healthy", arrHealthy);

  // const service = dataHotel?.service;
  // console.log("service cek", service);

  // const park = dataHotel?.parkandtransport;
  // console.log("park cek", park)

  // const healthy = dataHotel?.healthy;
  // console.log("healthy cek", healthy)

  // const summary = detailData?.service.summary;
  // console.log("summary cek", summary)

  // let { id } = useParams();
  // console.log("cekcekdata", id);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRoomDetail(id));
  //   // dependecies agar tidak loop data
  // }, []);

  const position = [
    dataHotel?.location?.latitude,
    dataHotel?.location?.longitude,
  ];

  // console.log("MAP LATITUDE", position[0]);
  // console.log("MAP LONGTITUDE", position[1]);

  // Styling ala Material UI bukan css,..tapi kek semacam hooks dan object
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingLeft: 180,
      paddingRight: 200,
      paddingTop: 50,
      backgroundColor: "white",

      [theme.breakpoints.down("lg")]: {
        paddingLeft: 100,
        paddingRight: 100,
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    paperModal: {
      position: "absolute",
      width: 875,
      height: 700,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid ",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      [theme.breakpoints.down("lg")]: {
        position: "absolute",
        width: 700,
        height: 600,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid ",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    },

    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    cozy: {
      paddingRight: 100,
      marginTop: 30,

      [theme.breakpoints.down("lg")]: {
        marginTop: 30,
        paddingRight: 50,
      },
    },

    locationCSSMap: {
      paddingRight: 100,
      paddingBottom: 20,
      [theme.breakpoints.down("lg")]: {
        paddingRight: 50,
        paddingBottom: 20,
      },
    },

    reviewCSS: {
      paddingRight: 50,
      [theme.breakpoints.down("lg")]: {
        paddingRight: 50,
      },
    },

    flexGridKoment: {
      display: "flex",
      //  justifyContent: 'space-between',
    },

    IDKoment1: {
      paddingRight: 300,
      [theme.breakpoints.down("lg")]: {
        paddingRight: 100,
      },
    },

    IDKoment2: {
      paddingRight: 100,
      paddingLeft: 0,
      [theme.breakpoints.down("lg")]: {
        paddingRight: 20,
      },
    },

    modalAmenities: {
      display: "flex",
      paddingRight: 100,
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        // flexDirection: "space-between"
      },
    },

    modalAmenities2: {
      marginLeft: 300,
      [theme.breakpoints.down("lg")]: {
        marginLeft: 200,
        // flexDirection: "space-between"
      },
    },

    font: {
      fontSize: 20,
      [theme.breakpoints.down("lg")]: {
        fontSize: 18,
        // flexDirection: "space-between"
      },
    },

    imgMap: {
      width: "100%",
      [theme.breakpoints.down("lg")]: {
        width: "94%",
      },
    },
    marginHR: {
      marginRight: "50px",
      [theme.breakpoints.down("lg")]: {
        marginRight: "0px",
      },
    },
    foodbeverage: {
      // listStyleType: 'circle',
      marginBottom: 10,
      fontSize: 22,
      fontFamily: "Nunito",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#3E3E3E",
    },
    healthy: {
      marginBottom: 10,
      fontSize: 22,
      fontFamily: "Nunito",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#3E3E3E",
      paddingTop: 20,
    },
    foodbeverageul: {
      // marginBottom: 10,
      fontSize: 20,
      fontFamily: "Nunito",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#3E3E3E",
    },
  }));

  //********************bates akhir deklarasi function styling material ui */

  //****selanjutnya tinggal const useStyles dinggal di assign ke variable lain misal classes,..jadi kalo mau pake
  //** style yang tadi ud buat tinggal panggil classes aja,..maka seluruh style akan digunakan */
  const classes = useStyles();
  const Arrow = {
    marginLeft: 20,
    marginBottom: 0.5,
    height: 15,
    color: "grey",
  };
  // modal reviews
  const [open1, setOpen1] = useState(false);

  const handleModal1 = () => {
    setOpen1(!open1);
  };

  // modal amenities
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const [modalStyle] = useState(getModalStyle);

  // onclose icon
  // const [open3, setOpen3] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // onClose click
  const onClose = (e) => {
    this.props.show = false;
  };

  // detailData amneities

  // function rand() {
  //   return Math.round(Math.random() * 20) - 10;
  // }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  // untuk mengakses data dari reducer

  // console.log(position);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [message, setMessage] = React.useState(false);
  return (
    <>
      {/*ini bagian search by result > stylish room bawahnya header */}
      {/* <div className="cont-detail">
        <h4 className="detail-1">
          Search by result
          <ArrowForwardIosIcon style={Arrow} />
        </h4>
        <h4 className="detail-2">Stylish Room located next to Jalan Braga</h4>
      </div> */}

      <div className={classes.root}>
        {/******Main Grid Utama (The only One) ************/}

        <Grid container spacing={3}>
          <Grid item xs={12} className="detail-3">
            <div>
              <img
                src={`https://travelook.gabatch11.my.id/${imgHotel}`}
                // src={`https://travelook.gabatch11.my.id/${dataHotel.defaultImages}`}
                alt="imageDetail"
                className="image-detail"
              />
              {/* <button
                onClick={() => setMessage(true)}
                className="button-detailpage"
                style={{ textDecoration: "none", color: "black" }}
              >
                Show all photos
                <ArrowForwardIcon />
              </button> */}
            </div>
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
          </Grid>

          {/* <div className={classes.root}> */}
          {/* <Grid container spacing={3}> */}
          {/* Cozy apartement  */}

          {/****** Grid cozy apartment bandung label sd button show all amenities**********/}

          <Grid
            item
            xs={18}
            sm={9}
            className={classes.cozy}
            // style={{
            //   paddingRight: 100,
            //   marginTop: 30,
            // }}
          >
            {/*******************Cozy Apartment Bandung sampai button all amenities ************/}

            {/*******************Cozy Apartment Bandung sampai Label amenities ************/}
            <div className="amenities" className={classes.cozy}>
              {/* <Paper className="">xs=6</Paper> */}

              <h2>{dataHotel?.name}</h2>

              <p style={{ paddingTop: 40 }}>
                {" "}
                {dataHotel?.total_occupancy} Guest • {dataHotel?.total_bedrooms}{" "}
                bed • {dataHotel?.total_bathroom} bath{" "}
              </p>
              <hr style={{ width: "100%" }}></hr>
              <div className="amenities-content">
                <h4 style={{ paddingTop: 10 }}>Amenities </h4>
                {/* {detailData.services.map} */}
              </div>
            </div>
            {/*******************End Cozy Apartment Bandung sampai Label amenities ************/}

            {/*******************Content dibawah Label amenities(Bathroom sd Internet Office) ************/}
            <Grid style={{ marginRight: 0 }}>
              <div style={{ display: "flex", flex: 1, width: "100%" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 20 }}>Food and Beverage</p>
                  {food != undefined ? (
                    <Box display="flex">
                      <ul style={{ marginBottom: 10 }}>
                        {arrFood.map((user, i) => {
                          if (arrFood[i] === undefined) {
                            console.log("UND", arrFood[i]);
                          } else {
                            return (
                              <li
                                key={i}
                                style={{
                                  listStyle: "disc",
                                  fontSize: 16,
                                  fontFamily: "Nunito",
                                  fontWeight: "400",
                                  lineHeight: "24px",
                                  color: "#3E3E3E",
                                }}
                              >
                                {arrFood[i]}
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </Box>
                  ) : (
                    ""
                  )}

                  <p style={{ fontSize: 20 }}>Service</p>

                  {service != undefined ? (
                    <ul>
                      {arrService.map((user, i) => {
                        if (arrService[i] === undefined) {
                          console.log("UND", arrService[i]);
                        } else {
                          return (
                            <li
                              key={i}
                              style={{
                                listStyle: "disc",
                                fontSize: 16,
                                fontFamily: "Nunito",
                                fontWeight: "400",
                                lineHeight: "24px",
                                color: "#3E3E3E",
                              }}
                            >
                              {arrService[i]}
                            </li>
                          );
                        }
                      })}
                      {/* <li>{service["1"]}</li>
                      <li>{service["2"]}</li>
                      <li>{service["3"]}</li> */}
                    </ul>
                  ) : (
                    ""
                  )}

                  <div style={{ paddingTop: 50 }}>
                    <button
                      onClick={handleModal}
                      className="button-amenities"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Show all amenities
                    </button>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <Grid item xs={6}>
                    <div>
                      <p style={{ fontSize: 20 }}>Park & Transport</p>
                      {park != undefined ? (
                        <ul>
                          {arrParkAndTransport.map((user, i) => {
                            if (arrParkAndTransport[i] === undefined) {
                              console.log("UND", arrParkAndTransport[i]);
                            } else {
                              return (
                                <li
                                  key={i}
                                  style={{
                                    listStyle: "disc",
                                    fontSize: 16,
                                    fontFamily: "Nunito",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                    color: "#3E3E3E",
                                  }}
                                >
                                  {arrParkAndTransport[i]}
                                </li>
                              );
                            }
                          })}
                          {/* <li>{park["1"]}</li>
                          <li>{park["2"]}</li>
                          <li>{park["3"]}</li> */}
                        </ul>
                      ) : (
                        ""
                      )}

                      <p style={{ fontSize: 20, paddingTop: 5 }}>Healthy</p>
                      {healthy != undefined ? (
                        <ul>
                          {arrHealthy.map((user, i) => {
                            if (arrHealthy[i] === undefined) {
                              // console.log("UND", arrHealthy[i]);
                            } else {
                              return (
                                <li
                                  key={i}
                                  style={{
                                    listStyle: "disc",
                                    fontSize: 16,
                                    fontFamily: "Nunito",
                                    fontWeight: "400",
                                    lineHeight: "24px",
                                    color: "#3E3E3E",
                                  }}
                                >
                                  {arrHealthy[i]}
                                </li>
                              );
                            }
                          })}
                          {/* <li>{healthy["1"]}</li>
                          <li>{healthy["2"]}</li> */}
                          {/* <li>{healthy["3"]}</li>
                        <li>{healthy["4"]}</li>
                        <li>{healthy["5"]}</li> */}
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  </Grid>
                  {/*******************End Content dibawah Label amenities(Bathroom sd Internet Office) ************/}
                </div>
              </div>
              {/*******************End Cozy Apartment Bandung sampai button all amenities ************/}

              {/*************************Modal detail page show all amenities****************************/}

              <Modal open={open} onClose={handleModal}>
                <div className={classes.paperModal} style={modalStyle}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2> Amenities </h2>
                      <IconButton
                        onClick={() => {
                          handleModal();
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      {/* <div style={{paddingTop: '5px'}}>
                      
                    </div> */}
                    </div>
                    <hr style={{ width: "100%" }}></hr>
                    <h2
                      style={{
                        paddingBottom: 0,
                        fontFamily: "nunito",
                        fontSize: "24px",
                        fontColor: "#3E3E3E",
                      }}
                    >
                      Facility of this stay
                    </h2>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingRight: "60px",
                    }}
                  >
                    {/* <div className={classes.modalAmenities}> */}

                    {/*******modal amenities bagian 1 ***********/}
                    <div>
                      {/* <p id="simple-modal-description">
                                    Duis mollis, est non commodo luctus, nisi erat porttitor
                                    ligula.
                                  </p> */}
                      <div>
                        <p className={classes.font}>Food and Beverage</p>
                        {food != undefined ? (
                          <ul>
                            <li>{food["1"]}</li>
                            <li>{food["2"]}</li>
                            <li>{food["3"]}</li>
                          </ul>
                        ) : (
                          ""
                        )}

                        <p className={classes.font}>Service</p>
                        {service != undefined ? (
                          <ul>
                            <li>{service["1"]}</li>
                            <li>{service["2"]}</li>
                            <li>{service["3"]}</li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </div>

                      <div>
                        <p className={classes.font}>Park & Transport</p>

                        {park != undefined ? (
                          <ul>
                            <li>{park["1"]}</li>
                            <li>{park["2"]}</li>
                            <li>{park["3"]}</li>
                          </ul>
                        ) : (
                          ""
                        )}

                        <p className={classes.font}>Healthy</p>

                        {healthy != undefined ? (
                          <ul>
                            <li>{healthy["1"]}</li>
                            <li>{healthy["2"]}</li>
                            {/* <li>{healthy["3"]}</li>
                        <li>{healthy["4"]}</li>
                        <li>{healthy["5"]}</li> */}
                          </ul>
                        ) : (
                          ""
                        )}
                      </div>

                      {/* <div>
                        <p className={classes.font}>Home safety</p>

                        <ul>
                          <li>Smoke alarm</li>
                        </ul>
                      </div> */}

                      {/* <div>
                                                <p className={classes.font}>Outdoor</p>

                                                <ul>
                                                  <li>Patio or balcony</li>
                                                </ul>
                                            </div> */}
                    </div>
                    {/*******End modal amenities bagian 1 ***********/}

                    {/*******modal amenities bagian 2 ***********/}

                    <div className={classes.modalAmenities2}>
                      <div>
                        <p className={classes.font}>Heating & cooling </p>

                        <ul>
                          <li>Air conditioning</li>
                        </ul>

                        <p className={classes.font}>Parking Facilities</p>
                        <ul>
                          <li>Elevator</li>
                          <li>Gym</li>
                          <li>Paid parking on premises</li>
                        </ul>
                        <p className={classes.font}>Kitchen & dining</p>

                        <ul>
                          <li>Kitchen</li>
                          <li>Microwave</li>
                          <li>Refigrator</li>
                          <li>Dishes & Silverware</li>
                          <li>Cooking basics</li>
                        </ul>
                        <p className={classes.font}>Services & Outdoor</p>
                        <ul>
                          <li>Long term stays allowed</li>
                          <li>Lockbox</li>
                          <li>Patio or balcony</li>
                        </ul>
                      </div>
                    </div>
                    {/*******End modal amenities bagian 2 ***********/}
                  </div>
                </div>
              </Modal>
              {/*************************End Modal detail page****************************/}
            </Grid>
          </Grid>
          {/****** End Grid cozy apartment bandung label sd button show all amenities**********/}

          {/**********Grid Book Card*********** */}
          <Grid item xs={6} sm={3} style={{ marginTop: 40 }}>
            {/* <Grid item xs={3} style={{ marginTop: 40 }}> */}
            <DetailPageCard pricePerNight={dataHotel?.price} />
          </Grid>
          {/**********End Grid Book Card*********** */}

          {/**********Grid Location*********** */}
          <Grid item xs={18} sm={9} className={classes.locationCSSMap}>
            {/* <Grid item xs={9} className={classes.locationCSSMap}> */}

            <div className={classes.locationCSSMap}>
              {/* <div className="amenities-content"> */}
              <hr></hr>
              <h5>Location</h5>

              {dataHotel.location?.latitude ? (
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={true}
                  id="mapid"
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Popup position={position}>
                    You are here! <br />
                  </Popup>
                </MapContainer>
              ) : (
                "Loading..."
              )}
            </div>
            {/* <img src="./images/location.png" style={{ width: "100%" }} /> */}
            {/* <img src="./images/location.png" className={classes.imgMap} /> */}
          </Grid>
          {/**********End Grid Location*********** */}

          {/**********Grid Label Review + star*********** */}
          <Grid item xs={18} sm={9}>
            {/* <Grid item xs={12} style={{ paddingRight: 480 }}> className={classes.locationCSSMap}*/}

            <div className={classes.reviewCSS}>
              {/* <div className="amenities-content"> */}
              <hr className={classes.marginHR}></hr>
              <h5>Reviews</h5>
              <div style={{ display: "flex" }}>
                <p>
                  <DetailRating />
                </p>

                <p style={{ paddingTop: 3, paddingLeft: 10 }}>
                  {" "}
                  5 / 5 ( 12 Reviews )
                </p>
              </div>
            </div>
          </Grid>
          {/**********End Grid Label Review + star*********** */}

          {/**********Grid Mulai komentar*********** */}
          <Grid item xs={18} sm={9}>
            {/* <Grid item xs={18} sm={9} style={{ marginRight: 150 }}> */}

            {/**********Flex Grid ID koment1 dan koment2*********** */}
            <div className={classes.flexGridKoment}>
              {/**********Grid ID koment bagian 1*********** */}
              <div id="ID-koment1" className={classes.IDKoment1}>
                {/**********Grid komentar Pertama*********** */}
                <div style={{ display: "flex" }}>
                  <Avatar style={avatarStyle}>CW</Avatar>
                  <div>
                    <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                      Crystal Widjaya
                    </h6>
                    <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                  </div>

                  <div style={{ display: "flex" }}>
                    <p style={{ paddingLeft: 100 }}>
                      <DetailRating />
                    </p>
                    <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                  </div>
                </div>
                <div>
                  <p>
                    {" "}
                    I can’t believe the amount of detail of the building, nicely
                    decorated!
                  </p>
                </div>
                {/**********End Grid komentar Pertama*********** */}

                {/**********Grid komentar Kedua*********** */}
                <div style={{ display: "flex", paddingTop: 50 }}>
                  <Avatar style={avatarStyle2}>SM</Avatar>
                  <div>
                    <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                      Sayuti Melik
                    </h6>
                    <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p style={{ paddingLeft: 130 }}>
                      <DetailRating />
                    </p>
                    <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                  </div>
                </div>
                <div>
                  <p> Cool place</p>
                </div>
                {/**********End Grid komentar Kedua*********** */}
              </div>
              {/**********End Grid ID koment bagian 1*********** */}

              {/**********Grid ID koment bagian 2*********** */}
              <div id="ID-Koment2" className={classes.IDKoment2} >
                {/**********komentar Ketiga*********** */}
                <div style={{ display: "flex" }}>
                  <Avatar style={avatarStyle3}>ZA</Avatar>
                  <div>
                    <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                      Zizi Azizah
                    </h6>
                    <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                  </div>

                  <div style={{ display: "flex" }}>
                    <p style={{ paddingLeft: 130 }}>
                      <DetailRating />
                    </p>
                    <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                  </div>
                </div>
                <div>
                  <p> Great place & host!</p>
                </div>
                {/**********End komentar Ketiga*********** */}

                {/**********komentar Keempat*********** */}
                <div style={{ display: "flex", paddingTop: 50 }}>
                  <Avatar style={avatarStyle4}>JR</Avatar>
                  <div>
                    <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                      Jason Ranti
                    </h6>
                    <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p style={{ paddingLeft: 130 }}>
                      <DetailRating />
                    </p>
                    <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                  </div>
                </div>
                <div>
                  <p> Tempatnya bersih nyaman...</p>
                </div>
                {/**********End komentar Keempat*********** */}
              </div>
              {/**********End Grid ID koment bagian 2*********** */}
            </div>
            {/**********End Flex Grid ID koment1 dan koment2*********** */}

            {/**********Tombol button show all review*********** */}
            <div style={{ paddingTop: 50 }}>
              <button
                onClick={handleModal1}
                className="button-amenities"
                style={{ textDecoration: "none", color: "black" }}
              >
                Show all reviews
              </button>
            </div>
            {/**********End Tombol button show all review*********** */}
          </Grid>
          {/**********End Grid Mulai komentar*********** */}

          {/**********Modal Komentar*********** */}
          <Modal open={open1} onClose={handleModal1}>
            <div className={classes.paperModal} style={modalStyle}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h2> Reviews </h2>
                  <IconButton
                    onClick={() => {
                      handleModal1();
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  {/* <div style={{paddingTop: '5px'}}>
                      
                    </div> */}
                </div>
                <hr style={{ width: "100%" }}></hr>
                <h2
                  style={{
                    paddingBottom: 0,
                    fontFamily: "nunito",
                    fontSize: "16px",
                    fontColor: "#3E3E3E",
                  }}
                >
                  What people think about this stay
                </h2>
                <div style={{ display: "flex" }}>
                  <p>
                    <DetailRating />
                  </p>
                  <p style={{ paddingTop: 3, paddingLeft: 10 }}>
                    {" "}
                    4 / 5 ( 308 Reviews )
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", marginRight: 50 }}>
                {/* <h1> Kiri </h1> */}
                <div>
                  <div style={{ display: "flex" }}>
                    <Avatar style={avatarStyle}>CW</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Crystal Widjaya
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 100 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ paddingRight: 50 }}>
                      {" "}
                      I can’t believe the amount{" "}
                      <p>of detail of the building,nicely decorated!</p>
                    </p>
                  </div>

                  <div style={{ display: "flex", paddingTop: 50 }}>
                    <Avatar style={avatarStyle}>CW</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Crystal Widjaya
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 100 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ paddingRight: 50 }}>
                      {" "}
                      I can’t believe the amount{" "}
                      <p>of detail of the building,nicely decorated!</p>
                    </p>
                  </div>

                  {/* <div style={{ display: "flex", paddingTop: 50 }}>
                    <Avatar style={avatarStyle2}>SM</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Sayuti Melik
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 130 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p> Cool place</p>
                  </div> */}

                  {/* <div style={{ display: "flex", paddingTop: 50 }}>
                    <Avatar style={avatarStyle2}>SM</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Sayuti Melik
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 130 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p> Cool place</p>
                  </div> */}
                  {/* <div>
                    <button
                      className="button-amenities"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        marginTop: 40,
                      }}
                    >
                      load more
                    </button>
                  </div> */}
                  {/* <button
                        className="button-detailpage"
                        style={{ textDecoration: "none", color: "black", marginTop: 40 }}
                      >
                        load more
                      
                      </button> */}
                </div>

                <div>
                  {/* <h2> Kanan</h2> */}
                  <div style={{ display: "flex", marginLeft: 40 }}>
                    <Avatar style={avatarStyle3}>ZA</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Zizi Azizah
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 120 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginLeft: 45 }}> Great place & host!</p>
                  </div>

                  <div
                    style={{ display: "flex", marginLeft: 40, paddingTop: 75 }}
                  >
                    <Avatar style={avatarStyle3}>ZA</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Zizi Azizah
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 120 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginLeft: 45 }}> Great place & host!</p>
                  </div>

                  {/* <div
                    style={{ display: "flex", marginLeft: 40, paddingTop: 70 }}
                  >
                    <Avatar style={avatarStyle3}>JR</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Jason Ranti
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 120 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginLeft: 45 }}>
                      {" "}
                      Tempatnya bersih dan nyaman...
                    </p>
                  </div> */}

                  {/* <div
                    style={{ display: "flex", marginLeft: 40, paddingTop: 40 }}
                  >
                    <Avatar style={avatarStyle3}>JR</Avatar>
                    <div>
                      <h6 style={{ fontSize: 20, paddingLeft: 10 }}>
                        Jason Ranti
                      </h6>
                      <p style={{ paddingLeft: 10 }}> Jan 2020 </p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p style={{ paddingLeft: 120 }}>
                        <DetailRating />
                      </p>
                      <p style={{ paddingTop: 4, paddingLeft: 5 }}> 5/5 </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginLeft: 45 }}>
                      {" "}
                      Tempatnya bersih dan nyaman...
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </Modal>
          {/**********End Modal Komentar*********** */}

          {/**********Grid Mulai komentar 2 *********** */}
          <Grid item xs={3}></Grid>
          {/**********End Grid Mulai komentar 2*********** */}

          {/**********Grid About*********** */}
          <Grid item xs={18} sm={9}>
            <div className={classes.reviewCSS}>
              <hr className={classes.marginHR}></hr>
            </div>

            <div style={{ display: "flex" }}>
              <h5>About</h5>
            </div>

            <div className={classes.reviewCSS}>
              <p>{}</p>
              <p>{dataHotel?.summary}</p>
            </div>

            {/* <img src="./images/location.png" style={{width: "100%"}}/> */}
          </Grid>
          {/**********End Grid About*********** */}
        </Grid>
        {/******End Main Grid Utama (The only One) ************/}
      </div>
    </>
  );
}

export default DetailPageContent;

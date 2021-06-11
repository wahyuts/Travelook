import React,{useState,useEffect} from 'react';
import EventIcon from '@material-ui/icons/Event';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TextField from '@material-ui/core/TextField';
import dateFormat from 'dateformat';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import axios from "axios";
import authHeader from "../../services/auth.service";
import { useHistory } from "react-router-dom";
import NotifErrorOrderDetail from './NotifErrorOrderDetail'


// import MoreVertIcon from '@material-ui/icons/MoreVert';
import './CardReviewModal.css'

// setup buat modal dialog mat ui
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import { Button } from '@material-ui/core';

// buat rating star
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
        width:900,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  //******batas akhir setup deklar buat modal */



const CardReviewModal = ({filterByStatus}) => {

  const API_URL = "https://travelook.gabatch11.my.id/";
 

//function untuk modal
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [IDorder, setIDorder] = useState([]);


    const [accDetail, setAccDetail] = useState("");
    const [dataImage, setDataImage] = useState("");
    const [nama, setNama] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [dateModalCekIn, setDateModalCekIn] = useState("");
    const [dateModalCekOut, setDateModalCekOut] = useState("");
    const [guest, setGuest] = useState("");

    // let orderID = localStorage.getItem("OrderID");


    const handleOpen = (event) => {
        localStorage.setItem('OrderID', event.target.value);
        // let orderID = localStorage.getItem("OrderID");

        setIDorder(event.target.value)
        setOpen(true);


        axios.get(API_URL + `reservation/order?order_id=${localStorage.getItem("OrderID")}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}} )
      .then((response) => {
          if (response.data.data.count === 0){
            //   console.log("ini error apaan sih?", response.data.data.count)
              goToErrorReviewPage()
          }
        // setListOrder(response.data);
        setAccDetail(response.data.data);
        console.log("error apa lagi ini",response.data.data )
        setDataImage(response.data.data.rows[0].Room.Media[0].file_name);
        setNama(response.data.data.rows[0].Room.name)
        setLocation(response.data.data.rows[0].Room.location.city)
        setGuest(response.data.data.rows[0].guest_number)
        setState(response.data.data.rows[0].Room.location.state)
        setDateModalCekIn(response.data.data.rows[0].start_date)
        setDateModalCekOut(response.data.data.rows[0].end_date)

      })
      .catch((error) => {
        console.log("respon data error",error.response.data);
        console.log(error.response.status);
      });
    };

    const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

    const closeNotifyError = () => {
        setNotifyError({
        isOpen: false,
        message: '',
        })
    };

    const handleNewFeature = () => {
        setNotifyError({
            isOpen: true,
            message: 'Coming soon !',
            })
        setOpen(false);
    }


    // const dapetinDataByOrderId = ()=> {
    //     axios
    //   .get(API_URL + `reservation/order?order_id=${orderID}`, {
    //     headers: authHeader(),
    //   })
    //   .then((response) => {
    //     // setListOrder(response.data);
    //     setAccDetail(response.data.data);
    //     setDataImage(response.data.data.rows[0].Room.Media[0].file_name);
    //     setNama(response.data.data.rows[0].Room.name)
    //     setLocation(response.data.data.rows[0].Room.location.city)
    //     setGuest(response.data.data.rows[0].guest_number)
    //     setState(response.data.data.rows[0].Room.location.state)
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //   });
    // }

    const history = useHistory();
    const goToErrorReviewPage = () => history.push("/Error-display-review");

    // useEffect(() => {
    //     axios.get(API_URL + `reservation/order?order_id=${orderID}`, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}} )
    //   .then((response) => {
    //       if (response.data.data.count === 0){
    //         //   console.log("ini error apaan sih?", response.data.data.count)
    //           goToErrorReviewPage()
    //       }
    //     // setListOrder(response.data);
    //     setAccDetail(response.data.data);
    //     setDataImage(response.data.data.rows[0].Room.Media[0].file_name);
    //     setNama(response.data.data.rows[0].Room.name)
    //     setLocation(response.data.data.rows[0].Room.location.city)
    //     setGuest(response.data.data.rows[0].guest_number)
    //     setState(response.data.data.rows[0].Room.location.state)
    //     setDateModalCekIn(response.data.data.rows[0].start_date)
    //     setDateModalCekOut(response.data.data.rows[0].end_date)

    //   })
    //   .catch((error) => {
    //     console.log("respon data error",error.response.data);
    //     console.log(error.response.status);
    //   });
    // }, []);



    const handleClose = () => {
        setOpen(false);
    };
//************************************************ */

    const [valueStar, setValueStar] = React.useState(2);

    const dateCekin  = filterByStatus.map((user,i)=>{
        const start = filterByStatus[i].start_date
        const convertDate = dateFormat(`${start}`, "ddd, dd mmm yyyy")
        return convertDate
    })

    const dateCekout  = filterByStatus.map((user,i)=>{
        const end = filterByStatus[i].end_date
        const convertEndDate = dateFormat(`${end}`, "ddd, dd mmm yyyy")
        return convertEndDate
    })

   
       
    const dateMdlCekin = dateFormat(`${dateModalCekIn}`, "ddd, dd mmm yyyy")
    const dateMdlCekout = dateFormat(`${dateModalCekOut}`, "ddd, dd mmm yyyy")

  

    const [tangkepIdOrder,setTangkepIdOrder] = useState ([])


    return(
        <div>
            {filterByStatus.map((user,i)=>{
                return (
            <div className="card-review-modal" key={i}>
                    <div className="only-pic"> {/* className only-pic ga ada flex*/ }
                        <img src={`https://travelook.gabatch11.my.id/${filterByStatus[i].Room.Media[0].file_name}`} alt="Travelook-preview-hotel" className="pic-in-CardReviewModal"/>
                    </div>

                    <div className="detail-booking-card-review-modal">
                        <p>{filterByStatus[i].order_id}</p>
                        <h5>{filterByStatus[i].Room.name}</h5>
                        <p><EventIcon style={{marginRight:10}}/> {dateCekin[i]} - {dateCekout[i]} <span style={{marginLeft:2,marginRight:2}}>|</span> <InsertEmoticonIcon style={{marginLeft:1,marginRight: 1}}/> {filterByStatus[i].guest_number} Guest</p>
                        <p>{filterByStatus[i].Room.location.city}, {filterByStatus[i].Room.location.state}</p>
                        {/* <p>How was the experience?   <span style={{color: 'blue',textDecoration: 'underline', cursor: 'pointer'}} onClick={handleOpen}>give rating</span></p> */}
                        <p>How was the experience?   <button style={{color: 'blue', cursor: 'pointer'}} value= {filterByStatus[i].order_id} onClick={handleOpen}>give rating</button></p>
                    </div>
                    {/* <p>Cardlistnya disini</p> */}
                    <div className="only-margin-triplle-dot">
                            <ul className="ul-tripple-dotxx">
                                <li className="status">{filterByStatus[i].status}</li>
                            </ul>
                    </div>
                </div>
                )
                })
            }

        {/**********ini buat misi modal nya********************* */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >

                
                <Fade in={open}>
                <div className={classes.paper}>

                    <div className="cont-modal-detail">
                        <div className="only-margin-modal">
                            <h4>Review</h4>
                            <p style ={{width:200}}>Please describe you feeling here</p>
                        </div>
                        <CloseIcon onClick={handleClose}
                                style={{marginLeft:'600px', marginTop:'1px'}}/>
                    </div>

                    <div className="cont-modal-box">
                          
                            <div className="card-review-modal2">
                                    <div className="only-pic"> 
                                        <img src={`https://travelook.gabatch11.my.id/${dataImage}`} alt="Travelook-preview-hotel" className="pic-in-CardReviewModal2"/>
                                    </div>

                                    <div className="detail-booking-card-review-modal">
                                        <h5>{nama}</h5>
                                        <p><EventIcon style={{marginRight:10}}/> {dateMdlCekin} - {dateMdlCekout} <span style={{marginLeft:2,marginRight:2}}>|</span> <InsertEmoticonIcon style={{marginLeft:1,marginRight: 1}}/> {guest} Guest</p>
                                        <p>{location}, {state}</p>
                                    </div>
                                    <div className="only-margin-triplle-dot">
                                            <ul className="ul-tripple-dotxx">
                                                <li style={{color:"transparent"}}>r</li>
                                            </ul>
                                    </div>
                                </div>
                             
                    </div>

                    <div className="how-was-it-star">
                        <p style={{fontSize:20,marginLeft:350}}>How was it ?</p>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            {/* <Typography component="legend">Pristine</Typography> */}
                            <Rating name="pristine" 
                                    style={{fontSize:50, marginLeft:280}} 
                                    value={valueStar} 
                                    onChange={(event, newValue) => {
                                        setValueStar(newValue);
                                      }}
                                    />
                        </Box>
                        <TextField
                            id="outlined-multiline-static"
                            style={{marginLeft:40, width:750}}
                            label="Your experience"
                            multiline
                            rows={4}
                            // defaultValue="Default Value"
                            variant="outlined"
                        />
                        <Button
                            style={{backgroundColor: "#1e1e1e", color: "white", marginTop:12, marginLeft:700}}
                            // onClick={updateUserInfo}
                            // type="submit"
                            variant="contained"
                            onClick={handleNewFeature}
                            // className={classes.style1}
                        >
                            Submit
                        </Button>
                    </div>


                </div>
                </Fade>
            </Modal>

            <NotifErrorOrderDetail
                      style={{marginTop:50, paddingLeft:500}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />


                
        </div>
    )
}

export default CardReviewModal
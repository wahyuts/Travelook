import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from '@material-ui/icons/Close';
import Notification from "./CobaNotif";


import UserService from "../../services/user.service";

import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import axios from 'axios'





const AccountDetail = () => {

  const [ accDetail, setAccDetail] = useState({})
  const [ accFirstName, setAccFirstName] = useState("")
  const [ accLastName, setAccLastName] = useState("")
  const [ accEmail, setAccEmail] = useState("")
  const [ accPhoneNumber, setAccPhoneNumber] = useState("")
  const [ idAcc, setIdAcc] = useState("")
  const [ oldPassword, setOldPassword] = useState ("")

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

    // confirmPassword: '',
    // showConfirmPassword: false,
  });

  const API_URL = "https://travelook.gabatch11.my.id/";

  useEffect(() => {
    UserService.getOneUserData().then(
      (response) => {
        // UNTUK NGECEK response.data.data
        //******************************* */
        setAccDetail(response.data.data);
        setAccFirstName(response.data.data.first_name);
        setAccLastName(response.data.data.last_name);
        setOldPassword(response.data.data.password);
        setAccEmail(response.data.data.email);
        setIdAcc(response.data.data.id);
        if (response.data.data.phone_number === null) {
           setAccPhoneNumber("")
        } else {
          setAccPhoneNumber(response.data.data.phone_number);
        }
        // setAccPhoneNumber(response.data.data.phone_number);


      },
      // (error) => {
      //   const _content =
      //     (error.response &&
      //       error.response.data &&
      //       error.response.data.message) ||
      //     error.message ||
      //     error.toString();

      //     setAccDetail(_content);
      // }
      
    ).catch((error)=> { 
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

  


  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  // let reqPass1 = new RegExp("(?=.*[A-Z])"); // Satu huruf besar
  // let reqPass2 = new RegExp("(?=.*[a-z])"); // Satu huruf kecil
  // let reqPass3 = new RegExp("(?=.*[0-9])"); // Satu angka
  // let reqPass4 = new RegExp("(?=.*[!@#\$%\^&\*])"); // Satu char special
  // let reqPass5 = new RegExp("(?=.*[0-9])"); // Satu angka
  // let reqPass6 = new RegExp("(?=.{8,})"); // Min harus 8 char

  useEffect(() => {
        ValidatorForm.addValidationRule('isPassword', (value) => {
          if (strongRegex.test(value) || value.length === 0) {
                return true;
          }
                return false;
          });
  },[]);

  useEffect(() => {
    ValidatorForm.addValidationRule('isNewPassword', (value) => {
      if (strongRegex.test(value) || value.length === 0) {
            return true;
      }
            return false;
      });
});

const onChangePassword = (e) => {
  const password = e.target.value;
  setPassword(password);
  // console.log(password)
};

const onChangeNewPassword = (e) => {
  const newPassword = e.target.value;
  setNewPassword(newPassword);
  // console.log(password)
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const handleClickShowNewPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownNewPassword = (event) => {
  event.preventDefault();
};

  const paperStyle = {
    padding: "13px 20px",
    height: 400,
    width: 720,
  };

const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);

    // DI sini muncul notif alert nya

    // setNotify({
    //   isOpen: true,
    //   message: 'Password Successfully Changed',
      
    // })
    
  };

  const handleModal2 = () => {

    const upData = {  
                      email : `${accEmail}`,
                      password : `${newPassword}` };
    
    axios.put(API_URL + `auth/update/${idAcc}`, upData) 
    .then(response => {

          if (response.status === 201 ){
          setOpen(!open)
          setNotify({
          isOpen: true,
          message: `${response.data.message} Password Successfully Changed !`,
        }) 
        (setTimeout(function(){ window.location.reload(); }, 2000))  }
        else {
          setOpen(!open)
        setNotifyError({
          isOpen: true,
          message: `${response.data.message}, Your Old Password Didnt Match !`,
        })  }
        
      })  
        // console.log("cobaresponya",response.data.data )
        .catch(error => {
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });



    // setOpen(!open);

    // // DI sini muncul notif alert nya

    // setNotify({
    //   isOpen: true,
    //   message: 'Password Successfully Changed',
      
    // })
    
  };

  // const updateUserInfo = () => {
  //   return axios.put(API_URL + `${idAcc}`, { headers: authHeader() },
    
  //   );
  // }
  // console.log ("adadadad",axios.put(API_URL + `auth/update/${idAcc}`) )
  const updateUserInfo = () => {
    const upData = {  first_name : `${accFirstName}`,
                      last_name : `${accLastName}`,
                      email : `${accEmail}`,
                      phone_number : `${accPhoneNumber}`, };

  // const updateUserInfo = (accFirstName, accLastName, accEmail, accPhoneNumber) => {
    
    axios.put(API_URL + `auth/update/${idAcc}`, upData) 
    .then(response => 
          response.status === 201 ? 
          setNotify({
          isOpen: true,
          message: `${response.data.message} Data Profile Have Been Updated !`,
        }) 
        (setTimeout(function(){ window.location.reload(); }, 2000))
        :
        setNotifyError({
          isOpen: true,
          message: `${response.data.message}, Data Profile Haven't been Updated !`,
        })
        
        )
        // console.log("cobaresponya",response.data.data )
        .catch(error => {
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
      // first_name : `${accFirstName}`,
      // last_name : `${accLastName}`,
      // email : `${accEmail}`,
      // phone_number : `${accPhoneNumber}`,
      // password : `${accPas}`,
      // confirmPassword,
    
    //    setNotify({
    //   isOpen: true,
    //   message: 'Data Profile Have Been Updated !',
      
    // })
  };

          // console.log("cobaresponya", resUpdate )


  //   setNotify({
  //     isOpen: true,
  //     message: 'Data Profile Have Been Updated !',
      
  //   })
    
  // };



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
  


const [notify, setNotify] = useState({isOpen:false, message:'', type:''})

const [notifyError, setNotifyError] = useState({isOpen:false, message:'', type:''})

  
const [modalStyle] = useState(getModalStyle);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  
  
  const useStyles = makeStyles((theme) => ({
    style2: {
      marginLeft: "1px",
      color: "#5DEF78",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",

      [theme.breakpoints.down("lg")]: {
        color: "#5DEF78",
      },
    },
    sizeText: {
      marginBottom: "30px",
        width:"300px",

      [theme.breakpoints.down("lg")]: {
        marginBottom: "30px",
        width:"300px"
      },
    },
    sizeNewPass: {
      width:"300px",
      // marginBottom: "10px",

      [theme.breakpoints.down("lg")]: {
        // marginBottom: "30px",
        width:"300px"
      },
    },
    style1: {
      background: "black",
      borderRadius: 3,
      border: 0,
      backgroundColor: "#1e1e1e", 
      color: "white",
      height: 48,
      float: "right",
      marginTop: "25px",
      marginRight: "1px",
      [theme.breakpoints.down("lg")]: {
        backgroundColor: "#1e1e1e", 
        color: "white"
      },
      paperModal: {
        width: 875,
        height: 1000,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid ",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
          [theme.breakpoints.down('lg')]: {
            position: "absolute",
            width: 700,
            height: 600,
            backgroundColor: theme.palette.background.paper,
            border: "2px solid ",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          }
      },
    },

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

  }));
  
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
        <div 
          style={{fontSize:'25px', fontWeight:'600'}}
          >Change Password
          
          <CloseIcon onClick={handleModal}
          style={{marginLeft:'80px', marginTop:'1px'}}/>
          <hr style={{width:'300px'}}/>
        </div>
      
      <div style={{ paddingTop: "30px" }}>
                  <ValidatorForm
                    // className={classes.form}
                    useRef="form"
                    onSubmit={handleModal2}
                    onError={errors => console.log(errors)}
                    >
                  <div>
                  <p style={{color: 'white', marginTop:1}}>{accEmail}</p>

                      <TextValidator
                          variant="outlined"
                          size="normal"
                          label="Old Password" // di TextField atau TextValidator sudah berfungsi sekaligus jadi place holder
                          // margin="normal"
                          type={values.showPassword ? 'text' : 'password'}
                          className={classes.sizeText}
                          required
                          // fullWidth
                          validators={['required', 'isPassword']}
                          errorMessages={['this field is required', 'At least min 1 uppercase, 1 lowercase, 1 numeric and 1 symbol, min 8 Char']}
                          onChange={onChangePassword}
                          id="outlined-adornment-password"
                          name="password"
                          value={password}
                              // **********Khusus untuk buat password jadi Hidden Password**********
                              // untuk bahan import hidden password liat di bagian atas
                          InputProps={{
                            endAdornment:(
                                <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                    >
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                              // ********End Khusus untuk buat password jadi Hidden Password**********
                      />
                     

                      {/* <TextField
                      fullWidth
                      label="Old Password*"
                      placeholder="Type Your Old Password"
                      multiline
                      variant="outlined"
                      style={{ width: 300, paddingBottom: 40 }}
                      />  */}
                  </div>

                  <div>
                      <TextValidator
                          variant="outlined"
                          size="normal"
                          label="New Password" // di TextField atau TextValidator sudah berfungsi sekaligus jadi place holder
                          // margin="normal"
                          type={values.showPassword ? 'text' : 'password'}
                          className={classes.sizeNewPass}
                          required
                          // fullWidth
                          validators={['required', 'isNewPassword']}
                          errorMessages={['this field is required', 'At least min 1 uppercase, 1 lowercase, 1 numeric and 1 symbol, min 8 Char']}
                          onChange={onChangeNewPassword}
                          id="outlined-adornment-password"
                          name="password"
                          value={newPassword}
                              // **********Khusus untuk buat password jadi Hidden Password**********
                              // untuk bahan import hidden password liat di bagian atas
                          InputProps={{
                            endAdornment:(
                                <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowNewPassword}
                                      onMouseDown={handleMouseDownNewPassword}
                                      edge="end"
                                    >
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                )
                            }}
                              // ********End Khusus untuk buat password jadi Hidden Password**********
                      />

                      {/* <TextField
                      fullWidth
                      id="outlined-textarea"
                      label="New Password*"
                      placeholder="Make Your New Password"
                      multiline
                      variant="outlined"
                      style={{ width: 300 }}
                      /> */}
                  </div>

                  <div>
                      <Button 
                      // onClick={handleModal2}
                      type="submit"
                      variant="contained"
                      style={{backgroundColor: "#1e1e1e", color: "white"}}
                      className={classes.style1}
                      >Change
                      </Button>
                      {/* <Notification
                        notify={notify}
                        setNotify={setNotify}
                        /> */}
                  </div>
                  </ValidatorForm>
                  
      </div>
    </div>
  );

  return (
    <div
      style={{ display: "flex", width: 500, paddingLeft: 20 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // border: "1px solid black",
        }}
      >
                  <div >
                      <Notification
                              style={{paddingLeft:500}}
                              notify={notify}
                              closeNotify={closeNotify}
                              />
                  </div>

                  {/* <div>
                      <NotifError
                      style={{paddingLeft:500}}
                      notify={notifyError}
                      closeNotify={closeNotifyError}
                      />
                  </div> */}
        <div>
          <Grid>
            <Paper style={paperStyle}>
              <Grid>
              
                <h5 style={{ fontSize: "22px" }}>Account Details</h5>
                
                <div style={{ fontSize: "13px" }}>
                  Here's your account details. Tap to make changes.
                </div>

                <div style={{ paddingTop: "60px" }}>
                  <div>
                    <TextField
                      id="outlined-textarea"
                      label="Fisrt Name"
                      placeholder="First Name"
                      multiline
                      variant="outlined"
                      onChange={onChangeFirstName}
                      value={accFirstName}
                      style={{ width: 300 }}
                    />

                    <TextField
                      style={{ width: 300, marginLeft: 80 }}
                      id="outlined-textarea"
                      label="Last Name*"
                      placeholder="Last Name"
                      multiline
                      variant="outlined"
                      onChange={onChangeLastName}
                      value={accLastName}
                    />
                  </div>

                  <div style={{ marginTop: 30 }}>
                    <TextField
                      id="outlined-textarea"
                      disabled
                      label="Email*"
                      placeholder="Email"
                      multiline
                      variant="outlined"
                      onChange={onChangeEmail}
                      value={accEmail}
                      style={{ width: 300 }}
                    />

                    <TextField
                      style={{ width: 300, marginLeft: 80 }}
                      id="outlined-textarea"
                      label="Mobile Number"
                      placeholder="Mobile Number"
                      multiline
                      variant="outlined"
                      onChange={onChangePhoneNumber}
                      value={accPhoneNumber}
                    />
                  </div>
                </div>

                <div>
                  
                  <u
                  onClick={handleModal}
                  className={classes.style2}
                  >
                    Change Password
                  </u>
                  
                  <Button
                    style={{backgroundColor: "#1e1e1e", color: "white"}}
                    onClick={updateUserInfo}
                    // type="submit"
                    variant="contained"
                    className={classes.style1}
                  >
                    Save Changes
                  </Button>

                </div>

                <Modal className={classes.modal}
                open={open}
                onClose={handleModal}
              >
                {body}
              </Modal>
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;

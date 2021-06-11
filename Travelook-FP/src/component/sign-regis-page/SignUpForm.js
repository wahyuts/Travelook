import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth";  // ini itu ambil dari action
import OnOffModal from '../store/OnOffModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// ini import untuk hidden password



import IconButton from '@material-ui/core/IconButton';


import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: 0,
    marginBottom: 10,
    [theme.breakpoints.up('xl')]: {
      marginTop: 0,
      marginBottom: 10,
      height:40,
    }
    // margin: theme.spacing(3, 0, 2),
  },
  sizeText: {
    // height:300,
    [theme.breakpoints.up('xl')]: {
      height:60,
    }
  },
  maximumWidth: {
    maxWidth:450,
    [theme.breakpoints.up('xl')]: {
      maxWidth:600,
    }
  }
}));

export default function SignUp(props) {

  const {RegisSuccessfullTrue,RegisSuccessfullFalse} = OnOffModal();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [toastCont, setToastCont] = useState(false);


  // const [successful, setSuccessful] = useState(false);


  const classes = useStyles();
  const notify2 = () => toast.error( <p style={{fontSize:17, paddingTop:15}}><ErrorOutlineIcon style={{marginBottom:4}}/> Can't register because the email has been used!</p>,{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,

  });
  const notify3 = () => toast.success( <p style={{fontSize:17, paddingTop:15}}><CheckCircleOutlineIcon style={{marginBottom:4}}/> Register sucess! please sign in with your new account!</p>,{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,

  });

  // import untuk hidden password
//   const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

    // confirmPassword: '',
    // showConfirmPassword: false,
  });


  // const [valuesConfirmPassword, setValuesConfirmPassword] = React.useState({
  //   confirmPassword: '',
  //   showConfirmPassword: false,
  // });


  // const [loading, setLoading] = useState(false);
  // let [error, setError] = useState("");

  const { isLoggedIn } = useSelector(state => state.redAuthSignInRegis);
  const { message } = useSelector(state => state.reducerMessage);
  const dispatch = useDispatch();  //dispatch sudah di assign ke useDispatch nya redux...jadi pake dispatch sama aja pake useDispacth
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  // let reqPass1 = new RegExp("(?=.*[A-Z])"); // Satu huruf besar
  // let reqPass2 = new RegExp("(?=.*[a-z])"); // Satu huruf kecil
  // let reqPass3 = new RegExp("(?=.*[0-9])"); // Satu angka
  // let reqPass4 = new RegExp("(?=.*[!@#\$%\^&\*])"); // Satu char special
  // let reqPass5 = new RegExp("(?=.*[0-9])"); // Satu angka
  // let reqPass6 = new RegExp("(?=.{8,})"); // Min harus 8 char
  // console.log("beneran message asli", message)
  useEffect(() => {
        ValidatorForm.addValidationRule('isPassword', (value) => {
          if (strongRegex.test(value) || value.length === 0) {
                return true;
          }
                return false;
          });
  },[]);

  useEffect(() => {
    ValidatorForm.addValidationRule('samePassword', (value) => {
      if (value !== password) {
            return false;
      }
            return true;
      });
});

  const onChangeFirstName = (e) => {
    const first_name = e.target.value;
    setFirstName(first_name);
    // console.log(email)
  };

  const onChangeLastName = (e) => {
    const last_name = e.target.value;
    setLastName(last_name);
    // console.log(email)
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    // console.log(email)
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    // console.log(password)
  };

  // console.log("password", password)

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    // console.log(password)
  };

  // const popClose = (message) => {
  //   message.close()
  //   // console.log(password)
  // };

  // console.log("confirmPassword", confirmPassword)

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    // setValuesConfirmPassword({ ...valuesConfirmPassword, showConfirmPassword: !valuesConfirmPassword.showConfirmPassword });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const redirectUserLogin = () => {
    <Redirect to="/user-signin" />;
  };
  // const API_URL = "https://travelook.gabatch11.my.id/auth/"

  const history = useHistory();
  const goToSignInPage = () => history.push("/user-signin");

  const handleRegister = () => {
      
    RegisSuccessfullFalse();
    dispatch(register(first_name, last_name, email, password, confirmPassword))
      .then( 
            (e) => {
            // console.log("e", e);
            if(e !== undefined) {
              notify2()
              RegisSuccessfullFalse();
                // console.log("e", e);
            } else{
              return(
                  notify3(),
                  RegisSuccessfullTrue(),
                  setTimeout(function(){ goToSignInPage(); }, 3000)
                  
                  // <Redirect to="/user-signin" />
                  )
            }
        })
        .catch(() => {
          RegisSuccessfullFalse();
          
        });
  };

  return (
    <Container component="main" className={classes.maximumWidth}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up 
        </Typography>

        <ValidatorForm
          className={classes.form}
          useRef="form"
          onSubmit={handleRegister}
          onError={errors => console.log(errors)}
        >
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            
              <TextValidator
                autoComplete="fname"
                name="first_name"
                size="small"
                value={first_name}
                variant="outlined"
                className={classes.sizeText}
                onChange={onChangeFirstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                validators={['required']}
                errorMessages={['this field is required']}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextValidator
                variant="outlined"
                size="small"
                onChange={onChangeLastName}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                validators={['required']}
                errorMessages={['this field is required']}
                name="last_name"
                value={last_name}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  size="small"
                  // margin="normal"
                  required
                  className={classes.sizeText}
                  onChange={onChangeEmail}
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={email}
                  name="email"
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                  autoComplete="email"
                  // autoFocus
                />
            </Grid>
            <Grid item xs={12}>

                <TextValidator
                    variant="outlined"
                    size="small"
                    label="Password" // di TextField atau TextValidator sudah berfungsi sekaligus jadi place holder
                    // margin="normal"
                    type={values.showPassword ? 'text' : 'password'}
                    className={classes.sizeText}
                    required
                    fullWidth
                    validators={['required', 'isPassword']}
                    errorMessages={['this field is required', 'The password must contain 1 uppercase, 1 lowercase, 1 numeric and 1 symbol, min 8 Char']}
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
            </Grid>

            <Grid item xs={12}>

                <TextValidator
                        variant="outlined"
                        size="small"
                        label="Confirm Password" // di TextField atau TextValidator sudah berfungsi sekaligus jadi place holder
                        // margin="normal"
                        type={values.showPassword ? 'text' : 'password'}
                        // type={valuesConfirmPassword.showConfirmPassword ? 'text' : 'confirmPassword'}
                        required
                        fullWidth
                        validators={['required', 'samePassword']}
                        errorMessages={['this field is required', 'Password have to be same']}
                        onChange={onChangeConfirmPassword}
                        id="outlined-adornment-confirm-password"
                        name="confirmPassword"
                        value={confirmPassword}
                            // **********Khusus untuk buat password jadi Hidden Password**********
                            // untuk bahan import hidden password liat di bagian atas
                        InputProps={{
                          endAdornment:(
                              <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                  >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    {/* {valuesConfirmPassword.showConfirmPassword ? <Visibility /> : <VisibilityOff />} */}
                                  </IconButton>
                              </InputAdornment>
                              )
                          }}
                            // ********End Khusus untuk buat password jadi Hidden Password**********
                    />
            </Grid>

          
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree with Whiteboard's term & conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // padding={0}
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#363636", color: "white"}}
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          
          {message && (
            <div className="form-group" style={{fontSize:14, textAlign:"center"}}>
              { message === "Can't Create User" ? 
                    <div className={ "alert alert-danger" } role="alert">                    
                        {`Can't register because the email has been used`}
                    </div>
                    : console.log(message) 
                    
              }
            </div>
          )}
            <ToastContainer style={{textAlign:"center"}}/>

        </ValidatorForm>
      </div>
      {/* <Box mt={5}>
        <Copyright />
      </Box> */}
    </Container>
  );
}
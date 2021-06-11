import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Linkk from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

// import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { login } from "../../actions/auth";  // ini itu ambil dari action
// import UserService from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import './SignInForm.css'
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
  sizeAvatar: {
    width:400,
    [theme.breakpoints.up('xl')]: {
      width:600,
    }
  },
  sizeText: {
    // height:300,
    [theme.breakpoints.up('xl')]: {
      height:80,
    }
  },
  btnGoogle: {
    maxWidth: 120, 
    maxHeight: 35, 
    minWidth: 120, 
    minHeight: 35, 
    marginRight:50, 
    fontSize:12,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 120, 
      maxHeight: 35, 
      minWidth: 120, 
      minHeight: 35, 
      marginRight:50, 
      fontSize:12
    }
  },
  btnFacebook: {
    maxWidth: 120, 
    maxHeight: 35, 
    minWidth: 120, 
    minHeight: 35, 
    fontSize:12,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 120, 
      maxHeight: 35, 
      minWidth: 120, 
      minHeight: 35, 
      fontSize:12
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('xl')]: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    }
  },
  submit: {
    marginTop: 0,
    marginBottom: 10,
    [theme.breakpoints.up('xl')]: {
      marginTop: 0,
      marginBottom: 10,
      height:46,
    }
    // margin: theme.spacing(3, 0, 2),
  },
  maximumWidth: {
    maxWidth:450,
    [theme.breakpoints.up('xl')]: {
      maxWidth:600,
    }
  },

}));

// Ini Const utk Hidden password

export default function InputAdornments(props) {

  const classes = useStyles();
  const notify = () => toast.error( <p style={{fontSize:17, paddingTop:15}}><ErrorOutlineIcon style={{marginBottom:4}}/> Wrong email or password!</p>,{
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,

  });

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 

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

  useEffect(() => {
        ValidatorForm.addValidationRule('isPassword', (value) => {
          if (strongRegex.test(value) || value.length === 0) {
                return true;
          }
                return false;
          });
  },[strongRegex]);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))
      .then( (e) => {
            console.log("e", e);
            if(e === undefined) {
              notify()
              // alert("pass salah")
              // return  
            } else{
              props.history.push("/");
              window.location.reload();
            }
        })
        .catch(() => {
          // setError(err);
          setLoading(false);
          // setError(err);
        });
  };


  console.log(isLoggedIn)

  if (isLoggedIn) {
      return <Redirect to="/" />      
  } 

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" className={classes.maximumWidth}> {/**className={classes.maximumWidth} */}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon className={classes.sizeAvatar}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate> */}

   {/***********************************Tambahan koding button fb google*************************************/}
          

          <div className="flexy">
                {/* <Grid container spacing={4}>
                    <Grid item xs={6}> */}
                        <Button
                            type="submit"
                            className={classes.btnGoogle}
                            style={{backgroundColor: "#363636", color: "white", minHeight: 41}}
                            // style={{maxWidth: '120px', maxHeight: '35px', minWidth: '120px', minHeight: '35px', marginRight:50, backgroundColor: "#363636", color: "white", fontSize:12}}
                            // fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            <img src="/images/Google-btn-logo.png" alt="" style={{width:30, paddingRight:10}}/> Google
                        </Button>
                    {/* </Grid>
                    <Grid item xs={6}> */}
                        <Button
                            className={classes.btnFacebook}
                            style={{backgroundColor: "#363636", color: "white", marginLeft:50, }}
                            type="submit"
                            // fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            <img src="/images/fb-btn-logo.png" alt="" style={{width:25, paddingRight:10}}/> Facebook
                        </Button>
                    {/* </Grid>
                </Grid> */}

            </div>
          {/* <Form */}
          <ValidatorForm
            className={classes.form}
            // ref={form}
            useRef="form"
            onSubmit={handleLogin}
            onError={errors => console.log(errors)}
          >

            
   {/***********************************Akhir Tambahan koding button fb google*************************************/}
          

         <FormLabel>
               Or use email to sign in
         </FormLabel>

          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextValidator
                      variant="outlined"
                      className={classes.sizeText}
                      // margin="normal"
                      required
                      // size="small"
                      onChange={onChangeEmail}
                      fullWidth
                      id="email"
                      label="Email Address"
                      value={email}
                      name="email"
                      validators={['required', 'isEmail']}
                      errorMessages={['this field is required', 'email is not valid']}
                      autoComplete="email"
                      autoFocus
                    />
                </Grid>

              {/* Ini Coding Hidden Password */}
              <Grid item xs={12}>
              <TextValidator
                  variant="outlined"
                  className={classes.sizeText}
                  label="Password" // di TextField atau TextValidator sudah berfungsi sekaligus jadi place holder
                  // margin="normal"
                  type={values.showPassword ? 'text' : 'password'}
                  required
                  // size="small"
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


{/* <Link to="/" style={{ textDecoration: 'none' }}> */}
          <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                style={{ backgroundColor: "#363636", color: "white"}}
                variant="contained"
                // color="palette.primary.dark"
                color="primary"
                // onClick={handleLogin}
                className={classes.submit}
              >
                Sign In
              </Button>
          </Grid>

        </Grid>

{/* </Link> */}


          <Grid container>

            <Grid item xs>
              <Linkk href="#" variant="body2">
                Forgot password?
              </Linkk>
            </Grid>
    
          </Grid>
              <ToastContainer style={{textAlign:"center"}}></ToastContainer>
            {/* {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )} */}
          </ValidatorForm>

        {/* </Form> */}
      </div>
      {/* <Box mt={8}>
        
      </Box> */}
    </Container>
  );
}
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { setOnlyGuest } from "../../actions/auth";


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "whitesmoke",
    border: '1px solid #ced4da',
    fontSize: 14,
    marginTop: '0px',
    marginBottom: '1px',
    height:"19px",
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
    marginTop:13.5,
    [theme.breakpoints.up('xl')]: {
      minWidth: 300
    }
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function GuestPicker() {

  const { getOnlyGuest } = useSelector(state => state.redOnlyGuest);
  const dispatch = useDispatch();


// export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [guest, setGuest] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    dispatch(setOnlyGuest(event.target.value))
    localStorage.setItem('guest', event.target.value)
    // setGuest(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // console.log("NUMBER GUEST",getOnlyGuest)




  return (
    <div>

      {/* <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-customized-select-native" style={{paddingBottom:10}}>Guest</InputLabel>
        <NativeSelect
          labelId="demo-customized-select-native"
          value={guest}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
                <option value={1}>Single</option>
                <option value={2}>1 guest</option>
                <option value={3}>2 guest</option>
                <option value={4}>3 guest</option>
                <option value={5}>4 guest</option>
                <option value={6}>5 guest</option>
        </NativeSelect>
      </FormControl> */}


      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Guest</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={getOnlyGuest}
          // value={guest}
          onChange={handleChange}
        >
          <MenuItem value={1}> <InsertEmoticonIcon style={{marginLeft:2,marginRight: 8,color:"orange"}}/> 1 guest</MenuItem>
          <MenuItem value={2}> <InsertEmoticonIcon style={{marginLeft:2,marginRight: 8,color:"orange"}}/> 2 guests</MenuItem>
          <MenuItem value={3}> <InsertEmoticonIcon style={{marginLeft:2,marginRight: 8,color:"orange"}}/> 3 guests</MenuItem>
          <MenuItem value={4}> <InsertEmoticonIcon style={{marginLeft:2,marginRight: 8,color:"orange"}}/> 4 guests</MenuItem>
          {/* <MenuItem value={5}>5 guests</MenuItem>
          <MenuItem value={6}>6 guests</MenuItem>
          <MenuItem value={7}>7 guests</MenuItem>
          <MenuItem value={8}>8 guests</MenuItem>
          <MenuItem value={9}>9 guests</MenuItem>
          <MenuItem value={10}>10 guests</MenuItem>
          <MenuItem value={"More than 10"}>More than 10</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
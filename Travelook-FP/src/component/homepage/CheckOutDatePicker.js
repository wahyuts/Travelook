// import 'date-fns';
// import { LocalizationProvider } from '@material-ui/pickers';
import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment"
import dateFormat from 'dateformat';
import EventIcon from '@material-ui/icons/Event';
import Icon from "@material-ui/core/Icon";
import { setCheckOutDate } from '../../actions/auth';
import { useDispatch, useSelector } from "react-redux";


// import moment from 'moment';

// import Moment from 'react-moment';
// date_create: moment().format("DD-MM-YYYY hh:mm:ss")
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 223.5,
    [theme.breakpoints.up('xl')]: {
      minWidth: 300,
    }
  },
}));


export default function CheckOutDatePicker() {

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(moment());

    // const convertDate = dateFormat(`${selectedDate}`, "yyyy/mm/dd")

    // console.log("tgl CHECKOUT", selectedDate)

    const [inputValue, setInputValue] = React.useState( moment().format("YYYY/MM/DD") );

    // console.log("tgl CHECKOUT DATE VAL", inputValue)

    const { getCheckOutDate } = useSelector(state => state.redCheckOutDate);
    const dispatch = useDispatch();


  // const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-18T21:11:54'));

  const handleDateChange = (date,value) => {
    localStorage.setItem('CheckOutDate', value)
    setSelectedDate(date);

    setInputValue(value)


    // dispatch(setCheckOutDate( value.moment().format("YYYY/MM/DD")));

    // setInputValue(value)
  };




  useEffect(() => {
    // localStorage.setItem('CheckOutDate', convertDate)
    setInputValue(localStorage.getItem('CheckOutDate'));
    dispatch(setCheckOutDate(localStorage.getItem('CheckOutDate')))
    // localStorage.setItem('CheckOutDate', inputValue)
      // dispatch(setCheckOutDate(inputValue));
  }, [localStorage.getItem('CheckOutDate')]);

  const simpenCheckoutDate = localStorage.getItem("CheckOutDate")
    // console.log("ffffffffff", simpenCheckoutDate )

    // console.log("get Checkout date", getCheckOutDate)

  

 

  const dateFormatter = str => {
    return str;
  };

  return (

    <MuiPickersUtilsProvider libInstance={moment} utils={DateFnsUtils}>
    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <Grid container justify="space-around">
            <KeyboardDatePicker

              autoOk={true}
              // showTodayButton={true}
              className={classes.formControl}
              disableToolbar
              size="small"
              variant="inline"
              format="yyyy/MM/dd"
              // format={selectedDate}
              // format="MM/dd/yyyy"
              margin="normal"
              id="checkOut"
            //   id="date-picker-inline"  (yang ini ori nya)
              label="Check-Out"
              value={inputValue}
              inputValue={inputValue}
              onChange={handleDateChange}
              keyboardIcon={<Icon><EventIcon style={{color: 'orange'}}/></Icon>}
              // KeyboardButtonProps={{
              //   'aria-label': 'change date',
              // }}
              // rifmFormatter={dateFormatter}
            />

          {/* <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          /> */}
        </Grid>
    </MuiPickersUtilsProvider>
    // </LocalizationProvider>
  );
}
// import 'date-fns';
// import { LocalizationProvider } from '@material-ui/pickers';
import React,{useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import dateFormat from 'dateformat';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { grey, orange } from "@material-ui/core/colors";
import EventIcon from '@material-ui/icons/Event';
import Icon from "@material-ui/core/Icon";
import { useDispatch, useSelector } from "react-redux";
import { setCekin } from '../../actions/auth';



import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers';
// import { black } from 'material-ui/styles/colors';


// export const customTheme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			main: 'orange',
// 		},
// 		secondary: {
// 			main: 'orange',
// 		},
// 	},
// })

export const customTheme = createMuiTheme({
	palette: {
		primary: grey,
   
	},
})

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


export default function CheckInDatePicker() {
    const dispatch = useDispatch();

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(moment());

    // const convertDate = dateFormat(`${selectedDate}`, "yyyy/mm/dd")

    const [inputValue, setInputValue] = React.useState( moment().format("YYYY/MM/DD") );

    const { getCekin } = useSelector(state => state.redCekin);


  // const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-18T21:11:54'));

  const handleDateChange = (date,value) => {
    localStorage.setItem('CheckIN-Date', value)
    setSelectedDate(date);
    setInputValue(value)
  };

  // console.log("CHECKIN-DATE",selectedDate )
  const dateFormatter = str => {
    return str;
  };

  // const [cekinDate, setCekinDate] = useState ("")

  useEffect(() => {
    // localStorage.setItem('CheckIN-Date', convertDate)
    setInputValue(localStorage.getItem('CheckIN-Date'));
    dispatch(setCekin(localStorage.getItem('CheckIN-Date')))
    // let dateCheckIn = new Date(localStorage.getItem('CheckIN-Date'))
    // setCekinDate(dateCheckIn)
    // localStorage.setItem('CheckIN-Date', inputValue)
    // localStorage.getItem('CheckIN-Date')

      // dispatch(setCheckOutDate(inputValue));
  }, [localStorage.getItem('CheckIN-Date')]);
// }, [localStorage.setItem('CheckIN-Date', convertDate)]);

    // console.log("SELSEL", inputValue)
    // console.log("tanggal cekin", cekinDate)
    // console.log("yuhuhuhu", getCekin)

  return (

    <MuiPickersUtilsProvider libInstance={moment} utils={DateFnsUtils}>
    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <Grid container justify="space-around" >
            {/* <MuiThemeProvider theme={customTheme} > */}
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
                    id="checkIn"
                    label="Check-In"
                    value={inputValue}
                    inputValue={inputValue}
                    onChange={handleDateChange}
                    keyboardIcon={<Icon><EventIcon style={{color: 'orange'}}/></Icon>}
                    // KeyboardButtonProps={{
                    //   'aria-label': 'change date',
                    // }}
                    // rifmFormatter={dateFormatter}
                  />
              
              {/* </MuiThemeProvider> */}

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
  
  );
}
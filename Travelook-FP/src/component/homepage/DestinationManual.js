import React, {useEffect, useState} from 'react';
import UserService from "../../services/user.service";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PlaceIcon from '@material-ui/icons/Place';


// cth nama action dari redux hooks
import { setDesti } from '../../actions/auth';
//********************************************** */

//pilihan penyambung antar komponent ke store state redux nya

// ini penyambung buat redux tanpa hooks
import {connect} from 'react-redux';
//************************************** */

// penyambung redux dengan hooks
import { useDispatch, useSelector } from "react-redux";
//******************************************************************** */
// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1280,
//     },
//   },
// });


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 223.5,
    [theme.breakpoints.up('xl')]: {
      minWidth: 300,
    }
  },
}));


//connect(mapStateToProps, mapDispatchToProps)(app)

// const mapStateToProps = state => {   //mapStateToProps Tugasnya untuk bilang kepada kita state yang mana yang kita perlu guanakan agar dikirim ke props
//   // INGAT state disini itu adalah initialState yang ada di reducer.js,..jadi silahkan rujuk kesana
//     return {
//         desti:state.searchDesti.desti   //searchField Pertama adalah nama property yang dihasilkan dari mapSateToProps jadi benernya nama boleh bebas                                  
//     }       
// }

// const mapDispatchToProps = (dispatch) =>  {   // dispatch ini pelatuk yg mentriger event actionnya dijalankan
//     return {   //onSearchchange ini nama fungsi buatan,..jadi bebas mo pake nama apa
//         handleChange:(event) => dispatch(setDesti(event.target.value))  //setSearhField ini nama action nya dan   (event.target.value)   ini adalah parameter text di setSearchField
//     }  
// }



function DestinationManual({destination}) {
  const classes = useStyles();

  // ini bagian redux with hooks nya dalam kasus call state dan penyambung ke state nya
  const { desti } = useSelector(state => state.redDestination);
  const dispatch = useDispatch();
//****************************************************************** */


  const tujuan = destination.map((user,i)=>({
        dest:destination[i].location.city
  }))

  // menyaring filter yang sama jadi satu satu  cth [3,3,3,4,4,5,1,1,2] jadi [1,2,3,4,5]
  const arr = tujuan.map((user,i)=>{
      const arr2 = tujuan[i].dest
      return arr2
  })

  const unique1 = [...new Set(arr)];
  unique1.unshift ("All");

  //**************************************************************************************** */


  // tesing console.log

  // console.log("uniq",unique1)
  // console.log("arr",arr)
  // console.log("desti", desti)
  //****************************************************************************************** */
  

  const [open, setOpen] = React.useState(false);

  
  const handleChange = (event) => {
      
    
      dispatch(setDesti(event.target.value));
  
    // dispatch(setDesti(event.target.value));  // line ini dispatch serDesti ini untuk trigger kirim data ke action nya
    // setDesti(event.target.value);         // jadi dispatch call setDesti dari action untuk mengirim  (event.target.value) ke reducers
  };                                         // dan reducer pun mengoper data nya ke state

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Destination</InputLabel>
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
          value={desti}
          onChange={handleChange}
        >

          {unique1.map((user,i)=>{
              return (
                <MenuItem value={unique1[i]} key={i} > <PlaceIcon style={{marginRight:10, color: "orange"}}/> {unique1[i]} </MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    </div>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(DestinationManual)

export default DestinationManual
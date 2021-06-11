import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget } from '../../actions/auth';

// import SliderPrice from './SliderPrice';
import './PriceRange.css'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  

  function valuetext(value) {
    return `${value}`;
  //   return `${value}°C`;
  }


const PriceRange = () => {

    const dispatch = useDispatch();

    const [value, setValue] = React.useState([30, 50]);

    const { getBudget } = useSelector(state => state.redBudget || []);


    const handleChange = (event, newValue) => {
        dispatch(setBudget(newValue));
        // setValue(newValue);
    };


// koding convert integer to string agar bisa jadi tipe rupiah di textboxnya,..khusus yang ini bagian low budget nya
    let lowBudget = getBudget[0]

    // dispatch(setLowBudget(value[0]));

    // console.log("lowbudget", getBudget[0])

    // console.log("lowbudget", getLowBudget)

    // let number_string = getLowBudget.toString(),
    //       sisa = number_string.length % 3,
    //       rupiah_low_budget = number_string.substr(0, sisa),
    //       ribuan = number_string.substr(sisa).match(/\d{3}/gi);

    let number_string = lowBudget.toString(),
          sisa = number_string.length % 3,
          rupiah_low_budget = number_string.substr(0, sisa),
          ribuan = number_string.substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah_low_budget += separator + ribuan.join ('.');
    }
//************************************************************************************************ */

// khusus yang ini bagian High budget nya
    let highBudget = getBudget[1]

    let number_stringxx = highBudget.toString(),
        sisaxx = number_stringxx.length % 3,
        rupiah_high_budget = number_stringxx.substr(0, sisaxx),
        ribuanxx = number_stringxx.substr(sisaxx).match(/\d{3}/gi);

    if (ribuanxx) {
        let separatorxx = sisaxx ? '.' : '';
        rupiah_high_budget += separatorxx + ribuanxx.join ('.');
    }

//***************************************************************************************************** */


    return(
        <div>
            <div className="disprice">
                <input className="aturlebar" type="textbox" name="lowPrice" value={`IDR ${rupiah_low_budget}`}  placeholder="Low Price"/>
                {/* <input className="aturlebar" type="textbox" name="lowPrice" value={`IDR ${value[0]}`}  placeholder="Low Price"/> */}
                <p className="pmargin">s/d</p>
                <input className="aturlebar" type="textbox" name="highPrice" value={`IDR ${rupiah_high_budget}`} placeholder="High Price" />
                {/* <input className="aturlebar" type="textbox" name="highPrice" value={`IDR ${value[1]}`} placeholder="High Price" /> */}
            </div>

            <Slider
                value={getBudget}
                onChange={handleChange}
                min={0}
                max={1500000}
                valueLabelDisplay="off"
                aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
            />
            {/* <SliderPrice/> */}
        </div>
        
    )
}

export default PriceRange
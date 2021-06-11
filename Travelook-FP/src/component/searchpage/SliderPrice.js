import React from 'react';
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

export default function SliderPrice() {
//   const classes = useStyles();
  const [value, setValue] = React.useState([30, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    {/* <div className={classes.root}> */}
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
    </div>
  );
}
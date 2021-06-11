import React, {useState, useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function StarRate({onChecking}) {
  const [value5, setValue5] = React.useState(5);
  const [value4, setValue4] = React.useState(4);
  const [value3, setValue3] = React.useState(3);
  const [value2, setValue2] = React.useState(2);
  const [value1, setValue1] = React.useState(1);

//   function getSelectedCheckboxValues(rating) {
//     const checkboxes = document.querySelectorAll(`input[name="${rating}"]:checked`);
//     let values = [];
//     checkboxes.forEach((checkbox) => {
//         values.push(checkbox.value);
//     });
//     console.log("coba value", values);
//     // return values;
// }

// const [valueChecking, setValueChecking] = useState ([])

// const onChecking = (event) =>{
//   const checkboxes = document.querySelectorAll(`input[name="${event.target.name}"]:checked`);
//     let values = [];
//     checkboxes.forEach((checkbox) => {
//               values.push(checkbox.value);
//     });
//      const resultValues = values.map(function (x) { 
//         return parseInt(x, 10); 
//     });
//       console.log("resssss", resultValues)
// };

// console.log("valueCek", valueChecking)

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Read only</Typography> */}
        <p><input type="checkbox" name="rating" value="5" onChange={onChecking} defaultChecked={false} /><Rating style={{marginLeft:10, marginTop:10}}name="read-only" value={value5} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="4" onChange={onChecking} defaultChecked={false} /><Rating style={{marginLeft:10}}name="read-only" value={value4} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="3" onChange={onChecking} defaultChecked={false} /><Rating style={{marginLeft:10}}name="read-only" value={value3} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="2" onChange={onChecking} defaultChecked={false} /><Rating style={{marginLeft:10}}name="read-only" value={value2} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="1" onChange={onChecking} defaultChecked={false} /><Rating style={{marginLeft:10}}name="read-only" value={value1} size="small" readOnly /></p>
        
        {/* <p><input type="checkbox" name="rating" value="star5" /><Rating style={{marginLeft:10, marginTop:10}}name="read-only" value={value5} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="star4" /><Rating style={{marginLeft:10}}name="read-only" value={value4} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="star3" /><Rating style={{marginLeft:10}}name="read-only" value={value3} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="star2" /><Rating style={{marginLeft:10}}name="read-only" value={value2} size="small" readOnly /></p>
        <p><input type="checkbox" name="rating" value="star1" /><Rating style={{marginLeft:10}}name="read-only" value={value1} size="small" readOnly /></p> */}
      </Box>
    </div>
  );
}
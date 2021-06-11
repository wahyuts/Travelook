import React from 'react';
import Box from '@material-ui/core/Box';
import CheckInDatePicker from '../homepage/CheckInDatePicker';
import CheckOutDatePicker from '../homepage/CheckOutDatePicker';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '20rem', height: '4rem' },
  borderColor: 'text.primary',
};

export default function BorderCard() {
  return (
    <Box display="grid" justifyContent="center">
      
      <Box border={1} {...defaultProps} />
      {/* <CheckInDatePicker />
      <CheckOutDatePicker /> */}
      {/* <Box borderTop={1} {...defaultProps} />
      <Box borderRight={1} {...defaultProps} />
      <Box borderBottom={1} {...defaultProps} />
      <Box borderLeft={1} {...defaultProps} /> */}
    </Box>
  );
}
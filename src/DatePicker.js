import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



function DateNav() {
  const current = new Date();
  var increment = current.getDate();
 
  const [date, setDate] = useState(increment);

  


  return (
    <h2><ArrowBackIosIcon onClick={() => setDate(date - 1)} ></ArrowBackIosIcon>
     {current.setDate(date)&&current.toDateString()}
     <ArrowForwardIosIcon onClick={() => setDate(date + 1) } ></ArrowForwardIosIcon>
    </h2>

  );
}

export default DateNav
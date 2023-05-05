import React from 'react';
import "./styles.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
export default function SelectDays({days,handleDaysChange,nopTag}){
 
  return (
    <div className='selectDays'>
      {!nopTag && <p style={{marginRight:"1rem" }}>Price Change in</p>}
        <Select
         sx={{
          height:"2rem",
          fieldset: {
            borderColor:"var(--white)",
          },
           color:"var(--white)",
          //  borderColor: "var(--white)",
          "& .MuiOutlineInput-notchedOutline":{
            borderColor:"var(--white)",
          },"& .MuiSvgIcon-root":{
            color:"var(--white)",
          },"&:hover":{
            "&& fieldset":{
              borderColor:"var(--white)",
            },
          }
         }}
        
          value={days}
          label="Days"
         onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
     
    </div>
  );
}
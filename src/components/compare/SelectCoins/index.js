import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../../function/get100Coins';
import { MenuItem, Select } from '@mui/material';
import "./styles.css"
const SelectCoins =({crypto1,crypto2,handleCoinChange})=> {
        const[allCoins,setAllCoins]=useState([]);
        const styles={
                  height:"2rem",
                  color:"var(--white)",
                  fieldset: {
                    borderColor:"var(--white)",
                  },
                  "& .MuiOutlineInput-notchedOutline":{
                    borderColor:"var(--white)",
                  },
                  "& .MuiSvgIcon-root":{
                    color:"var(--white)",
                  },
                  "&:hover":{
                    "&& fieldset":{
                      borderColor:"var(--white)",
                    },
                  },
                 };

                 useEffect(() => {
                  getData();
                 }, [])
                 async function getData(){
                  const myCoins=await get100Coins();
                 // console.log("-----------------mycoin------------------------------------")
                 // console.log(myCoins);
                  setAllCoins(myCoins);
                 }
                 
  return (
    <div className='coin-flex'>
    <p>First Coin</p>
    <Select
         sx={styles}
         value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
        >
        {allCoins?.filter((coin1)=>coin1.id!==crypto2).map((coin,i)=>(<MenuItem key={i} value={coin.id} >{coin.name}</MenuItem>))}
          
        </Select>
    <p>Second Coin</p>
    <Select
         sx={styles}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crypto2}
          label="Crypto 2"
         onChange={(event)=>handleCoinChange(event,true)}
        >
        {allCoins?.filter((coin2)=>coin2.id!==crypto1).map((coin,i)=>(<MenuItem value={coin.id} key={i} >{coin.name}</MenuItem>))}
         
        </Select>
    </div>
  )
}
export default SelectCoins;
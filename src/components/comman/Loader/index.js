import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'
import"./styles.css"
export const Loader = () => {
  return (
    <div className='loader-container'>
      <CircularProgress/>
    </div>
  )
}

import React from 'react'
import "./styles.css";
export const Button = ({text ,onClick ,outlined}) => {
  return (
    <div className={ outlined ? "outlined-btn" : "btn" } onClick={()=>onClick()}>
       {text}
    </div>
  )
}

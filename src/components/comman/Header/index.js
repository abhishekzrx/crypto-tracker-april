import React from 'react'
import StackedLineChartSharpIcon from '@mui/icons-material/StackedLineChartSharp';
import { Link } from 'react-router-dom'
import "./styles.css"
import TemporaryDrawer from './drawer'
import { Button } from '../Button'
export const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>
      <span style={{color:"var(--blue)"}}>Crypto</span>
         Tracker
         <span style={{color:"var(--blue)"}}>.</span>
       <StackedLineChartSharpIcon style={{color:"var(--blue)"}}/>
      </h1>

      <div className='links'>
        <Link to='/'>
           <p className='link'> Home </p>
        </Link>
        <Link to='/compare'>
           <p className='link'> Compare </p>
        </Link>
        <Link to='/watchlist'>
          {/* <p className='link'> Watchlist </p> */}
        </Link>
        <Link to='/Dashboard'>
          <Button 
           onClick={()=>console.log(" clicked ")} text={"Dashboard"}/>
        </Link>
      </div>
      <div className='mobile-drawer'>
          <TemporaryDrawer />
      </div>
    </div>
  )
}

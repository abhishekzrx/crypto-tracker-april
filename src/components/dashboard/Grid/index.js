import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
const Grid = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`Grid-container ${ coin.market_cap_change_percentage_24h < 0 && "Grid-container-red" }`}>
     <div className='info-flex'>
       <img src={coin.image} className='coin-logo' />
       <div className='name-col'>
         <p className='coin-symbol'>{coin.symbol}</p>
         <p className='coin-name'>{coin.name}</p>
       </div>
     </div>
     {
         coin.market_cap_change_percentage_24h > 0 ? 
          (<div className='chip-flex'>
          <div className='price-chip'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</div>
           <div className='icon-chip'>
              <TrendingUpRoundedIcon />
           </div>
          </div>
           ):
         ( <div className='chip-flex'>
            <div className='price-chip chip-red'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div> 
    )}
     <div className='info-container'>
        <h3 className='coin-price' 
        style={{color:coin.market_cap_change_percentage_24h < 0 ? "var(--red)":"var(--green)"}}>
        ${coin.current_price.toLocaleString()}
        </h3>
        <p className='total-vol'>Total volume :${coin.total_volume.toLocaleString()}</p>
        <p className='total-cap'>Market Cap :${coin.market_cap.toLocaleString()}</p>
     </div>
    </div>
    </Link>
  )
}

export default Grid

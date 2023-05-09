import React from 'react'
import"./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import  {convertNumber}  from '../../../function/convertNumber';
import { Link } from 'react-router-dom';
const List = ({coin}) => {
  return (
   <Link to={`/coin/${coin.id}`}>
     <tr className='list-row'>
      <Tooltip title="coinlogo">
           <td className='td-image'>
                <img src={coin.image} className='coin-logo' />
            </td>
      </Tooltip>
       <td>
         <div className='name-col'>
         <Tooltip title="coin-symbol">
            <p className='coin-symbol'>{coin.symbol}</p>
          </Tooltip>
          <Tooltip title="coin-name">
            <p className='coin-name'>{coin.name}</p>
          </Tooltip>
         </div>
       </td>
       <Tooltip title=" % Price change in 24h">
     {
         coin.market_cap_change_percentage_24h > 0 ? 
          (<td className='chip-flex'>
          <div className='price-chip'>
            {/* {coin.market_cap_change_percentage_24h}% */}
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </div>
           <div className='icon-chip td-icon'>
              <TrendingUpRoundedIcon />
           </div>
          </td>
           ):
         ( <td className='chip-flex'>
            <div className='price-chip chip-red'>
              {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red td-icon">
              <TrendingDownRoundedIcon  />
            </div>
          </td>)
         
    }
    </Tooltip>
    <Tooltip title="Current price">
         <td>
            <h3 className='coin-price td-center-align' 
            style={{color:coin.market_cap_change_percentage_24h < 0 ? "var(--red)":"var(--green)"}}>
             $ {coin.current_price.toLocaleString()}
             {/* ${coin.current_price.toLocaleString()} 27 */}
            </h3>
         </td>
     </Tooltip>
     <Tooltip title="Total volume">
         <td>
             <p className='total-vol td-right-align td-total-vol'>
                $ {coin.total_volume.toLocaleString()}
                {/* {coin.total_volume.toLocaleString()} 27*/}
             </p>
        </td>
        </Tooltip>
        <Tooltip title="Market Cap">
        <td className='desktop-td-mkt'>
            <p className='total-cap td-right-align'>
               $ {coin.market_cap.toLocaleString()}
               {/* ${coin.market_cap.toLocaleString()} */}
            </p>
       </td>
       </Tooltip>
       <Tooltip title="Market Cap">
       <td className='mobile-td-mkt'>
            <p className='total-cap td-right-align'>
               $ {convertNumber(coin.market_cap)}
            </p>
       </td>
       </Tooltip>
     </tr>
     </Link>
  )
}

export default List;
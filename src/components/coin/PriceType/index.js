import "./styles.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function TogglePriceType({pricetype,handlePriceTypeChange}) {
 
  return (
         <div className="toggle-button">
    <ToggleButtonGroup
      value={pricetype}
      exclusive
      onChange={handlePriceTypeChange}
      size="small"
      sx={{
         "& .Mui-selected":{
                  color:"var(--blue) !important",
         },
         borderColor:"var(--blue)",
         border:"unset !important",
         "& .MuiToggleButtonGroup-grouped":{
                  border:"1px solid !important",
                  borderColor:"unset",
                  color:"var(--blue)",
         },
         "& .MuiToggleButton-standard":{
                  color:"var(--blue)",
         },
      }}
    >
      <ToggleButton value="prices" className="toggle-btn" >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" className="toggle-btn" >
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-btn" >
       Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
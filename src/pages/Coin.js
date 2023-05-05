import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header } from '../components/comman/Header';
import { Loader } from '../components/comman/Loader';
import { coinObject } from '../function/convertObject';
import List from '../components/dashboard/List';
import CoinInfo from '../components/coin/CoinInfo';
import { getCoinData } from '../function/coinData';
import { getCoinPrices } from '../function/getCoinPrices';
import LineChart from '../components/coin/LineChart';
import SelecDays from '../components/coin/selectDays';
import { settingChartData } from '../function/settingChartData';
import { convertDate } from '../function/convertDate';
import TogglePriceType from '../components/coin/PriceType';
function CoinPage(){
         const {id}=useParams();
         const [isLoading,setLoading]=useState(true)
         const [coinData,setCoinData]=useState({})
         const [days,setDays]=useState(30);
         const [chartData,setChartData]=useState({})
         const [pricetype, setpriceType] = useState('prices');
         useEffect(() => {
                  if(id){
                      getData();  
                  }   
         },[id])
         
        async function getData(){
         const data= await getCoinData(id);
          if(data){
            console.log("Cin data",data);
                coinObject(setCoinData,data);
                const prices=await getCoinPrices(id,days,pricetype)
                  if(prices.length>0){
                      settingChartData(setChartData,prices); 
                      setLoading(false);
          }
        } 
      }
        const handleDaysChange = async(event) => {
          setLoading(true);
          setDays(event.target.value);
          console.log(event.target.value);
          const prices= await getCoinPrices(id,event.target.value,pricetype);
          if(prices.length>0){
             settingChartData(setChartData,prices);//change
             setLoading(false);
          }
        };  
        
      const handlePriceTypeChange = async (event, newType) => {
          setLoading(true);
               setpriceType(newType);
               console.log(newType)
               const prices= await getCoinPrices(id,days,newType);
               if(prices.length>0){
                  settingChartData(setChartData,prices);
                  setLoading(false);
               }
        };

  return (
    <div>
         <Header/>
         {
             isLoading ?( <Loader /> ):
         (<>
               <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
                  <List coin={coinData} />
                </div>
               <div className='grey-wrapper'>
              
                  <SelecDays days={days} handleDaysChange={handleDaysChange} nopTag={false}/>
              
               <TogglePriceType pricetype={pricetype} handlePriceTypeChange={handlePriceTypeChange}/>
                 <LineChart 
                 chartData={chartData} 
                 pricetype={pricetype} />
                </div>
                <div className='grey-wrapper'>
                <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                </div>
          </>)
          }
        
    </div>
  )
}
export default CoinPage;
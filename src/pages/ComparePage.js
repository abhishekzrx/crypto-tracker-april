import React, { useEffect, useState } from 'react'
import { Header } from '../components/comman/Header'
import SelectCoins from '../components/compare/SelectCoins'
import SelectDays from '../components/coin/selectDays';
import { coinObject } from '../function/convertObject';
import { settingChartData } from '../function/settingChartData';
import { Loader } from '../components/comman/Loader';
import { getCoinData } from '../function/coinData';
import { getCoinPrices } from '../function/getCoinPrices';
import List from '../components/dashboard/List';
import CoinInfo from '../components/coin/CoinInfo';
import LineChart from '../components/coin/LineChart';
import TogglePriceType from '../components/coin/PriceType';

const ComparePage = () => {
  const [crypto1,setcrypto1]=useState("bitcoin");
  const [crypto2,setcrypto2]=useState("ethereum");
  const [crypto1Data,setcrypto1Data]=useState({});
  const [crypto2Data,setcrypto2Data]=useState({});
  const [isLoading,setLoading]=useState(true);
  const [days,setDays]=useState(30);
  const [priceType,setPriceType]=useState('prices');
  const [chartData,setChartData]=useState({});

//   async function handleDaysChange(event){
//                   setLoading(true);
//                   setDays(event.target.value);
//                   const prices1=await getCoinPrices(crypto1,event.target.value,priceType);
//                   const prices2=await getCoinPrices(crypto2,event.target.value,priceType);
//                   console.log("Both pricesFetched",prices1,prices2)
//                   settingChartData(setChartData,prices1,prices2);
//                   setLoading(false);
//                 }
async function handleDaysChange(event){
  setLoading(true)
  setDays(event.target.value);
  const prices1=await getCoinPrices(crypto1,event.target.value,priceType);
             const prices2=await getCoinPrices(crypto2,event.target.value,priceType);
             //if(prices1.length> 0 && prices2.length>0){
                settingChartData(setChartData,prices1,prices2);
  setLoading(false)
}

              const handlePriceTypeChange = async (event, priceType) => {
                  setLoading(true);
                  setPriceType(priceType);
                       console.log(priceType)
                       const prices1=await getCoinPrices(crypto1,days,priceType);
                       const prices2=await getCoinPrices(crypto2,days,priceType);
                       if(prices1.length> 0 && prices2.length>0){
                          settingChartData(setChartData,prices1,prices2);
                          setLoading(false);
                       }
                };

  useEffect(()=>{
    getData();
  },[])


  async function getData(){
                       setLoading(true);
                       const data1= await getCoinData(crypto1);
                 if(data1){
                        const data2= await getCoinData(crypto2);
                        coinObject(setcrypto1Data,data1);   
                  if(data2){
                         coinObject(setcrypto2Data,data2);  
                         const prices1=await getCoinPrices(crypto1,days,priceType);
                         const prices2=await getCoinPrices(crypto2,days,priceType);
                         console.log("Both pricesFetched",prices1,prices2)
                         settingChartData(setChartData,prices1,prices2);  
                         setLoading(false);
                   }
    }
  }

  const handleCoinChange= async(event,iscoin2)=>{
                  setLoading(true);
                  if(iscoin2){
                            setcrypto2(event.target.value)
                            const data= await getCoinData(event.target.value);
                            coinObject(setcrypto2Data,data);
                            const prices1=await getCoinPrices(crypto1,days,priceType)
                            const prices2=await getCoinPrices(crypto2,days,priceType)
                           if(prices1.length>0 && prices2.length>0){
                                  console.log("Both pricesFetched",prices1,prices2)
                                  settingChartData(setChartData,prices1,prices2); 
                                  setLoading(false);
                                }  
                           }
              else{
                         setcrypto1(event.target.value)
                         const data= await getCoinData(event.target.value);
                         const prices1=await getCoinPrices(crypto1,days,priceType)
                         coinObject(setcrypto1Data,data);
                         settingChartData(setChartData,prices1); 
                         setLoading(false);                           
        }      
  };

  return (
    <div>
       <Header/>
       {
             isLoading ?( <Loader /> ):(
        <>
           <div className='coin-days-flex'>
           <SelectCoins 
                crypto1={crypto1}
                crypto2={crypto2} 
                handleCoinChange={handleCoinChange} />
            <div className='day-box'>
            <SelectDays  
                days={days}
                handleDaysChange={handleDaysChange} 
                nopTag={true}/>
            </div> 
           </div>
           <div className='grey-wrapper'>
                  <List coin={crypto1Data} />
          </div>
           <div className='grey-wrapper'>
                  <List coin={crypto2Data} />
          </div>
          <div className='grey-wrapper'>
         <div style={{padding:"2rem"}}>
         <TogglePriceType 
          pricetype={priceType} 
          handlePriceTypeChange={handlePriceTypeChange} />
         </div>
          <LineChart 
                chartData={chartData} 
                pricetype={priceType} 
                multiAxis={true}/>
          </div> 
          
          <div className='grey-wrapper'>
             <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
          </div>
          <div className='grey-wrapper' >
             <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/>
          </div>
       </>)}
    </div>
  )
  }


export default ComparePage
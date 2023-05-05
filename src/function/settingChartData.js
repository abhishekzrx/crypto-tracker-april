import { convertDate } from "./convertDate"
export const settingChartData=(setChartData,prices1,prices2)=>{
  if(prices2){
    setChartData({
      labels: prices1.map((date)=>convertDate(date[0])), /// x-axis data ,represent prices
      datasets: [{
           label:"First coin",
            data:prices1.map((price)=>price[1]),//this is the y-axis data that represent the ------left
            borderColor: "#3a88e9",
            borderWidth:1,
            fill:false,
            tension:0.25,
            pointRadius:0,
            yAxisID: 'crypto1'
           },
           {
            label:"Second coin",
            data:prices2.map((price)=>price[1]),//this is the x-axis having price/vol/marketcap
            borderColor:"#61c96f",
            borderWidth:1,
            fill:false,
            tension:0.25,
            pointRadius:0,
            yAxisID: 'crypto2'
          }
        ]
      })
     }else{ // this is only for when we have  only  one coin selection
         setChartData({
                  labels: prices1.map((date)=>convertDate(date[0])),   // this is x axis
                  datasets: [{  
                                                           //this is y axis
                        data:prices1.map((price)=>price[1]),
                        borderColor: "#3a88e9",
                        borderWidth:2,
                        fill:false,
                        tension:0.125,
                        pointRadius:2,
                       
                        pointHoverRadius: 10,
                        backgroundColor: 'rgba(58, 128, 233, 0.1)',
                        yAxisID: 'crypto1'
                      }]})
          }
}

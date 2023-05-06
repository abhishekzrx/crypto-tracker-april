import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto" //don't get ride of this
import { convertNumber } from "../../../function/convertNumber";
import { Troubleshoot } from "@mui/icons-material";
function LineChart({chartData,pricetype,multiAxis}){
 
         const options={
                  Plugin:{
                           legend:{
                                    display:multiAxis ? true:false,
                                  },
                         },
                  responsive:true,
                  inteaction:{ 
                           mode:"index",
                           intersect:true,
                  },
                   scales:{
                           crypto1: {
                              type: 'linear',
                           display: true,
                          position: 'left',
                             ticks: {
                                     callback: function(value, index, ticks) {

                                    if(pricetype="prices"){ 
                                          return '$' + value.toLocaleString();}
                                    else{
                                          return '$' + convertNumber(value);
                                     }
                                   }
                               }
                           },
                            crypto2: {
                               type: 'linear',
                           display: multiAxis?true:false,
                            // display:true,
                           position: 'right',
                              ticks: {
                                      callback: function(value, index, ticks) {
                                       if(pricetype=="prices") { 
                                         return '$' + value.toLocaleString();}
                                     else{
                                             return '$' + convertNumber(value);
                                         }
                                   }
                               }
                           }
                  }
         };
         return <Line data={chartData} options={options} multiAxis={false}/>

}
export default LineChart;
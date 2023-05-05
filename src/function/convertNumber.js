 export const convertNumber=(number) => {
         const numberWithCommas=number.toLocaleString();
         var arr=numberWithCommas.split(",");
         if(arr.length==5){
                  //Trillions 5,000,000,000,000
                  return arr[0]+"."+arr[1].slice(0,2)+"T";
         }
        else if(arr.length==4){
                  //Bllions 5,000,000,000
                  return arr[0]+"."+arr[1].slice(0,2)+"B";
         }
        else if(arr.length==3){
                  //Millions 5,000,000,000
                  return arr[0]+"."+arr[1].slice(0,2)+"M";
         }
        else if(arr.length==2){
                  //tHAUSAND 5,000,000,000
                  return arr[0]+"."+arr[1].slice(0,2)+"K";
         }else{
                  //hundred
                  return number;
         }
}


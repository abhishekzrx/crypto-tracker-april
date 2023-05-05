import {  toast } from 'react-toastify';
export const removeFromWatchList=(id)=>{
if(window.confirm("Are you sure you want to remove this coin")){
         let items=localStorage.getItem("watchlist");
         let arr=JSON.parse(items);
         localStorage.setItem(
                  "watchlist",
                  JSON.stringify(arr.filter((item)=>item !=id))
                  );
                  toast.success(
                           `&{id.slice(0,1).toUpperCase() + id.slice(1)} removed from watchlist!`
                  );
}else{
         toast.error("couden't remove the coin from watchlist !" );
}
  
};
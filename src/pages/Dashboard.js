import React, { useState,useEffect } from 'react'
import { Header } from '../components/comman/Header'
import TabsComponent from '../components/dashboard/Tabs/'
import axios from 'axios';
import Search from '../components/dashboard/Search';
import PaginationComponent from '../components/dashboard/Pagination';
import { Loader } from '../components/comman/Loader';
import { BackToTop } from '../components/comman/BackToTop';
import { get100Coins } from '../function/get100Coins';
const DashboardPage = () => {
const [coins,setCoins]=useState([]);
const [paginatedCoins,setPaginatedCoins]=useState([]);
const [search,setSearch]=useState("")
const [page, setPage] = useState(1);
const [isLoading,setLoading]=useState(true);

const handlePageChange = (event, value) =>{
                        setPage(value);
                         var priviousIndex=(value-1)*10;
                         setPaginatedCoins(coins.slice(priviousIndex,priviousIndex+10))
                         };
//search function
const onSearchChange=(e)=>{
  setSearch(e.target.value);
  //console.log(e.target.value)
}
const filteCoins=coins.filter(
  (item)=>item.name.toLowerCase().includes(search.toLowerCase())||item.symbol.toLowerCase().includes(search.toLowerCase()))
  
useEffect(() => {getData()}, [])

const getData =async()=>{
  const myCoins=await get100Coins()
  if(myCoins){
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setLoading(false);
  }
      
}
  return (
    <>
     <Header/>
     <BackToTop/>
    {
      
    isLoading ? <Loader/>: <div>
         <Search 
           search={search}
           onSearchChange={onSearchChange}
         />
       <TabsComponent coins={search ? filteCoins:   paginatedCoins}/>
        {!search && <PaginationComponent page={page} handlePageChange={handlePageChange}/>}
    </div>
    }
    </>
  )
}

export default DashboardPage
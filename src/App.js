import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home';

import ComparePage from './pages/ComparePage.js'
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/Dashboard'  element={<DashboardPage/>}/>
        <Route path='/coin/:id'element={<CoinPage/>}/>
        <Route path='/compare' element={<ComparePage />}/>
        {/* <Route path='/watchlist' element={<watchlistPage/>}/> */}
      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;

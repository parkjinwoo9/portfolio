import './App.css';

import Main from './components/contents/Main';
import SideBar from './components/sidebar/Sidebar';
import Trip from './components/router/Trip';
import Food from './components/router/Food';
import FoodDetail from './components/food/FoodDetail';
import Board from './components/router/Board';
import MoveTop from './components/common/MoveTop';
import InputBoard from './components/board/InputBoard'; 



import FoodData from './components/food/FoodData';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <MoveTop />
      <BrowserRouter>
      <SideBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/trip' element={<Trip/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/food/:id' element={<FoodDetail FoodData={FoodData}/>}/>
          {/* <Route path='/board' element={<Board/>}/>
          <Route path='/board/write' element={<InputBoard/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

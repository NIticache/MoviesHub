import { Router } from 'react-router-dom';
import './App.css';
// import NewPage from './Components/NewPage';
import MoviePage from "./Components/MoviePage";
import Details from './Components/Details';
import {Routes,Route} from "react-router-dom"
import Demo from './Components/Demo';
import TopMovieList from './Components/TopMovieList';
import HomePage from './Components/HomePage';
function App() {
  
  return (
    <>
    <div style={{"background":"black"}}>   <Routes>
      <Route path='' element={<HomePage/>}></Route>
      <Route path='home' element ={<HomePage/>}></Route>
      <Route path ='details' element ={<Details/>}></Route>
      <Route path='demo' element={<Demo/>}></Route>
      <Route path ='series' element={<MoviePage/>}></Route>
      <Route path ='home' element={<HomePage/>}></Route>
      <Route path ='movies' element={<MoviePage/>}></Route>
    </Routes>
    </div>
 
    </>
  );
}
export default App;

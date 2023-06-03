import './global.css';
import Home from '../src/components/pages/home';
import Player from './components/pages/player';
import Navbar from './components/features/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './components/features/searchBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path ='/' element={<SearchBar/>} />
        <Route path='/player' element={<Player />} />
      </Routes>
    </>
  );
}

export default App;

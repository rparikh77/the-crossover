import './global.css';
import Navbar from './components/features/Navbar';
import Home from './components/pages/home';
import Feed from './components/pages/feed';
import Team from './components/pages/team';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/features/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

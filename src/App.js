import './global.css';
import Navbar from './components/features/Navbar';
import Home from './components/pages/home';
import Feed from './components/pages/feed';
import Team from './components/pages/team';
import Twitter from './components/pages/twitterbox';
import Twitter2 from './components/pages/twitterbox2';
import Twitter3 from './components/pages/twitterbox3';
import Twitter4 from './components/pages/twitterbox4';
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
        <Route path='/highlights' element={<Team />} />
        <Route path ='/woj' element={<Twitter /> } /> 
        <Route path ='/shams' element={<Twitter2 /> } /> 
        <Route path ='/stein' element={<Twitter3 /> } /> 
        <Route path ='/mffl' element={<Twitter4 /> } /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;

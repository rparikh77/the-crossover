import './global.css';
import Navbar from './components/features/Navbar';
import Home from './components/pages/home';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/features/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

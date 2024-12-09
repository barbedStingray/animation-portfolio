import logo from './logo.svg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom'

import HomePage from './homePage/HomePage';
import ClassicHam from './demoProjects/dropMenus/ClassicHam/ClassicHam';

function App() {


  return (
    <div className="aniPortfolio">

    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/classicHam' element={<ClassicHam />} />



    </Routes>

    </div>
  );
}

export default App;

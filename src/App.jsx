import React from 'react';
import './Styles/app.less';
import { Routes } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import GameLive from './pages/GameLive';
const App = () => {
  return (
    <>
      <header className={'header'}>
        <Link to={'/'} className={'link'}>
          Главная
        </Link>
        <Link to={'/about'} className={'link'}>
          About
        </Link>
        <Link to={'/live'} className={'link'}>
          Игра Жизнь
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/live" element={<GameLive/>} />
      </Routes>
    </>
  );
};

export default App;

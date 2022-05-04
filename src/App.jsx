import React from 'react';
import './app.less';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './modules/Home';
import AboutPage from './modules/AboutPage';
import GameLive from './modules/gameLive/GameLive';

function App() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link">
          Главная
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/live" className="link">
          Игра Жизнь
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/live" element={<GameLive />} />
      </Routes>
    </>
  );
}

export default App;

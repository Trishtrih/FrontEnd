import React from "react";
import "./app.less";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./modules/Home";
import AboutPage from "./modules/AboutPage";
import GameLive from "./modules/gameLive/GameLive";
import ToDoList from "./modules/ToDoList/ToDoList";
import PomodoroClock from "./modules/Pomodoro/PomodoroClock";

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

        <Link to="/Pomodoro" className="link">
          Помодоро
        </Link>

        <Link to="/ToDo" className="link">
          Пизженный Туду
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<GameLive />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ToDo" element={<ToDoList />} />
        <Route path="/Pomodoro" element={<PomodoroClock />} />
      </Routes>
    </>
  );
}

export default App;

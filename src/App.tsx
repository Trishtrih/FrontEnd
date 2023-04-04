import React from "react";
import "./app.less";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./modules/Home";
import AboutPage from "./modules/AboutPage";
import GameLive from "./modules/gameLive/Main";
import ToDoList from "./modules/ToDoList/ToDoList";
import PomodoroClock from "./modules/pomodoro/components/Pomodoro/index";
import BurgersMenu from "./modules/foodDelivery/components/FoodDelivery";
import Ships from "./modules/Ships/Main";

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
          Туду
        </Link>

        <Link to="/menu" className="link">
          Меню
        </Link>

        <Link to="/Ships" className="link">
          Корабли
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/*" element={<BurgersMenu />} />
        <Route path="/live" element={<GameLive />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/ToDo" element={<ToDoList />} />
        <Route path="/Pomodoro" element={<PomodoroClock />} />
        <Route path="/Ships" element={<Ships />} />
      </Routes>
    </>
  );
}

export default App;

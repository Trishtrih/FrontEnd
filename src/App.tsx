import React from "react";
import "./app.less";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./modules/Home/Main/index";
import GameLive from "./modules/gameLive/Main";
import PomodoroClock from "./modules/pomodoro/components/Pomodoro/index";
import Ships from "./modules/Ships/Main";
import ToDoList from "./modules/toDoList/components/ToDoList/ToDoList";
import CreditCard from "./modules/creditCard/components/Main/index";
function App() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link">
          Главная
        </Link>
        <Link to="/live" className="link">
          Игра Жизнь
        </Link>

        <Link to="/Pomodoro" className="link">
          Помодоро
        </Link>

        <Link to="/ToDo" className="link">
          ToDo
        </Link>

        <Link to="/Ships" className="link">
          Корабли
        </Link>
        {/* <Link to="/CreditCard" className="link">
          Форма кредитной карты
        </Link>*/}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<GameLive />} />
        <Route path="/ToDo" element={<ToDoList />} />
        <Route path="/Pomodoro" element={<PomodoroClock />} />
        <Route path="/Ships" element={<Ships />} />
        {/*<Route path="/CreditCard" element={<CreditCard />} />*/}
      </Routes>
    </>
  );
}

export default App;

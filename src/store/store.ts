import toDoReducer from "./toDoStore/reducer";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;

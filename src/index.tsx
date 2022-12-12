import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './redux/reducers';
// 1 -- import for redux store -- or ~Actually~ import from reduxjs/toolkit
import { legacy_createStore as createStore  } from "redux";
import { configureStore } from '@reduxjs/toolkit'
// WRAP THE APP with the react-redux provider and pass in the store
import { Provider } from 'react-redux';
// 2- Action
const petIncrement = () => {
  return {
    type: "PET_INCREASED" // name of the action ( like calling a function and giving it its name ) type = function name
  }
} 
// 2 - another action
const petDecrement = () => {
  return {
    type: "PET_DECREASED"
  }
}

// 3 -- Reducer 
// const petCounter = (state=0,action:{type:string}) => {
//   switch(action.type){
//     case "PET_INCREASED":
//       return state+1;
//     case "PET_DECREASED":
//       return state-1;
//     default:
//       return state;
//   }
// }

// 1 -- Store / creating the store 
let store = configureStore({reducer: reducers})
// let store = createStore(petCounter)
// let store = configureStore({reducer: petCounter});
// store.dispatch(petIncrement());
store.subscribe(() => console.log(store.getState()));

// Redux summary
// -------------
// 1. Store - store the state, considered the Global state.
// 2. Action - defines what action to perform on the state.
// 3. Reducer - check which action is being called, decides which action to be called. 
// 4. Dispatch - forms the action for the reducer, then performs the action on the state.
// --------------
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

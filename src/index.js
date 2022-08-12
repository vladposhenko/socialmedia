import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";
// import "materialize-css/dist/css/materialize.min.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SocialApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <SocialApp/>
);


 // store.subscribe(() => {
 //    let state = store.getState()
 //    rerenderEntireTree(state)
 // })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

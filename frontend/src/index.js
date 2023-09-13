import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./bootstrap.min.css";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));

// ReactDOM.render(
//   <Provider store={store}>
//     <Router />
//   </Provider>,
//   document.getElementById("root")
// );
// Hi how are you

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

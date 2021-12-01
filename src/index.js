import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './01/App';
import Game from './TicTacToe'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <App />
    <h1>Hello, world!</h1>
    <Game />
  </div>,
  document.getElementById('root')
  // 返回指定 ID 的元素：
  // 缺少会导致 Error: Target container is not a DOM element.
  // 和ReactDOM有关
  // https://zh-hans.reactjs.org/docs/react-dom.html
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

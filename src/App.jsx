import logo from './logo.svg';
import './App.css';
import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  // 定义一个继承于 React.Component 的叫APP的class组件 react如果要定义 class 组件，需要继承 React.Component
  // Class 可以通过extends关键字实现继承
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
// export命令定义了模块的对外接口
// export default命令，为模块指定默认输出。
// 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
export default App;

import logo from './logo.svg';
import './App.css';

function App() {
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
// export命令定义了模块的对外接口
// export default命令，为模块指定默认输出。
// 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
export default App;

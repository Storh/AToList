import React from 'react';
import TodoApp from './Todo';

// 简单组件,被传入的数据可在组件中通过 this.props 在 render() 访问。
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

// 除了使用外部数据（通过 this.props 访问）以外，
// 组件还可以维护其内部的状态数据（通过 this.state 访问）。
// 当组件的状态数据改变时，组件会再次调用 render() 方法重新渲染对应的标记。
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

class App extends React.Component {
  // 定义一个继承于 React.Component 的叫APP的class组件 react如果要定义 class 组件，需要继承 React.Component
  // Class 可以通过extends关键字实现继承
  render() {
    return (
      <div>
        <HelloMessage name="Storh" />
        <Timer />
        <TodoApp />
      </div>
    );
  }
}

// export命令定义了模块的对外接口
// export default命令，为模块指定默认输出。
// 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
export default App;

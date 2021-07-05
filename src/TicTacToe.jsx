import React from 'react';
import './TicTacToe.css';

// Square 组件渲染了一个单独的 <button>
class Square extends React.Component {
    // Square是一个 React 组件类，或者说是一个 React 组件类型。
    // 一个组件接收一些参数，我们把这些参数叫做 props（“props” 是 “properties” 简写）
    // 然后通过 render 方法返回需要展示在屏幕上的视图的层次结构。
    render() {
        // render 方法的返回值描述了你希望在屏幕上看到的内容,render 返回了一个 React 元素
        // 语法 <div /> 会被编译成 React.createElement('div')
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

// Board 组件渲染了 9 个方块
class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// Game 组件渲染了含有默认值的一个棋盘
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
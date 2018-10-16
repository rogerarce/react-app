import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoList from './component/TodoList/'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Testing</h1>
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root"),
)

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoList from './component/TodoList/'

const todos = [
  { key: 1, title: 'Todo app 1' },
  { key: 2, title: 'Todo app 2' },
  { key: 3, title: 'Todo app 3' },
]

class App extends Component {
  render() {
    return (
      <div>
        <h1>Testing</h1>
        <TodoList items={todos} />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root"),
)

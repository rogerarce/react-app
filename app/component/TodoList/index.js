import React from 'react'

class TodoList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { key: 1, title: 'Testing todo 1', completed: false },
        { key: 2, title: 'Testing todo 2', completed: false },
        { key: 3, title: 'Testing todo 3', completed: false },
      ]
    }
  }

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => <li key={todo.key}>{todo.title}</li>)}
      </ul>
    )
  }
}

export default TodoList

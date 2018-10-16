import React from 'react'

const TodoList = ({ items = [] }) => (
  <ul>
    {items.map(todo => <li key={todo.key}>{todo.title}</li>)}
  </ul>
)

export default TodoList

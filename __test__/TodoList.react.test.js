/*
 *
 */
import React from 'react'
import TodoList from '../app/component/TodoList'
import renderer from 'react-test-renderer'

test('TodoList component tests', () => {
  const component = renderer.create(
    <TodoList />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

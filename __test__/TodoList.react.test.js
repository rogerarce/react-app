/*
 *
 */
import React from 'react'
import TodoList from '../app/component/TodoList'
import renderer from 'react-test-renderer'
import { mount } from './enzyme'

const todos = [
  { key: 1, title: 'Todo app 1' },
  { key: 2, title: 'Todo app 2' },
  { key: 3, title: 'Todo app 3' },
];

test('TodoList component tests', () => {
  const component = renderer.create(
    <TodoList items={todos} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

describe('TodoList test', () => {
  it('renders list-items', () => {

    const wrapper = mount(<TodoList items={todos} />)

    //console.log(wrapper.debug())

    expect(wrapper.find('li')).toBeDefined()
    expect(wrapper.find('li')).toHaveLength(todos.length)
  })
})

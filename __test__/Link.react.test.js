/*
 *
 */
import React from 'react'
import Link from '../app/component/Link/'
import renderer from 'react-test-renderer'

test('Link component sample test', () => {
  const component = renderer.create(
    <Link uri="https://facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

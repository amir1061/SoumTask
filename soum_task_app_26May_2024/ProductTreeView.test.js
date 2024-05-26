import React from 'react';
import renderer from 'react-test-renderer';
import ProductTreeView from './ProductTreeView';

test('renders correctly', () => {
  const tree = renderer.create(<ProductTreeView />).toJSON();
  expect(tree).toMatchSnapshot();
});

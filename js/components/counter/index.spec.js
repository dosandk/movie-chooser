import React from 'react';
import Counter from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Counter/>).toJSON();

  expect(tree).toMatchSnapshot();
});

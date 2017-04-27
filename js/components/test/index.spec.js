import React from 'react';
import TestComponent from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<TestComponent/>).toJSON();

  expect(tree).toMatchSnapshot();
});

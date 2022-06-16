import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets/Rockets';
import store from '../Redux/Store/ConfigureStore';

const RocketProvider = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);

it('renders correctly', () => {
  const tree = renderer.create(<RocketProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders to the DOM', () => {
  const { container } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(container.getElementsByClassName('rocket').length).toBe(1);
});

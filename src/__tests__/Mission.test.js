import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../Redux/Store/ConfigureStore';

const MissionProvider = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

it('renders correctly', () => {
  const tree = renderer.create(<MissionProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile/MyProfile';
import store from '../Redux/Store/ConfigureStore';

const MyProfileProvider = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

it('renders correctly', () => {
  const tree = renderer.create(<MyProfileProvider />).toJSON();
  expect(tree).toMatchSnapshot();
});

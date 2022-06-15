import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from '../mission/mission';
import rocketReducer from '../Rocket/Rockets';

const reducer = combineReducers({
  rocketReducer,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

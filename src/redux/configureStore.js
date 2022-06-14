import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
  missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
